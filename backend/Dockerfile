# Use an official Node.js runtime as a parent image
FROM node:22-alpine

RUN npm install -g nodemon

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Make port 4000 available to the world outside this container
EXPOSE 4000

# Define the command to run the application
CMD ["npm", "run", "dev"]