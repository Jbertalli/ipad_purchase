#FROM - specifies base image to build from 
#COPY - 2 parameters: source, destination
#EXPOSE - specify ports

#base image - pulls node alpine image from DockerHub
FROM node:16-alpine

#RUN - execute shell commands - create new directory called usr on filesystem to store current sourcecode
RUN mkdir -p /usr/app/
#WORKDIR - define current working directory (name directory /usr/app created in last step)
WORKDIR /usr/app

#copy all source code in project(except in .dockerignore) - from ----> to
COPY ./ ./

#install dependencies, then run npm build
RUN npm install
#creates .next folder in filesystem of Docker image so production application is ready
RUN npm run build

#expose a port where application will be accessible (define port for contianer to listen to)
EXPOSE 3010

#command to start application - entry point for any containers created using this image definition
CMD ["npm", "start"]
