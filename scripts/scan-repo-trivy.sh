#!/bin/bash

#$1 - dockerhub repo
tags = curl -s "https://registry.hub.docker.com/v2/repositories/$1/tags/" | jq -r '.results[].name'

for tag in $tags; do
    trivy image $1:$tag
done
