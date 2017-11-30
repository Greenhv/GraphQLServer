# Simple GraphQL + NodeJs Server
## Setup
Before anything you should create your .env file and fill the correspondly values. Just one thing, I recommend to use the PORT value defined in the docker-compose.yml, because i don't what kind of strange behaviour will have the app.

So, after clearing that up, only code you need to run to have the server up and running are the following lines
```bash
  docker-compose build
  docker-compose up
```
This will map the server endpoint the **IP** 0.0.0.0 and to the **PORT** 3000. As for the Postgres BD endpoint, it'll be mapped to the **PORT** 5432.
All of this information is in the docker-compose.yml file in this repo, so in case you already have this ports in use then you can change then in this file too.

## Enviroment
This repo only has a development environment working with the following technologies.
  * NodeJs
  * Babel
  * Express
  * Apollo Server Express
  * Nodemon
  * GraphQL
