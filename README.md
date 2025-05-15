# React Tic-Tac-Toe App

A modern implementation of the classic Tic-Tac-Toe game built with React and Vite.

## Overview

This project is a simple yet interactive Tic-Tac-Toe game that allows two players to compete against each other. Players can customize their names and take turns placing their symbols (X or O) on the game board.

## Features

- Interactive game board
- Player name customization
- Turn-based gameplay
- Visual indication of active player
- React 19 implementation

## Technologies Used

- React 19
- Vite 6
- JavaScript (ES6+)
- CSS3
- Prop-Types for type checking

## Project Structure

```
02-tic-tac-toe-app/
├── public/            # Static assets
├── src/               # Source code
│   ├── assets/        # Images and other assets
│   ├── components/    # React components
│   │   ├── Header.jsx # Game header with logo
│   │   └── Player.jsx # Player information component
│   ├── App.jsx        # Main application component
│   ├── index.css      # Global styles
│   └── main.jsx       # Entry point
├── .gitignore         # Git ignore file
├── eslint.config.js   # ESLint configuration
├── index.html         # HTML entry point
├── package.json       # Dependencies and scripts
└── vite.config.js     # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd 02-tic-tac-toe-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run lint` - Runs ESLint to check code quality
- `npm run preview` - Previews the production build locally

## Future Enhancements

- Game history tracking
- Score keeping
- AI opponent option
- Game reset functionality
- Responsive design improvements
