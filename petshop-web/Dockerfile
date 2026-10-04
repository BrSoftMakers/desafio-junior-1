# ---- dependências ----
FROM node:24-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# ---- build ----
FROM node:24-alpine AS build
WORKDIR /app
# NEXT_PUBLIC_* é embutida no código do navegador NA HORA DO BUILD
ARG NEXT_PUBLIC_API_URL=http://localhost:3001
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---- runtime ----
FROM node:24-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public
USER node
EXPOSE 3000
CMD ["node", "server.js"]