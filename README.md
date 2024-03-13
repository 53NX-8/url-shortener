## URL Shortener App

This app allows users to shorten lengthy URLs, making them easier to share and manage. Additionally, it tracks the number of times each shortened URL is clicked, providing valuable analytics.

## Screenshots

![App Screenshot](/client/static/demo.png)

## Installation

Clone the repository

```bash
  git clone https://github.com/53NX-8/url-shortener.git
  cd url-shortener
```

### Front-end

```bash
  cd client
  npm install
```

### Back-end

```bash
  cd api
  yarn install
```

## Usage

### Front-End

Start the Development Server:

```bash
cd client
npm run dev
```

This opens the app in your default browser, usually at http://localhost:5173

### Back-End

Start the Development Server:

```bash
cd api
yarn dev
```

The API server typically starts on port 5096 (http://localhost:5096/).

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

### Front-End

`PUBLIC_SERVER_URL`

### Back-End

`DATABASE_URL`

`CLIENT_URL`

## Contributing

Contributions are always welcome!

If you're interested in contributing to this project, feel free to fork the repository and submit pull requests. Please adhere to any coding style guidelines or conventions that may be established.
