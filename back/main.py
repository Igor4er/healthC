from fastapi import FastAPI
from BMI import calculate_bmi
from caloryfunc import findCalories, protFatsCarbohyd

app = FastAPI()

@app.get("/bmi/")
def calculate_imt(height: float, weight: float, age: int, sex: str):
    message = calculate_bmi(height=height, weight=weight, age=age, sex=sex)
    return message


@app.get("/calories/")
def calculate_calories(age: int, sex: str, activity: int, height: int, weight: float):
    DCI=findCalories(mass=weight, age=age, height=height, sex=sex, activity=activity)
    return protFatsCarbohyd(DCI)



@app.get("/steps/")
def calculate_steps():
    # Method for calculting optimal counts of steps
    return {"message": "Рекомендована кількість кроків 10000 незалежно від віку, статі та ваги"
    }
