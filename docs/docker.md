### fix homebrew permissions

 ` sudo chown -R $(whoami) $(brew --prefix)/*`

 ### Build the container

  `docker-compose up --build -d`

 ### Stop the container

 `docker-compose down -v --rmi local`

 ### Docker-compose in PROD Create a production yaml then build it 

   Initially do the following
   the` -f `flag tells docker-compose which specific dockerfile to build

  `docker-compose -f docker-compose-prod.yml up --build -d `

   On subsequent code changes, do

  `docker-compose -f docker-compose-prod.yml build web`
  
 `docker-compose  -f docker-compose-prod.yml up --no-deps -d web`

 This first rebuilds the image for web and then stops, destroys, and recreates just the web service. 

 The `--no-deps flag` prevents Compose from also recreating any services which web depends on.

`docker inspect flight_web --format={{.Id}}` to get the image id
 

### To stop the production container 

 `docker-compose -f docker-compose-prod.yml down -v --rmi local`

### To build and run the test container

 `docker-compose build test`
 `docker-compose run --rm test`

### [Local setup](local.md)

### [DB operations](db.md)

### [Home](README.md)

### [Deployment][deploy.md]