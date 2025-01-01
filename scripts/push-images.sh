#!/bin/bash

#$1 - repo, $2 - github commit
for SERVICE in $(docker images --format '{{.Repository}}:{{.Tag}}' | grep 'todo-list'); do
      docker push $SERVICE
      docker push $SERVICE
done