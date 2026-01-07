# 🌤️ Weather App (PyQt5)

A simple desktop Weather Application built using Python and PyQt5 that fetches real-time weather data from the OpenWeatherMap API.

The app allows users to enter a city name and displays:
- Temperature in Celsius
- Weather description
- Weather emoji based on conditions

---

## 🚀 Features

- Clean PyQt5 GUI
- Real-time weather data
- Emoji-based weather visualization
- Proper error handling (invalid city, network issues, API errors)
- Secure API key handling using environment variables

---

## 🛠️ Tech Stack

- Python 3
- PyQt5
- Requests
- OpenWeatherMap API

---

## 📦 Installation & Setup

### Clone the repository

    git clone https://github.com/aksmisr/Weather-App.git
    cd Weather-App

### Create and activate virtual environment

Windows (PowerShell):

    python -m venv .venv
    .\.venv\Scripts\activate

Linux / macOS:

    python -m venv .venv
    source .venv/bin/activate

### Install dependencies

    pip install -r requirements.txt

---

## 🔑 API Key Setup (IMPORTANT)

Create a free API key from:
https://openweathermap.org/api

Windows (PowerShell):

    setx OPENWEATHER_API_KEY "your_api_key_here"

Linux / macOS:

    export OPENWEATHER_API_KEY="your_api_key_here"

Restart VS Code or terminal after setting the API key.

---

## ▶️ Run the Application

    python main.py

---

## 📁 Project Structure

    Weather-App/
    │
    ├── main.py
    ├── requirements.txt
    ├── .gitignore
    └── README.md

---

## 🔐 Security Notes

- API key is NOT hardcoded in the source code
- Environment variables are used for safety
- Do NOT push .env or secret files to GitHub
- Old leaked API keys should be deleted immediately

---

#
