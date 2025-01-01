#!/bin/bash

#$2 - github commit
for SERVICE in $(docker-compose ps -q | xargs docker inspect --format '{{.Config.Image}}'); do

      docker push $SERVICE:latest
      docker push $SERVICE:$2
done