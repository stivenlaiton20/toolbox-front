# Usa la imagen oficial de Node 16
FROM node:18

WORKDIR /app
COPY front/package.json front/package-lock.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]