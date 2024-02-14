# thecryptobazaar
CryptoGallery: The Crypto Edition

User
username
email
password
role
phoneNumber
address

Product
name
description
tag
price
stock
imgUrl
categoryId
userId
status

Category
name

Customer
email
password
role
address
phoneNumber
gender

Cart
customerId
productId

Wishlist

Transaction
cartId
customerId
productId
totalItem
totalPrice
orderDate
npx sequelize-cli model:create --name Transaction --attributes cartId:integer,customerId:integer,productId:integer,totalItem:integer,totalPrice:integer,orderDate:date

