fix homebrew permissions

 ### ` sudo chown -R $(whoami) $(brew --prefix)/*`

 Build the container
 ### `docker-compose up --build

 Stop the container
 ### `docker-compose down -v --rmi local

 Docker-compose in PROD Create a production yaml then build it 
 ### `docker-compose -f docker-compose-prod.yml up --build -d 
 
 the -f flag tells docker-compose which specific dockerfile to build

To stop the production container 
### `docker-compose -f docker-compose-prod.yml down -v --rmi local

To build and run the test container
### `docker-compose build test
### `docker-compose run --rm test