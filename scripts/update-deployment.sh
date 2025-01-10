kubectl patch deployment frontend --type='json' -p='[{"op": "replace", "path": "/spec/template/spec/containers/0/image", "value": ${{secrets.DOCKER_USERNAME}}/todo-list:frontend-${{ github.sha }}}]'

kubectl patch deployment user-service --type='json' -p='[{"op": "replace", "path": "/spec/template/spec/containers/0/image", "value": ${{secrets.DOCKER_USERNAME}}/todo-list:user-service-${{ github.sha }}}]'

kubectl patch deployment task-service --type='json' -p='[{"op": "replace", "path": "/spec/template/spec/containers/0/image", "value": ${{secrets.DOCKER_USERNAME}}/todo-list:task-service-${{ github.sha }}}]'

if kubectl rollout status deployment/frontend; then
     kubectl get deployment frontend -o yaml > K8s/frontend/deployment.yaml
fi

if kubectl rollout status deployment/user-service; then
     kubectl get deployment user-service -o yaml > K8s/users/deployment.yaml
fi

if kubectl rollout status deployment/task-service; then
     kubectl get deployment task-service -o yaml > K8s/tasks/deployment.yaml
fi