# Use Node.js as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the Next.js app
COPY . .

# Expose frontend port
EXPOSE 3000

# Start Next.js
CMD ["npm", "run", "dev"]