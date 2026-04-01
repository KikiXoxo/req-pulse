# ReqPulse

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A simple **Express middleware** that logs HTTP requests with timestamps, status codes, and response times. Lightweight, configurable, and easy to use.

---

## Features

- Logs every HTTP request in a clean format.
- Shows **timestamp**, **method**, **URL**, **status code**, and **response time**.
- Configurable **colors** and **timestamps**.
- Works out-of-the-box with Express apps.

---

## Installation

```bash
npm install req-pulse
```

> For local testing, make sure `express` is installed as a dev dependency.

```bash
npm install express --save-dev
```

---

## Usage

```js
const express = require('express');
const reqPulse = require('req-pulse');

const app = express();

// Default usage: colors and timestamp enabled
app.use(reqPulse());

// Example routes
app.get('/', (req, res) => res.send('Hello! req-pulse is working.'));
app.get('/users', (req, res) =>
  res.json({ users: ['Alice', 'Bob', 'Charlie'] }),
);

app.listen(3000, () => console.log('Server running on port 3000'));
```

---

## Options

The middleware accepts an options object:

| Option      | Type    | Default | Description                        |
| ----------- | ------- | ------- | ---------------------------------- |
| `colors`    | boolean | true    | Enable or disable colored output.  |
| `timestamp` | boolean | true    | Include timestamp in log messages. |

**Example:**

```js
app.use(reqPulse({ colors: false, timestamp: true }));
```

---

## Example Output

```
[2026-04-01 18:42:13] GET / 200 - 2ms
[2026-04-01 18:42:14] POST /login 201 - 12ms
[2026-04-01 18:42:15] GET /redirect 302 - 1ms
```

With colors enabled, status codes are colored:

- `2xx` green
- `3xx` cyan
- `4xx` yellow
- `5xx` red
