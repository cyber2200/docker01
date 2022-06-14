#!/bin/sh
docker kill $(docker ps -q)
docker container prune
docker image prune -a
