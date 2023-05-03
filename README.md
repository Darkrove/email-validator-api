# Email Validator API

With the Email Validator API, you can easily validate email with a free [API Key](https://emailvalidatorv1.vercel.app/login)

## Features

- Validates email addresses using regex pattern

- Returns JSON response with validation status and error message (if any)

- Multi language support 

## Requirements

- Node.js 12.x or higher

- npm

## Installation

Install my-project with npm

```bash

  git clone https://github.com/Darkrove/email-validator-api.git

  cd email-validator-api

  yarn install 

  yarn dev

```

    

## Usage/Examples

To use the client, you will need to have an API key from the Email Validator API. You can obtain an API key by signing up on the Email Validator API website.

Once you have your API key, you can create a new instance of the client by passing the API key as a parameter:

Example request:

```javascript

const axios = require('axios');

class EmailValidatorApiClient {

    constructor(apiKey) {

        this.apiKey = apiKey;

        this.baseUrl = 'http://emailvalidatorv1.vercel.app/api/v1';

    }

    async validate(emails) {

        try {

            const response = await axios.post(`${this.baseUrl}/validate`, {

                emails: emails

            }, {

                headers: {

                    Authorization: this.apiKey

                }

            });

            return response.data;

        } catch (error) {

            throw error;

        }

    }

}

module.exports = EmailValidatorApiClient;

```

You can then use the `validate` method of the client to `validate` email addresses. The validate method takes an array of email addresses as its parameter, and returns a Promise that resolves with an object containing the validation status and error message (if any) for each email address:

```javascript 

const EmailValidatorApiClient = require('email-validator-api-client');

const apiKey = 'YOUR_API_KEY';

const apiClient = new EmailValidatorApiClient(apiKey);

apiClient.validate(['test@example.com', 'invalidemail']).then((response) => {

    console.log(response);

}).catch((error) => {

    console.error(error);

});

```

## Contributing

Contributions are welcome! If you find any issues with the client or want to suggest an improvement, feel free to submit a pull request or open an issue.

See `contributing.md` for ways to get started.
