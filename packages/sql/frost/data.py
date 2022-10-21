import pandas as pd
import numpy as np
import requests

# Create a dataframe
df = pd.DataFrame(columns=['result'])

# Add random values to the dataframe
for i in range (0, 10):
  data = pd.DataFrame({'result': [np.random.randint(1, 6, 1)[0] / 1000]})
  df = pd.concat([df, data], ignore_index=True)

# Post the dataframe to the database
url = 'http://localhost:8080/FROST-Server/v1.1/Datastreams(1)/Observations'
headers = {'Content-Type': 'application/json'}
for i in range (0, len(df)):
  data = df.iloc[i].to_json()
  r = requests.post(url, headers=headers, json=df.to_dict('records')[i])