# backend-crud-user-desafio-fullstack-fernando

## Introduction:
The User and Contact API is a powerful and versatile tool developed in Express.js and TypeScript designed to facilitate the management of user and contact information. With this API, developers can create, read, update, and delete users and contacts effortlessly. Additionally, the API provides a secure login mechanism and token generation to ensure the authentication of sensitive operations.


## Description:
The User and Contact API project aims to streamline the process of managing user and contact data within an application. By providing a set of well-defined endpoints, developers can easily integrate this API into their projects and leverage its functionalities.


## Features:

### User Management:
+ Create a new user with relevant details such as name, email, phone number and password.
+ Retrieve user information based on a unique identifier or search criteria.
+ Update user details, including name, email, phone number and password.
+ Delete user accounts securely.

### Contact Management:
+ Add a contact to a specific user, including details like name, phone number, and email.
+ Fetch contact information based on user-specific identifiers or search parameters.
+ Update contact details such as name, phone number, or email.
+ Remove contacts associated with a particular user.

### Authentication and Security:
+ Implement a login mechanism to generate an authentication token for authorized access.
+ Secure user-related routes, including user update and deletion, by requiring authentication.
+ Authenticate all contact-related routes to ensure data integrity.

### Error Handling:
+ Implement robust error handling mechanisms to provide informative and actionable error messages.
+ Use appropriate status codes and error responses to enhance API usability.


## Instalation:

**yarn install** >>> to install all the dependencies for the application as specified in the package.json file

configure the environment variables following the example in the .env.exemple file

**yarn typeorm migration:generate ./src/migrations/createTablesDB -d src/data-source.ts** >>> to generate migrations

**yarn typeorm migration:run -d src/data-source** >>> to run migrations

**yarn dev** >>> to run server up


## See the documentation on : 

http://localhost:3001/api-docs/

