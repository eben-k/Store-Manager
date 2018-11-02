# Store-Manager #

## Build Status ##
[![Coverage Status](https://coveralls.io/repos/github/eben-k/Store-Manager/badge.svg?branch=develop)](https://coveralls.io/github/eben-k/Store-Manager?branch=develop)
[![Build Status](https://travis-ci.com/eben-k/Store-Manager.svg?branch=develop)](https://travis-ci.com/eben-k/Store-Manager)

## Introduction ##
Store manager is an application that helps store owners(recognised as Admin) manage sales and product inventory records. 
Categorised as a single store use appliation.

## Table of Contents ##
1. [Hosted-App]
2. [Technologies-Used]
3. [Application-Features]
4. [How-to-Use]
5. [Documentation]
6. [Author]
7. [License]


## Hosted App ##
* [Heroku Link](https://store-mgr.herokuapp.com/)
* [Github Pages Link](https://eben-k.github.io/Store-Manager/)

## Technologies Used ##
* [Node.js]
* [Express]
* [Body-parser]
* [Express-Validator]
* [Babel]
* [Eslint]
* [Mocha]

## Application Features ##
* Admin can add a product
* Admin can update a product
* Admin can delete a product
* Admin can add a store attendant
* Admin can update a store attendant
* Admin can delete a store attendant
* Admin/store attendant can get all products
* Admin/store attendant can get a specific product
* Store attendant can add a sale order
* Admin can get all sale order records
* Store attendant can view personal records 

## How To Use ##
To clone and run this application, you must have [Git] and [Node.js] (with npm functionality) installed on your computer. From your command line:
`# Clone this repository`
`$ git clone https://github.com/eben-k/Store-Manager.git`

`# Go into the repository`
`$ cd Store-Manager`

`# Install dependencies`
`$ npm install`

`# Create .env file for environmental variables in your root directory like the .env.example file`

`# Run the app`
`$ npm start`

### Testing ###
* Test API endpoints with [Postman]
* Test code by running npm test after installation

### API Endpoints ###
`POST -> localhost:3000/api/v1/products`
`GET  -> localhost:3000/api/v1/products`
`GET  -> localhost:3000/api/v1/products/:productId`
`POST -> localhost:3000/api/v1/sales`  
`GET  -> localhost:3000/api/v1/sales`
`GET  -> localhost:3000/api/v1/sales/:saleId`
`GET  -> localhost:3000/api/v1/user/sales`
`POST -> localhost:3000/api/v1/auth/newUser`
`POST - localhost:3000/api/v1/auth/login`
`GET -> localhost:3000/api/v1/auth/:userId`
`GET -> localhost:3000/api/v1/auth/users`

## Documentation ##
[API Documentation](https://documenter.getpostman.com/view/5772810/RzZ4q21a)

## Author ##
Eben Ennim

## License ##
ISC
