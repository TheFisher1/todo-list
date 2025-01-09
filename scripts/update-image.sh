kubectl set image deployment/$1 $1=${env.DOCKER_USERNAME}/todo-list:$1-${env.GITHUB_SHA}

kubectl get deployment $1 -o yaml > deployment.yaml

kubectl rollout status deployment/$1
