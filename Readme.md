# Backend for the Employee CRUD operations


## Docs

  - [Objectives](#objective)
  - [Codebase](#codebase)
    - [Technologies](#technologies)
    - [Folder Structure](#folder-structure)
    - [Code Style](#code-style)
  - [First time setup](#first-time-setup)
  - [Running the app locally](#running-the-app-locally)
- [Technical](docs/)
  - [Deployment](docs/deployments.md)
 

### Objective 
Create a simple CRUD application for an employee management



### Technologies
- ** Nodejs API **: We use Node.js to power our servers. Almost all of the code you'll touch in this codebase will be JavaScript.

- **Backend End**
	- Node js
    - Express
    - Mongoose
    - Jest 
    - Husky


### Folder structure

Client 

```sh
backend/
├── controllers  # controllers for handling action  
├── models     # schema for the mongo database
├── routes     # handle http requests
└── tests       # handle jest tests 
```


### First time setup

#### Running the app locally

- ### Backend

```sh
git clone https://github.com/Dru-Go/Employee-Management-Sample

npm i

npm run dev

```

