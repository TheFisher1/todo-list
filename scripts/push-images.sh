#!/bin/bash

#$1 - repo, $2 - github commit
for SERVICE in $(docker-compose ps -q | xargs docker inspect --format '{{.Config.Image}}'); do
      docker tag $SERVICE $SERVICE
      docker tag $SERVICE $SERVICE

      echo $SERVICE

      docker push fisher1o1/todo-list:$SERVICE
      docker push fisher1o1/todo-list:$SERVICE
done