def fisicalActivity():
    while True:
        physical_activity = input(
            "Яка ваша фізична активність?\n 1 - Фізичних навантажень нема, або вони дуже мінімальні\n 2 - Тренування середньої сили 3 рази в тиждень \n 3 - Тренування середньої сили 5 разів на тиждень \n 4 - Інтенсивні тренування 5 разів у тиждень \n 5 - Щоденні тренування \n 6 - Інтенсивні тренування щодня або 2 рази на день \n 7 - Щоденне навантаження + фізична робота \nВведіть номер, що відповідає вашій фізичній активності:  "
        )
        coefficient_of_activity = 0
        # Вираховуємо коефіцієнт активності
        if physical_activity == '1':
            coefficient_of_activity = 1.2
        elif physical_activity == '2':
            coefficient_of_activity = 1.38
        elif physical_activity == '3':
            coefficient_of_activity = 1.46
        elif physical_activity == '4':
            coefficient_of_activity = 1.55
        elif physical_activity == '5':
            coefficient_of_activity = 1.64
        elif physical_activity == '6':
            coefficient_of_activity = 1.73
        elif physical_activity == '7':
            coefficient_of_activity = 1.9
        else:
            print("Ви ввели неправильне значення.Спробуйте ще раз")
            continue
        break

    return coefficient_of_activity



#знаходження основного обміну
def findCalories(mass, age, height, sex, activity): # маса тіла в кг , вік в роках , ріст в сантиметрах, стать 'man'/ 'woman'
    DCI = 0 # Daily calorie intake
    mass_height_age = mass* 10 + height*6.25 - age*5

    if sex == 'woman':
        DCI = (mass_height_age - 161) * activity
    elif sex =='man':
        DCI = (mass_height_age +5) * activity


    return DCI

def protFatsCarbohyd(DCI): #Proteins Fats and Carbohydrates
    part = DCI/6
    protein_calories = part
    fat_calories = part
    carbohydrate_calories = part * 4
    proteins = round(protein_calories/4)
    fats = round(fat_calories/9)
    carbohydrates = round(carbohydrate_calories/4)
    message = f"Ваша денна норма калорій :{DCI}\n Щодня вам потрібно вживати:\n {proteins} г. білків,\n {fats} г. жирів,\n {carbohydrates} г. вуглеводів,"
    print(message)
    return {"DCI": DCI,"proteins": proteins, "fats": fats, "carbohydrates": carbohydrates}

# mass =78
# age=45
# height=175
# man_or_woman='woman'
# DCI=findCalories(mass, age, height, man_or_woman)
# protFatsCarbohyd(DCI)
