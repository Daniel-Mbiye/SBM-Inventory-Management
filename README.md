# Core Functionality
**Real-Time Monitoring**: Instantly view which products are in stock and their exact quantities.

**Product Management**: Effortlessly Add new stock, Delete obsolete entries, and Edit product details (names, descriptions, and categories).

**Precision Inventory**: Update stock levels with a single click to ensure your digital records match your physical warehouse.

**Search & Filter**: Quickly locate specific items within large datasets.

# The Tech Stack
**Frontend**: React (powered by Vite) for a lightning-fast, reactive user interface.

**Backend**: FastAPI leveraging a Uvicorn ASGI server for high-concurrency performance.

**Database**: PostgreSQL for reliable, relational data storage and integrity.

**API**: RESTful architecture for clean communication between the client and server.

# Getting Started
## Prerequisites
Python 3.9+

Node.js & npm

PostgreSQL instance

## Installation
**Clone the Repo**: git clone https://github.com/yourusername/inventory-flow.git

**Backend Setup**: Navigate to /backend, install dependencies via pip install -r requirements.txt, and start the server with uvicorn main:app --reload.

**Frontend Setup**: Navigate to /frontend, run npm install, and launch the dev server with npm run dev.
