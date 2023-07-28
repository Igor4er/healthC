import requests

url = "http://localhost:8000/user/"
data = {
    "name": "John Doe",
    "age": 30
}

response = requests.post(url, json=data)
print(response.json())
