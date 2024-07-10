# Web Server Example

This is a simple web server built with Node.js without using any external frameworks like Express. 
It serves static files and logs requests.

## Project Structure
project/
│
├── css/
│ └── style.css
│
├── data/
│ ├── data.json
│ └── data.txt
│
├── img/
│ └── img.jpg
│
├── views/
│ ├── subdir/
│ │ └── index.html
│ ├── 404.html
│ ├── index.html
│ ├── newpage.html
│ └── test.html
│
├── README.md
├── logEvent.js
├── server.js
├── package.json
└── package-lock.json

## Setup

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd project
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Run the server:
    ```sh
    npm start
    ```

4. Open your browser and navigate to:
    - `http://localhost:3500/` for the home page
    - `http://localhost:3500/newpage` for the new page
    - `http://localhost:3500/test` for the test page
    - `http://localhost:3500/any-other-page` for a 404 error page

## Files

- **server.js**: Main server file that handles requests and serves files.
- **logEvent.js**: A custom logging module.
- **css/style.css**: Stylesheet for the HTML pages.
- **data/data.json**: Sample JSON data.
- **data/data.txt**: Sample text data.
- **img/img.jpg**: Sample image.
- **views/404.html**: 404 error page.
- **views/index.html**: Home page.
- **views/newpage.html**: New page with an image.
- **views/test.html**: Test page.
- **views/subdir/index.html**: Subdirectory index page.

## Logging

The server logs all requests to a file using a custom event emitter.

## License

This project is licensed under the MIT License.