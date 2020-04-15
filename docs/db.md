## DB operations

Log into the database then
`\l` to list all dbs
`\c {name_of_db}` to choose the database
`\d` to show all tables in the database
Then do queries as normal.
### [Docker setup](docker.md)

### [Local setup](local.md)

### [Home](README.md)

### DB docker commands
After building the container, run :

To see the logs `docker logs -f flight-database`

Try to run psql:

`docker exec -it flight-database bash`
 `psql --host=db --username=maury --dbname=flight`

### Create database
You will be prompted for the password to gain access to the db

Here you can then create dbs and tables normally using the psql commands
 
 `ctrl + d` to stop the exec command