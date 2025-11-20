# React App - Modern UI

A beautiful React application built with Vite, featuring a modern gradient design and smooth animations. Configured for deployment on Coolify using Docker.

## Features

- ⚡ **Lightning Fast** - Built with Vite for instant hot module replacement
- 🎨 **Modern Design** - Beautiful gradient UI with smooth animations
- 📱 **Responsive** - Works perfectly on all devices and screen sizes
- 🚀 **Production Ready** - Optimized build with Docker and Coolify deployment
- ✨ **Interactive** - Counter component with smooth transitions
- 🎯 **Feature Cards** - Hover effects and gradient animations

## Design Highlights

- Purple gradient background (different from Next.js app)
- Glassmorphism effects with backdrop blur
- Smooth hover animations and transitions
- Interactive counter with gradient buttons
- Feature cards with gradient overlays on hover
- Fully responsive design

## Prerequisites

- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

## Installation

Install the dependencies:

```bash
npm install
```

## Running the Application

### Development mode

```bash
npm run dev
```

The server will start on `http://localhost:5901` with hot module replacement.

### Production build

```bash
npm run build
```

This will create an optimized production build in the `dist` directory.

### Preview production build

```bash
npm run preview
```

## Docker Deployment

### Building the Docker Image

```bash
docker build -t react-app .
```

### Running with Docker

```bash
docker run -p 5901:5901 react-app
```

The application will be served via Nginx on port 5901.

## Coolify Deployment

This application is configured for easy deployment on Coolify using Docker.

### Prerequisites

- A Coolify instance
- A public Git repository (GitHub, GitLab, etc.)

### Deployment Steps

1. **Push to Repository**: Ensure your code is pushed to a public Git repository

2. **Add Application in Coolify**:
   - Go to your Coolify dashboard
   - Click "New Resource" → "Application"
   - Select your Git repository
   - Coolify will automatically detect the `coolify.json` configuration
   - No need to set base directory (it's already configured as root `/`)

3. **Configuration**:
   - The `coolify.json` file is already configured with:
     - Build pack: `dockerfile` (uses the Dockerfile)
     - Base directory: `/` (root of repository)
     - Exposed port: `5901`
     - Static site: `true`

4. **Deploy**: Click deploy and Coolify will:
   - Build the Docker image using the Dockerfile
   - Create an optimized production build
   - Serve the application via Nginx
     - Expose the application on port 5901

### Files for Coolify Deployment

- `Dockerfile` - Multi-stage Docker build with Nginx
- `coolify.json` - Coolify-specific configuration
- `.dockerignore` - Files to exclude from Docker build

## Project Structure

```
.
├── public/          # Static assets
├── src/
│   ├── App.jsx      # Main application component
│   ├── App.css      # Application styles
│   ├── main.jsx     # Application entry point
│   └── index.css    # Global styles
├── index.html       # HTML template
├── package.json     # Dependencies and scripts
├── vite.config.js   # Vite configuration
├── Dockerfile       # Docker build configuration
├── coolify.json     # Coolify deployment config
└── README.md        # This file
```

## Technology Stack

- **React** - UI library
- **Vite** - Next-generation frontend build tool
- **Nginx** - Web server for static files
- **Docker** - Containerization for deployment

## Standalone Repository

This is a standalone React application repository, ready for deployment on Coolify. All configuration files are set up for root-level deployment.

## License

ISC

