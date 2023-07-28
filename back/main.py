from fastapi import FastAPI

app = FastAPI()

@app.get("/imt/")
def calculate_imt(height: int, weight: float):
    return {"height": height, "weight": weight}


@app.get("/steps/")
def calculate_steps(age: int, sex: str, activity: int, height: int, weight: float):
    # Method for calculting optimal counts of steps
    return {"age": age,
    "sex": sex,
    "activity": activity,
    "height": height,
    "weight": weight,
    }
