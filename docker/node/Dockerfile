FROM node:latest
RUN mkdir -p /home/var/www-data
WORKDIR /home/var/www-data
COPY ../../package.json /home/var/www-data/
RUN npm install
COPY ../../api/. /home/var/www-data
EXPOSE 3000
CMD ["npm", "start"]