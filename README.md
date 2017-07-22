# DEEP

## Development Environment

### Setup

[Install docker.](https://docs.docker.com/engine/installation/)

[Install docker compose.](https://docs.docker.com/compose/install/)

Finally, build the docker image.

```bash
$ docker-compose build
```

Since in development mode, the repo directory is mounted to the docker image,
you need to install the node packages as well with `npm install` or `yarn install`.

### Run

To run deep locally, just run the docker services using docker-compose.

```bash
$ docker-compose up
```

You can then visit the site from the same computer at *http://localhost:8000/*.


## Production Environment

TODO
