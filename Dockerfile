FROM node:20.13.1
# Informs Docker that the container listens on the 
# specified network ports at runtime
EXPOSE 4000
# Copies index.js and the two package files from the local 
# directory to a new app directory on the container
COPY index.ts package.json package-lock.json tsconfig.json  app/
COPY src/  app/src/
# Changes working directory to the new directory just created
WORKDIR /app
# Installs npm dependencies on container
RUN npm ci
# Command container will actually run when called
CMD ["npm", "start"]