from fastapi import FastAPI

app = FastAPI()

@app.get("/imt/")
def calculate_imt(height: int, weight: float):
    return {"height": height, "weight": weight}


@app.get("/foots/")
def calculate_foots(age: int, activity: int, weight: float):
    return {"age": age,
    "activity": activity,
    "weight": weight}
