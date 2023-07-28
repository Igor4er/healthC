from fastapi import FastAPI

app = FastAPI()

@app.get("/imt/")
def calculate_imt(height: int, weight: float):
    return {"height": height, "weight": weight}


@app.get("/foots/")
def calculate_foots(age: int, sex: str, activity: int, height: int, weight: float):
    return {"age": age,
    "sex": sex,
    "activity": activity,
    "height": height,
    "weight": weight,
    }
