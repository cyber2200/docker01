#!/bin/sh
docker kill $(docker ps -q)
docker system prune -af
