#!/bin/bash

# $1 - repository, $2 - version
for SERVICE in $(docker-compose config --services); do
  docker tag ${SERVICE}:latest $1/todo-list-${SERVICE}:$2
done