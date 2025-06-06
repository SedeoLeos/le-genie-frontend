##########################################	
# DOCKERFILE FOR DEV ENVIRONMENT, PRODUCTION & STAGING         
##########################################

FROM node:20-alpine AS base

ENV NODE_ENV="production"

# Copy only package files first for better cache
COPY package.json yarn.lock ./

# Enable corepack and yarn
RUN corepack enable && corepack prepare yarn@stable --activate

FROM base AS builder
# Set working directory
WORKDIR /app



# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the code
COPY . .

# Build the app
RUN yarn build

FROM base AS production

WORKDIR /app
ENV TZ=Europe/Paris

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Start the server using the production build
CMD ["yarn", "start"]
