# 🍊 Http error

Http error middleware for express. It is used to handle errors and return them in a standardized format.

## Installation

```bash
npm install @vukovicpavle/orange-http-error
```

## Usage

#### **`index.ts`**

```javascript
import express from "express";
import {
  HttpError,
  httpErrorMiddleware,
} from "@vukovicpavle/orange-http-error";

// ...

const app = express();

// ...

// This route will throw an error
app.get("/", (req, res, next) => {
  next(new HttpError(404, "Not found"));
});

// Error handler after all routes
app.use(httpErrorMiddleware);

// ...
```

## API

### `HttpError`

Http error class. It is used to throw errors in the routes.

#### Parameters

| Name      | Type     | Description      | Required | Default |
| --------- | -------- | ---------------- | -------- | ------- |
| `status`  | `number` | Http status code | `true`   |         |
| `message` | `string` | Error message    | `true`   |         |

### `httpErrorMiddleware`

Http error middleware. It is used to handle errors and return them in a standardized format.
