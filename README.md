# Authentication and authorization using GraphQL

# Description

A simple auth app with Apollo + GraphQL + NodeJs + PassportJS + Express + MongoDB + React

This is a complete implementation of users auth flow using GraphQL and PassportJS, which can used for any commercial projects.

DEMO - ![](demo.gif)

### Set Up
Clone and install:

```bash
git clone https://github.com/hemanth09/authentication-and-authorization-using-graphql.git
cd authentication-and-authorization-using-graphql
npm/yarn install
```

Create a cluster in MongoDB Atlas and add connection string in your server.js file where prompting MONGO_URI = ''
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Create a cluster](https://docs.atlas.mongodb.com/create-new-cluster/)

### Running the Application

Run it using:

```bash
npm run dev
```
- And in browser App will running on http://localhost:4000/
- And Graphql server will be running on http://localhost:4000/graphql

### Project Structure

    .
    ├── client                  # Client folder
            ├── components              # components folder
            ├── queries                 # queries folder
            ├── mutations               # mutations folder
            └── index                   # index.js file
    ├── server                  # Server folder
            ├── models                  # Model folder
            ├── schema                  # Schema folder
            ├── services                # Services folder
            └── server                  # server.js file

#### Server directory
[http://localhost:4000/graphql](http://localhost:4000/graphql)

**server.js** - This is the main file for running the server of backend. This file contains all the required modules, establish the mongoose connection and GraphQL connection.

**models** - This folder contains mongoose **user** schema model that represents set of information user information to store in database.

**schema** - And Finally this schema folder contains the most of the GraphQL logic. The schema/schema.js takes all the types and mutations
- **GraphQL Types** : We need to design GraphQL user schema to specify the types for API using GraphQL schema language. Inside we got **user_type.js** of types that define User schema.
- **GraphQL Queries** : Inside schema/root_query_type.js file write a very simple GraphQl query and mongoose query used inside to retrieve Users list of data from mongodb database.
- **GraphQL Mutation**: Inside **mutations.js** file we create 3 methods signup, login, logout. which are required for the auth flow.

**services** - And here utilise all the required passportJS logic for authenticating users flow.

#### Client directory
[http://localhost:4000](http://localhost:4000)

**index.js** - Here we create a Apollo Client to establish connection to our GraphQL Server API, And Routing with React

**queries** - Here we define Apollo GraphQL queries by using `graphql-tag`. Graphql Tag is a JavaScript template literal tag that parses GraphQL queries.

**mutations** - Here we define Apollo GraphQL mutations by using `graphql-tag`. which stores users data into mongoDB.

**components** - Component folder consist of files responsible for Users, to sign up, login and logout. we used `react-apollo` to connect our components and pass our **mutations** and **queries** defined using `graphql-tag`