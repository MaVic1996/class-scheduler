# class-scheduler
It's a personal project made to help a friend to organise classroom groups at work.

## Database
To run the database is necessary to execute the following command:

```shell bash
docker run --name=<db-name> -p 5432:5432 -e POSTGRES_USER=<pg-user> -e POSTGRES_PASSWORD=<pg-pass> -e POSTGRES_DB=<pg-database> -d postgres:14.4

```