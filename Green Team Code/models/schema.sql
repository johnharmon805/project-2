DROP DATABASE IF EXISTS store_db;
CREATE DATABASE store_db;
USE store_db;

CREATE TABLE products_tb
(
	id int NOT NULL AUTO_INCREMENT,
	product_name varchar(255) NOT NULL,
    product_description varchar(255) NOT NULL,
    product_category varchar(255) default 'miscellaneous',
    essential BOOLEAN NOT NULL,
    image_url varchar(500),
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT,
	PRIMARY KEY (id)
);

