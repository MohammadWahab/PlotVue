# Use the official Node.js image with version 21.6.2 as the base image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Vue.js application
RUN npm run build

# Install a simple HTTP server to serve static content
RUN npm install -g serve

# Expose port 5000 to the outside world
EXPOSE 8080

# Command to run the application
CMD ["serve", "-s", "dist", "-l", "8080"]
