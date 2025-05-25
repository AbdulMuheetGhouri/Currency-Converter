# Currency Converter

A simple web-based currency converter that allows users to convert between different currencies using real-time exchange rates.

![Currency Converter Screenshot](screenshot.png) <!-- Add a screenshot if available -->

## Features

- Convert between 150+ world currencies
- Real-time exchange rates via ExchangeRate-API
- Country flag display for selected currencies
- Responsive design that works on mobile and desktop
- Simple and intuitive user interface

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- ExchangeRate-API (v6)
- FlagsAPI for country flags
- Font Awesome icons

## How to Use

1. Enter the amount you want to convert
2. Select the source currency from the "From" dropdown
3. Select the target currency from the "To" dropdown
4. Click "Get Exchange Rate" button
5. View the converted amount below the button

You can also swap the currencies by clicking the exchange icon between the dropdowns.

## API Key Note

This project uses a free-tier API key from ExchangeRate-API. For production use, you should:

1. Get your own API key from [ExchangeRate-API](https://www.exchangerate-api.com/)
2. Replace the key in the `script.js` file (base_url variable)

## Installation

No installation required - just open the `index.html` file in any modern web browser.

For development:
1. Clone the repository
2. Open the project in your favorite code editor
3. Make changes as needed

## Acknowledgments

- ExchangeRate-API for providing the currency data
- FlagsAPI for the country flags
- Font Awesome for the icons

<h3>Made with &hearts; by Abdul Muheet Ghouri. &copy;2025</h3>