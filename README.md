# Quote Generator 💭

A simple and elegant quote generator web application that displays random inspirational quotes. This project was originally created during my high school years (5 years ago) and recently updated with a working API.

## ✨ Features

- **Random Quote Generation** - Get inspired with random quotes from famous personalities
- **Beautiful UI** - Clean and responsive design with subtle animations
- **Twitter Integration** - Share your favorite quotes directly on Twitter
- **Loading Animation** - Smooth loading spinner while fetching quotes
- **Responsive Design** - Works perfectly on desktop and mobile devices
- **Fallback System** - Uses local quotes if API is unavailable

## 🛠️ Technologies Used

This project is built using **vanilla web technologies** only:

- **HTML5** - Structure and content
- **CSS3** - Styling and animations
- **JavaScript (ES6+)** - Functionality and API calls
- **Font Awesome** - Icons
- **Google Fonts** - Montserrat font family

*No frameworks or libraries used - just pure, simple web development!*

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/gichbe/quote-generator.git
   cd quote-generator
   ```

2. **Open in VS Code** (recommended)
   ```bash
   code .
   ```

3. **Install Live Server extension** in VS Code for best experience

4. **Run the application**
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - Or simply open `index.html` in your browser

## 📁 Project Structure

```
quote-generator/
│
├── index.html          # Main HTML file
├── style.css           # Styling and animations
├── script.js           # Main JavaScript functionality
├── quotes.js           # Local fallback quotes
└── README.md           # Project documentation
```

## 🌐 API Integration

The application uses the [Quotable API](https://api.quotable.io/) to fetch quotes. If the API is unavailable, it automatically falls back to a local collection of 150+ inspirational quotes.

## 🎨 Features Overview

- **Dynamic Quote Display** - Quotes adapt their font size based on length
- **Loading States** - Loading spinner during API calls
- **Error Handling** - Graceful fallback to local quotes if API fails
- **Social Sharing** - One-click Twitter sharing with proper formatting
- **Responsive Layout** - Optimized for all screen sizes

## 📱 Demo

[Live Demo](https://gichbe.github.io/quote-generator/)

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

## 👨‍💻 About

Created with ❤️ during my high school days as a learning project to practice fundamental web development skills without relying on frameworks or libraries.

---

*"The best way to get started is to quit talking and begin doing." - Walt Disney*