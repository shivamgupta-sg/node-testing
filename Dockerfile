FROM node:10-alpine

# Change WORKDIR
WORKDIR /node/cgpa_cal

# changing owner of the cgpa_cal and every file and directory under it to user node
RUN chown -R node:node /node/cgpa_cal

# copying
COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 8080

CMD [ "node", "app.js" ]