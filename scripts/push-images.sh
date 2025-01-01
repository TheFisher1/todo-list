#!/bin/bash

#$1 - dockerhub username, $2 - github commit
for SERVICE in $(docker-compose config --services); do
      docker push $1/$SERVICE:latest
      docker push $1/$SERVICE:$2
done