# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source files
COPY . .

# Build the application
RUN npm run build

# Production stage - Nginx
FROM nginx:alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy built files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Configure Nginx
RUN echo 'server { \
    listen 5901; \
    server_name _; \
    root /usr/share/nginx/html; \
    index index.html; \
    include /etc/nginx/mime.types; \
    location ~* \.js$ { \
        add_header Content-Type "application/javascript; charset=utf-8"; \
    } \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 5901

CMD ["nginx", "-g", "daemon off;"]
