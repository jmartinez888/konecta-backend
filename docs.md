Install mariabd

docker pull mariadb:latest

Run mariadb

docker run -p 3307:3306 -d --name mariadb-konecta -e MYSQL_ROOT_PASSWORD=password mariadb:latest

<https://alphonso-javier.medium.com/express-mariadb-with-docker-compose-d1af1dfae985>

entrar a la terminal del container
docker exec -it docker-mariadb /bin/bash

ejecutar CLI de mariadb en container
mariadb -u root -p
