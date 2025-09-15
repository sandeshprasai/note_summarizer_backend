# Note Summarizer Backend

A backend API for summarizing text, built with Node.js and Express.

## ⚠️ Current Status

This project is in the **very early stages of development**. 

## 🚀 Features (Completed)

*   **Basic Server**: Express.js server is set up and running.

## 🛠️ Tech Stack

*   **Runtime**: Node.js
*   **Framework**: Express.js
*   **HTTP Client**: Axios

## 📦 Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/sandeshprasai/note_summarizer_backend.git
    cd note_summarizer_backend
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Environment Setup**

    *   Create a `.env` file in the root directory.
    *   JWT_SECRET=your_super_secret_jwt_key
    *   ACCESS_TOKEN_EXPIRY="Your Token Expiry Time"
   
4.  **Start the server**
    ```bash
    nodemon start
    ```
    The server will start on `http://localhost:8000`.

    
## 📁 Project Structure
note_summarizer_backend/
├── Controller/     # Handles request logic
├── Model/          # Data models / schemas
├── Routes/         # API routes
├── Utills/         # Helper functions
├── index.js        # Entry point
├── package.json
├── package-lock.json
└── .gitignore

