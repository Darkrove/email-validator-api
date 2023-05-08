# Email Validator API

With the Email Validator API, you can easily validate email with a free [API Key](https://emailvalidatorv1.vercel.app/login)

## Features

- Validates email addresses using regex pattern

- Returns JSON response with validation status and error message (if any)

- Multi language support

## Requirements

- Node.js 12.x or higher

- npm

## Usage/Examples

To use the client, you will need to have an API key from the Email Validator API. You can obtain an API key by signing up on the Email Validator API website.

Once you have your API key, you can create a new instance of the client by passing the API key as a parameter:

Example request:

```javascript
const axios = require("axios");

class EmailValidatorApiClient {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "http://emailvalidatorv1.vercel.app/api/v1";
  }

  async validate(emails) {
    try {
      const response = await axios.post(
        `${this.baseUrl}/validate`,
        {
          emails: emails,
        },
        {
          headers: {
            Authorization: this.apiKey,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = EmailValidatorApiClient;
```

You can then use the `validate` method of the client to `validate` email addresses. Once you have created a new instance of the `EmailValidatorApiClient` by passing your API key as a parameter, you can use the `validate` method of the client to validate email addresses.

Here's an example of how to use the `validate` method:

```javascript
const EmailValidatorApiClient = require("./email-validator-api-client");

// Replace 'your_api_key_here' with your actual API key
const apiKey = "your_api_key_here";

const emailValidator = new EmailValidatorApiClient(apiKey);

const email = "test@example.com";

emailValidator
  .validate(email)
  .then((validationResult) => {
    console.log(validationResult);
  })
  .catch((error) => {
    console.error(error);
  });
```

The `validate` method takes an email address as its parameter and returns a promise that resolves with a validation result object for the email address.

Note that the `validate` method only validates one email address at a time. If you need to validate multiple email addresses, you can call the `validate` method multiple times with different email addresses.

## Contributing

Contributions are welcome! If you find any issues with the client or want to suggest an improvement, feel free to submit a pull request or open an issue.

See `contributing.md` for ways to get started.
