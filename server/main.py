from typing import Union

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from starlette.responses import RedirectResponse

import pandas as pd

from typing import Dict, Any, List
import csv   

app = FastAPI()

origins = [
       "http://localhost",
       "http://localhost:3000",
       "http://localhost:8000",
       "http://localhost:8080",
       "http://localhost:5173",
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
    age, gender, school = info['age'], info['gender'], info['school']    
    
    for k, v in data.items():            
        with open(r'data.csv', 'a') as f:
            fields=[k, age, gender, school, *data[k]]
            writer = csv.writer(f)
            writer.writerow(fields)

    return {"res": "ok"}

@app.get("/chart")
def read_data():
    res = []
    columns = ['bike', 'scooter', 'mrt', 'light_rail', 'car', 'bus', 'e_scooter', 'walk', 'train', 'e_car']
    df = pd.read_csv('data.csv', usecols=columns)    
    avg_per_column = df.mean()
    res = avg_per_column.tolist()
    
    return {"res": res}

if __name__ == "__main__":    
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", debug=True)