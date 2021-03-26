# The General Organizational Tech Tracker (GOTT)
## Description
Duration: 2 Week Sprint

GOTT is a lightweight desktop web application for IT asset management. The application features a full CRUD RESTful API with search and data visualization, as well as multiple authorization levels. 

Technologies Used: React, Redux, Node, Express, PostgreSQL, Passport, Chart.js

To see the fully functional site, please visit: [GOTT - Heroku](https://gottem.herokuapp.com/)

## Screen Shot
![GOTT](https://user-images.githubusercontent.com/42681678/112639815-aee71c00-8e0e-11eb-8e10-0426528abf37.JPG)

## Prerequisites
[PostgreSQL](https://www.postgresql.org/)

[Postico - macOS](https://eggerapps.at/postico/) OR [pgAdmin - Windows](https://www.pgadmin.org/)

[Node.js](https://nodejs.org/en/)

## Installation
Create a .env in the root directory with the following keys:
```
SERVER_SESSION_SECRET : Utilized for Heroku deployment; requires 8 char min.
PG_USER : PostgreSQL DB login (if required)
PG_SECRET : PostgreSQL DB password (if required)
```

Create a database named your database name,
The queries in the database.sql file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries,
Open up your IDE of choice and run
```
npm install
```
(Details are in package.json)
```
npm run server
```
```
npm run client
```
in your terminal
The npm run client command will open up a new browser tab for you!

## Usage

1. Registration/Login: All users are required to register or login to access to app.
2. After registration, users will be redirected to the About Page which displays a brief summary of GOTT in plaintext.
3. Users may navigate through GOTT via the nav bar at the top of the page.
4. Inventory Page - This page displays all available assets on the left and a table summary of each asset type on the right by default.
5. Inventory Page - Users may search for specific assets by multiple values.
6. Item Page - Search results display on the Item page.
7. Admin Page - (Requires Admin Authroization) Used for editing and deleting assets, as well as user account management.

## Built With
React, Redux, Node, Express, PostgreSQL, Passport, and Chart.js

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Acknowledgement
Thanks to [Prime Digital Academy](https://primeacademy.io) who equipped and helped me to make this application a reality.

## Support
If you have suggestions or issues, please email me at youremail@whatever.com
