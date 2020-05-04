## Getting started

### login to container registry

` heroku container:login `

Build the images and push them

`heroku container:push web`

Release the container for consumption

`heroku container:release web`


### Postgres addons
Go to the dashboard and add heroku-postgres 
`heroku addons` will list all addons in the app eg for postgres is `postgresql-sinuous-69301`

Logging into the postgres instance
`heroku pg:psql postgresql-sinuous-69301 --app maurice-flights`

From the root, initialize the table
`cat init.db | heroku pg:psql postgresql-sinuous-69301 --app maurice-flights`

Then test the app locally
`heroku local web`


### [Local setup](local.md)

### [DB operations](db.md)

### [Home](README.md)

### [Docker setup](docker.md)
