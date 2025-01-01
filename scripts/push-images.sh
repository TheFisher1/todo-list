#!/bin/bash

#$1 - repo, $2 - github commit
for SERVICE in $(docker-compose ps -q | xargs docker inspect --format '{{.Config.Image}}'); do
      docker tag $SERVICE $1/todo-list/$SERVICE:latest
      docker tag $SERVICE $1/todo-list/$SERVICE:$2

      docker push fisher1o1/todo-list:$1/todo-list/$SERVICE:latest
      docker push fisher1o1/todo-list:$1/todo-list/$SERVICE:latest
    #   docker push  fisher1o1/todo-list/$SERVICE:latest
    #   docker push fi/sher1o1/todo-list/$SERVICE:$2
done