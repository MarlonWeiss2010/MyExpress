# API Test Instructions – VS Code REST Client Setup

This guide explains how to run standard API tests using a `.http` file in Visual Studio Code. These tests are part of the default testing setup in this framework.

---

## Requirements

You need **Visual Studio Code** and the **REST Client** extension.

### 1. Install VS Code (if not already installed)

Download and install it from: https://code.visualstudio.com/

### 2. Install REST Client Extension

1. Open VS Code.
2. Go to the **Extensions view** (or press `Ctrl+Shift+X`).
3. Search for: `REST Client`
4. Install the extension by **Huachao Mao**.

   > Extension Marketplace link:  
   > https://marketplace.visualstudio.com/items?itemName=humao.rest-client

---

## How to Run the API Test

1. Open the file `example.http` in VS Code.
2. Hover over the line with the HTTP method (e.g., `GET https://...`).
3. Click **"Send Request"** that appears above the line.
4. The response will appear in a new panel in VS Code.

---

## Customizing the Test

- You can replace the example URL and payload with your actual API.
- You can use environment variables in the request (see REST Client documentation for details).

---

## Files Provided

| File               | Purpose                                    |
| ------------------ | ------------------------------------------ |
| `rest-client.http` | Sample test request file using REST Client |
| `INSTRUCTIONS.md`  | Setup and usage guide (this file)          |

---

## Example Request

The request in `rest-client.http` demonstrates a `GET` and a `POST` call with all parameters commented and explained.

Happy testing!
