export const nodejs = `const axios = require("axios");
const options = {
    method: 'POST',
    url: 'https://emailvalidatorv1.vercel.app/api/v1/validate',
    params: {
      email: 'Your email',
    },
    headers: {
      'Authorization': 'YOUR_API_KEY',
    }
  };
  
axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});`;

export const python = `import requests
url = 'https://emailvalidatorv1.vercel.app/api/v1/validate'
api_key = 'YOUR_API_KEY'
email = 'Your email'
headers = {
    'Authorization': api_key
}
payload = {
    'email': email,
}
response = requests.post(url, headers=headers, json=payload)
if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print(f'Request failed with status code {response.status_code}')`;

export const go = `package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
)

func main() {
	url := "http://emailvalidatorv1.vercel.app/api/v1/validate"
	data := map[string]string{"text": "Your text"}
	jsonData, _ := json.Marshal(data)

	request, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
	if err != nil {
		panic(err)
	}

	request.Header.Set("Content-Type", "application/json")
	request.Header.Set("Authorization", "YOUR_API_KEY")

	client := &http.Client{}
	response, err := client.Do(request)
	if err != nil {
		panic(err)
	}
	defer response.Body.Close()

	var result map[string]interface{}
	err = json.NewDecoder(response.Body).Decode(&result)
	if err != nil {
		panic(err)
	}

	fmt.Println(result)
}`;

export const curl = `curl --request POST
--url https://emailvalidatorv1.vercel.app/api/v1/validate
--header 'Authorization: YOUR_API_KEY'
--header 'Content-Type: application/json'
--data '{"email":"Your email"}'`;
