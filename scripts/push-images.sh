#!/bin/bash

#$1 - dockerhub username, $2 - github commit
for SERVICE in $(docker-compose config --services); do
      docker push $1/todo-list-$SERVICE:latest
      docker push $1/todo-list-$SERVICE:$2
done