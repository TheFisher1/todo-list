# Todo List Application

## Overview
This project is developed as final project for the course "Modern DevOps Practices" at the Faculty of Mathematics and Computer Science at the University of Sofia. It is meant to be a simple todo list application that allows users to create and read tasks. The application is designed to be simple and user-friendly. It is built with Node.js, Express, and Postgres, along with React for the frontend, containerized with Docker and deployed to AWS EKS. It follows the microservices architecture and is designed to be scalable and fault-tolerant.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [GitHub Actions Workflow](#github-actions-workflow)
- [Environment Variables](#environment-variables)
- [Furthur improvements](#furthur-improvements)
- [License](#license)

## Features
- Create and read tasks
- User authentication
- Task storage
- Responsive design

## Technologies Used
- Node.js
- Express
- Postgres
- Jest (for testing)
- ESLint (for code quality)
- Docker (for containerization)
- GitHub Actions (for CI/CD)
- AWS EKS (for deployment)

## Installation
To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/todo-list.git
   cd todo-list
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Set up your database (Postgres) and ensure it is running.

## Usage
The easiest way to start the application is to use docker compose.
Simply run the following command:
```bash
docker compose up
```
If you want to run the project locally, run the following command:
```bash
   node src/index.js
``` 
in frontend-service, user-service, task-service and api-gateway. Make sure to have your database properly configured.

API Gateway is set up for local setup, 

## Testing
To run the tests, run the following command:
```bash
docker exec <container_id  > npm run test
```

## Environment Variables
The project uses environment variables for configuration. You can find the environment variables in the .env.example file in each service. The variables in the .env file in the root of the project should be set as Github secrets allowing the job to deploy the application.

## GitHub Actions Workflow:
   - GitLeaks: Checks for secrets in the codebase.
   - ESLint: Checks for code quality and security.
   - SonarCloud: Checks for code quality and security.
   - Snyk: Checks for vulnerabilities in the codebase.
   - Trivy: Checks for vulnerabilities in the codebase.
   - Tests: Runs integration tests.
   - Docker-Image: Builds the Docker image of each service in parallel and pushes it to Docker Hub.
   - Deploy: Deploys the application to AWS EKS cluster.

   The workflow is configured to run the tests when a pull request is created and when a push is made to the main branch.

## Furthur improvements:
   - Add monitoring and logging.
   - Add task categorization.
   - Add task priority.
   - Add auto-scaling.
   - Add health checks.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
