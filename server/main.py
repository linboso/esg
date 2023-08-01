from typing import Union
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from starlette.responses import RedirectResponse
import numpy as np

import pandas as pd

from typing import Dict, Any, List
import csv   

app = FastAPI()

origins = [
    #    "http://localhost",
    #    "http://localhost:3000",
    #    "http://localhost:8000",
    #    "http://localhost:8080",
    #    "http://localhost:5173",
       "https://cityscope.csltaipeitech.com",
   ]

app.add_middleware(
       CORSMiddleware,
       allow_origins=origins,
       allow_credentials=True,
       allow_methods=["*"],
       allow_headers=["*"],
   )

@app.get("/")
def read_root():
    return RedirectResponse(url="/docs")


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.post("/data")
def create_data(payload: Dict[Any, Any]) -> dict:
    info, data = payload['info'], payload['data']
    print(info)
    id, age, gender, school = info['uuid'], info['age'], info['gender'], info['school']    
    
    for k, v in data.items():            
        with open(r'./data.csv', 'a') as f:
            fields=[id, k, age, gender, school, *data[k]]
            writer = csv.writer(f)
            writer.writerow(fields)

    return {"res": "ok"}

@app.get("/chart")
def read_data():

    columns = ['bike', 'scooter', 'mrt', 'light_rail', 'car', 'bus', 'e_scooter', 'walk', 'train', 'e_car']
    df = pd.read_csv('data.csv', usecols=columns)


    df.fillna(0)
    np_table = df.to_numpy()

    t = [np.sum(np_table[:,i])/ np.count_nonzero(np_table[:,i]) if np.sum(np_table[:,i]) != 0 else 0  for i in range(10)]
    w = [5.25, 85.82, 18.08, 40.83, 173.53, 70, 16.8, 0, 54.67, 38.86]
    t2 = [t[i] * w[i] for i in range(10)]
    t3 = [np.count_nonzero(np_table[:,i]) for i in range(10)]
    # print('===============')
    # print(t)
    # print('===============')
    # print(t2)


    return {"res": t2, "res2": t, "res3": t3}


if __name__ == "__main__":    
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", debug=True)