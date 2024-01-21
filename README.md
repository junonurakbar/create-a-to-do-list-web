Create a To Do List Page with Node.js, Express.js, PostgreSQL, and React.js

# Setting up the application
- on the server side:
  1. open pgsql or you can use pgadmin if you want
  2. create a database 'todo' and then create a table 'todos'
  3. in the table 'todos' create columns:
     - 'todo_id' as the primary key with data type of SERIAL
     - 'description' with the data type of VARCHAR with maximum length 255. This column is to store what kind of activities you want to add.
  4. create a .env file and write some variables: PORT, DB_USER, DB_HOST, DB_PORT, DB_NAME, and DB_PASSWORD. Assign the DB_NAME=todos. Also assign the other variables with what port, user, host, and password you use to run postgresql. 
  5. Make sure you type 'npm install' in the server folder to install all the packages that are used in this folder.
  6. Type 'nodemon index' to run the server

- on the client side:
  1. type 'npm install' in the client folder
  2. type 'npm run dev' to run the client-side application
