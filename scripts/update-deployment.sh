kubectl patch deployment frontend --type='json' -p="[ {\"op\": \"replace\", \"path\": \"/spec/template/spec/containers/0/image\", \"value\": \"${DOCKER_USERNAME}/todo-list:frontend-latest\"} ]"


kubectl patch deployment user-service --type='json' -p="[ {\"op\": \"replace\", \"path\": \"/spec/template/spec/containers/0/image\", \"value\": \"${DOCKER_USERNAME}/todo-list:user-service-latest\"} ]"

kubectl patch deployment task-service --type='json' -p="[ {\"op\": \"replace\", \"path\": \"/spec/template/spec/containers/0/image\", \"value\": \"${DOCKER_USERNAME}/todo-list:task-service-latest\"} ]"

if kubectl rollout --no-wait status deployment/frontend; then
     kubectl get deployment frontend -o yaml > K8s/frontend/deployment.yaml
fi

if kubectl rollout --no-wait status deployment/user-service; then
     kubectl get deployment user-service -o yaml > K8s/users/deployment.yaml
fi

if kubectl rollout --no-wait status deployment/task-service; then
     kubectl get deployment task-service -o yaml > K8s/tasks/deployment.yaml
fi