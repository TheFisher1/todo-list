cd task-service && npx run eslint . --ext .js && cd ../
cd user-service && npx run eslint . --ext .js && cd ../
cd frontend-service && npx run eslint . --ext .js --ext .jsx && cd ../
cd gateway && npx run eslint . --ext .js
