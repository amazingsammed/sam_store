# MSK
An All-in-one accounting software for small and medium size businesses

# How to run project

* To begin with, run `npm install ` in the terminal
* You may need a postgres sql database
* You need to change the db url to your postgresdb
* Run `npx prisma db push` to use the schema to generate a database structure for you
* Run `ts-node "prisma/seed.js"` or `npx prisma db seed` to seed the db with initial values
* Signup a new user and login to proceed


# Features
> Basic Features

1. [x]  CRUD Item
2. [x]  CRUD Customers
3. [ ]  CRUD Suppliers
4. [ ]  CRUD Members
5. [ ]  CRUD Cash Sales
6. [ ]  CRUD Cash Purchases
7. [ ]  CRUD Basic report
8. [ ]  CRUD Chart of Accounts
9. [ ]  CRUD Account Groups

