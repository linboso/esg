from typing import Union

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from starlette.responses import RedirectResponse

import pandas as pd

app = FastAPI()

origins = [
       "http://localhost",
       "http://localhost:3000",
       "http://localhost:8000",
       "http://localhost:8080",
       "http://localhost:5174",
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
def create_data(data) -> dict:
    print(data)
    return {"res": "ok"}

@app.get("/chart")
def read_data():
    res = []
    df = pd.read_csv('data.csv')
    for i, v in df.iterrows():
        tmp = {}
        trans = []
        tmp['gender'] = v['gender']
        tmp['location'] = v['location']
        trans.append(v['bike'])
        trans.append(v['motor'])
        trans.append(v['e_motor'])
        tmp['trans'] = trans
        res.append(tmp)

    return {"res": res}

if __name__ == "__main__":
    # uvicorn.run(app, debug=True)
    uvicorn.run(app, host="0.0.0.0", debug=True)