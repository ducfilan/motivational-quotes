# Random Motivational Quotes API

A simple, lightweight Node.js API that serves random motivational quotes.

## Features

- 200+ carefully curated motivational quotes
- Returns quotes in JSON format
- Built with Express.js
- CORS enabled
- Simple and lightweight

## Response Format

The API returns quotes in the following JSON format: 
```json
{
    "text": "Life is 10% what happens to you and 90% how you react to it.",
    "author": "Charles R. Swindoll"
}
```

## Setup

1. Clone this repository
2. Install dependencies:
```bash
npm install
```
3. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Endpoints

- GET `/api/quote`: Returns a random motivational quote

## Local Development

The server will run on `http://localhost:3000` by default. You can change the port by setting the `PORT` environment variable.