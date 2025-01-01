#!/bin/bash

#$1 - dockerhub username, $2 - github commit
for SERVICE in $(docker-compose config --services); do
      docker push $SERVICE:latest
      docker push $SERVICE:$2
done