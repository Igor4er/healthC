def calculate_bmi(height, weight, age, sex):
    #перевірка
    if not isinstance(height, (int, float)):
        try:
            height = float(height)
        except ValueError:
            return "Помилка: Невірний формат висоти"

    if not isinstance(weight, (int, float)):
        try:
            weight = float(weight)
        except ValueError:
            return "Помилка: Невірний формат ваги"

    if not isinstance(age, int):
        try:
            age = int(age)
        except ValueError:
            return "Помилка: Невірний формат віку"

    if sex.lower() not in ("man", "woman"):
        return "Помилка: Стать повинна бути 'man' або 'woman'"

    bmi = round(weight / ((height/100) ** 2), 2)
    message = f"Ваш індекс маси тіла: {bmi}"
    is_good = bmi

    if sex == "man":
        if age <= 8:
            is_good += 4
            if is_good <= 18.5:
                message += ", це показник недостатньої маси"
            elif is_good <= 25:
                message += ", це показник нормальної маси"
            elif is_good <= 30:
                message += ", це показник надмірної маси"
            else:
                message += ", це показник ожиріння"
        elif age <= 12:
            is_good += 2
            if is_good <= 18.5:
                message += ", це показник недостатньої маси"
            elif is_good <= 25:
                message += ", це показник нормальної маси"
            elif is_good <= 30:
                message += ", це показник надмірної маси"
            else:
                message += ", це показник ожиріння"
        elif age <= 17:
            is_good += 1
            if is_good <= 18.5:
                message += ", це показник недостатньої маси"
            elif is_good <= 25:
                message += ", це показник нормальної маси"
            elif is_good <= 30:
                message += ", це показник надмірної маси"
            else:
                message += ", це показник ожиріння"
        elif age <= 24:
            if is_good <= 18.5:
                message += ", це показник недостатньої маси"
            elif is_good <= 25:
                message += ", це показник нормальної маси"
            elif is_good <= 30:
                message += ", це показник надмірної маси"
            else:
                message += ", це показник ожиріння"
        elif age <= 35:
            is_good -= 1
            if is_good <= 18.5:
                message += ", це показник недостатньої маси"
            elif is_good <= 25:
                message += ", це показник нормальної маси"
            elif is_good <= 30:
                message += ", це показник надмірної маси"
            else:
                message += ", це показник ожиріння"
        elif age <= 50:
            is_good -= 2
            if is_good <= 18.5:
                message += ", це показник недостатньої маси"
            elif is_good <= 25:
                message += ", це показник нормальної маси"
            elif is_good <= 30:
                message += ", це показник надмірної маси"
            else:
                message += ", це показник ожиріння"
        else:
            is_good -= 3
            if is_good <= 18.5:
                message += ", це показник недостатньої маси"
            elif is_good <= 25:
                message += ", це показник нормальної маси"
            elif is_good <= 30:
                message += ", це показник надмірної маси"
            else:
                message += ", це показник ожиріння"
    elif sex == "woman":
        if age <= 8:
            is_good += 2
            if is_good <= 18.5:
                message += ", це показник недостатньої маси"
            elif is_good <= 25:
                message += ", це показник нормальної маси"
            elif is_good <= 30:
                message += ", це показник надмірної маси"
            else:
                message += ", це показник ожиріння"
        elif age <= 12:
            if is_good <= 18.5:
                message += ", це показник недостатньої маси"
            elif is_good <= 25:
                message += ", це показник нормальної маси"
            elif is_good <= 30:
                message += ", це показник надмірної маси"
            else:
                message += ", це показник ожиріння"
        elif age <= 17:
            is_good -= 1
            if is_good <= 18.5:
                message += ", це показник недостатньої маси"
            elif is_good <= 25:
                message += ", це показник нормальної маси"
            elif is_good <= 30:
                message += ", це показник надмірної маси"
            else:
                message += ", це показник ожиріння"
        elif age <= 24:
            is_good -= 2
            if is_good <= 18.5:
                message += ", це показник недостатньої маси"
            elif is_good <= 25:
                message += ", це показник нормальної маси"
            elif is_good <= 30:
                message += ", це показник надмірної маси"
            else:
                message += ", це показник ожиріння"
        elif age <= 35:
            if is_good <= 18.5:
                message += ", це показник недостатньої маси"
            elif is_good <= 25:
                message += ", це показник нормальної маси"
            elif is_good <= 30:
                message += ", це показник надмірної маси"
            else:
                message += ", це показник ожиріння"
        elif age <= 50:
            is_good -= 1
            if is_good <= 18.5:
                message += ", це показник недостатньої маси"
            elif is_good <= 25:
                message += ", це показник нормальної маси"
            elif is_good <= 30:
                message += ", це показник надмірної маси"
            else:
                message += ", це показник ожиріння"
        else:
            is_good -= 2
            if is_good <= 18.5:
                message += ", це показник недостатньої маси"
            elif is_good <= 25:
                message += ", це показник нормальної маси"
            elif is_good <= 30:
                message += ", це показник надмірної маси"
            else:
                message += ", це показник ожиріння"


    return message