DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT NULL,
  stock_quantity INT,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Spoon", "utensils", 5, 200);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Cup", "utensils", 10, 200);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Straw", "glassware", 8, 500);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Plate", "utensils", 6, 400);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Carry Bag", "travel", 5, 400);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Glitter", "party", 10, 100);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Phone Case", "fashion", 5, 200);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("clothes", "fashion", 5, 200);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Bamboo Toothbrush", "hygiene", 8, 200);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Trash Bag", "hygiene", 3, 700);