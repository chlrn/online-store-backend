FROM node:12

WORKDIR /Users/aleksandralebedeva-preobrazenskaa/WebstormProjects/online-store

COPY package*.json ./

RUN npm install

COPY .. .

EXPOSE 5099

CMD ["npm", "start"]
