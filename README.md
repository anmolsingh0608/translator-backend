# Translator Backend

This project is a Node.js backend application for a translator service. It allows users to submit text for translation and receive the translated text back in the desired language.

## Getting Started

To run this application locally, you'll need to have Node.js and NPM installed on your machine.

1. Clone this repository to your local machine.
2. Run `npm install` to install all dependencies.
3. Run `npm start` to start the server.

The server will run on `http://localhost:5000` by default.

## Endpoints

This backend application exposes the following:

### POST `/api/translate`

This endpoint takes a JSON object with the following format:

- `query`: The text to be translated.
- `from`: The language code of the source language (e.g., "en" for English).
- `to`: The language code of the target language (e.g., "es" for Spanish).






