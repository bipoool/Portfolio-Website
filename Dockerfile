# syntax=docker/dockerfile:1

FROM node:18-alpine AS deps
WORKDIR /app
# Install dependencies using lockfile for reproducible builds
COPY package.json package-lock.json ./
RUN npm ci

FROM node:18-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM nginx:1.25-alpine AS runner
# Copy the production build into Nginx's served directory
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
