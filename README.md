# Opticron home page

Thank you for taking the time to look at my attempt at re-creating Opticron's home page.

Due to the tight timescales of this assessment, I decided to create this app using technologies that I was most familiar with. Therefore the UI was built using React and the backend was built using Express, PSQL and Node.

Of course I am willing (and excited) to learn how to build apps using the Foundation Framework and ASP.NET, but as of yet, I don't have these skills. I hope that's understandable and I hope you enjoy reading through what I've created in the past day or so.

-Ollie Holt

# Getting started with this application

The database which stores all the information for this app will be hosted on your local machine. In order to set-up the database, folow these steps:

1. Download the backend repository from: https://github.com/OliverHolt/Opticron-Website-Backend
2. cd into the folder in your terminal
3. In your terminal, run this command: npm run setup-dbs
4. Then this command: npm run seed
5. And finally this command: npm start

This will set-up the database, seed the database with data and then have your machine listen to port 5000. This is needed in order for the front-end UI to make GET requests to the database.

After that, open a new terminal (don't close the one above) and follow these steps:

1. cd into /Opticron-Website
2. In your terminal, run this command: npm start

This will start the React app in your browser :)
