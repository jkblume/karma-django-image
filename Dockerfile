FROM markadams/chromium-xvfb-js:7

RUN apt-get update
RUN apt-get install -y git

WORKDIR /app
COPY package.json /app/package.json
RUN npm install

COPY karma.conf.js /app/karma.conf.js

CMD ["npm", "test"]
