FROM node:18

WORKDIR /app

COPY package*.json ./

RUN apt-get update && apt-get install -y ffmpeg
# Run brew install ffmpeg

# install any needed packages specified in package.json
RUN npm install

# copy all app code inside the docker image
COPY . .

# make port 3000 available outside this container
EXPOSE 3000

# define the command to run your app using CMD
CMD ["npm", "start"]
