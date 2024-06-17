# GraphQL

## Objectives

The objective of this project is to learn the GraphQL query language by creating a personal profile page. You'll query your own data from a provided GraphQL endpoint to populate your profile page. The profile must display three chosen pieces of information and include a section for generating statistic graphs using SVG.

## Features

### Profile Information
Your profile page will display:
1. Basic user identification (e.g., username, email)
2. XP amount
3. Grades or audits

### Statistic Graphs
The profile page will include a mandatory section for generating at least two different statistic graphs using SVG. Possible graph combinations include:
- XP earned over time
- XP earned by project
- Audit ratio
- Projects PASS and FAIL ratio
- Piscine (JS/Go) stats
- Attempts for each exercise

### Login Page
To access the GraphQL API, users must log in to obtain a JWT. The login page will:
- Accept both `username:password` and `email:password`
- Display appropriate error messages for invalid credentials
- Provide a method to log out

### Hosting
The profile page must be hosted on a platform of your choice (e.g., GitHub Pages, Netlify).

## Instructions

### Setup
1. **Login Page**: Create a login page to obtain a JWT from the signin endpoint (`https://<DOMAIN>/api/auth/signin`). Use Basic authentication with base64 encoding.
2. **Profile Page**: Query the GraphQL endpoint (`https://<DOMAIN>/api/graphql-engine/v1/graphql`) to fetch and display user data. Use the JWT for Bearer authentication.
3. **GraphQL Queries**: Implement the following types of GraphQL queries:
   - **Normal Queries**: Fetch basic user information (e.g., ID, login).
   - **Nested Queries**: Fetch related data, such as user details within results.
   - **Queries with Arguments**: Fetch specific data by passing arguments (e.g., object ID).

### Example Queries
- Fetch user ID and login:
  ```graphql
  {
    user {
      id
      login
    }
  }


### My Hosted Website
https://graphql-atou.vercel.app/



