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
- GitHub Actions for CI/CD

## Project Structure

```
tic-tac-toe-app/
├── public/            # Static assets
├── src/               # Source code
│   ├── assets/        # Images and other assets
│   ├── components/    # React components
│   │   ├── GameBoard.jsx # Game board component
│   │   ├── GameOver.jsx  # Game over component
│   │   ├── Header.jsx    # Game header with logo
│   │   ├── Log.jsx       # Game log component
│   │   └── Player.jsx    # Player information component
│   ├── App.jsx        # Main application component
│   ├── index.css      # Global styles
│   └── main.jsx       # Entry point
├── .github/           # GitHub configuration
│   └── workflows/     # GitHub Actions workflows
│       └── deployment.yml # Deployment workflow
├── .gitignore         # Git ignore file
├── Dockerfile         # Docker configuration
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

## Deployment

This project uses GitHub Actions for continuous integration and deployment. The workflow is configured to:

1. **Lint**: Check code quality with ESLint
2. **Build**: Create a production-ready build of the application
3. **Deploy**: Deploy the application to the target server

The deployment process is triggered automatically when changes are pushed to the `master` branch.

### GitHub Actions Workflow

The workflow consists of three jobs:

- **Lint**: Checks code quality
- **Build**: Compiles the application and creates a production build
- **Deploy**: Deploys the build artifacts to the server

To modify the deployment configuration, edit the `.github/workflows/deployment.yml` file.

## Docker

### Building the Docker image

To build a Docker image of the application, run:

```bash
docker build . -t "tic-tac-toe-app:v1.0.0"
```

### Running the Docker container

To run the application in a Docker container, execute:

```bash
docker run -dp 3000:3000 tic-tac-toe-app:v1.0.0
```

This will map port 3000 from the container to port 3000 on your host machine, allowing you to access the application at `http://localhost:3000`.

### GitHub Container Registry

The Docker image is also available in GitHub Container Registry. You can pull it with:

```bash
docker pull ghcr.io/cbuelvasc/tic-tac-toe-app:latest
```

Or use a specific version by SHA:

```bash
docker pull ghcr.io/cbuelvasc/tic-tac-toe-app:ab97ef11e77274b8596ceab6f8b4d3ce817dd444
```

To run the application using the image from GitHub Container Registry:

```bash
docker run -dp 3000:3000 ghcr.io/cbuelvasc/tic-tac-toe-app:latest
```

The Docker image is automatically built and published to GitHub Container Registry through GitHub Actions whenever changes are pushed to the master branch.

## Future Enhancements

- Game history tracking
- Score keeping
- AI opponent option
- Game reset functionality
- Responsive design improvements
