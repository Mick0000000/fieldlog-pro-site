#!/bin/bash

# FieldLog Pro - Local Development Server
# Usage: ./serve.sh [port]
# Default port: 8000

PORT=${1:-8000}

echo ""
echo "  FieldLog Pro - Local Development Server"
echo "  ========================================"
echo ""
echo "  Starting server at: http://localhost:$PORT"
echo ""
echo "  Pages available:"
echo "    - Homepage:     http://localhost:$PORT/"
echo "    - Login:        http://localhost:$PORT/login.html"
echo "    - Signup:       http://localhost:$PORT/signup.html"
echo "    - About:        http://localhost:$PORT/about.html"
echo "    - Contact:      http://localhost:$PORT/contact.html"
echo "    - Privacy:      http://localhost:$PORT/privacy.html"
echo "    - Terms:        http://localhost:$PORT/terms.html"
echo ""
echo "  Press Ctrl+C to stop the server"
echo ""

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    python3 -m http.server $PORT
# Fall back to Python 2
elif command -v python &> /dev/null; then
    python -m SimpleHTTPServer $PORT
else
    echo "Error: Python is not installed"
    echo "Install Python or use another method to serve static files"
    exit 1
fi
