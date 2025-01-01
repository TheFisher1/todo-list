#!/bin/bash

#$2 - github commit
for SERVICE in $(docker-compose config --services); do
      $VAR = docker-compose ps -q | xargs docker inspect --format '{{.Config.Image}}'
      docker push $VAR:latest
      docker push $VAR:$2
done