import requests
import json

# Set the API endpoint URL
url = "http://localhost:8080/FROST-Server/v1.1/Things"

# Load the JSON file
with open(
    "C:\\Users\\Salah\\Documents\\GitHub\\aps-gis-iot\\packages\\sql\\frost\\tunnel.entity.json",
    "r",
) as f:
    json_data = json.load(f)

# Send the POST request with the JSON data
response = requests.post(url, json=json_data)

# Print the response content
print(response.content)
