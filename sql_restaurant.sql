CREATE DATABASE food_app;
USE food_app;
CREATE TABLE restaurant (
    res_id INT AUTO_INCREMENT PRIMARY KEY,
    res_name VARCHAR(255),
    image VARCHAR(255),
    `desc` VARCHAR(255)
);
CREATE TABLE user (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
);
CREATE TABLE food_type (
    type_id INT AUTO_INCREMENT PRIMARY KEY,
    type_name VARCHAR(255)
);

CREATE TABLE food (
    food_id INT AUTO_INCREMENT PRIMARY KEY,
    food_name VARCHAR(255),
    image VARCHAR(255),
    price FLOAT,
    `desc` VARCHAR(255),
    type_id INT,
    FOREIGN KEY (type_id) REFERENCES food_type(type_id)
);

CREATE TABLE sub_food (
    sub_id INT AUTO_INCREMENT PRIMARY KEY,
    sub_name VARCHAR(255),
    sub_price FLOAT,
    food_id INT,
    FOREIGN KEY (food_id) REFERENCES food(food_id)
);

CREATE TABLE orders (
    user_id INT,
    food_id INT,
    amount INT,
    code VARCHAR(100),
    arr_sub_id VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (food_id) REFERENCES food(food_id)
);
CREATE TABLE like_res (
    user_id INT,
    res_id INT,
    date_like DATETIME,
    PRIMARY KEY (user_id, res_id),
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (res_id) REFERENCES restaurant(res_id)
);
CREATE TABLE rate_res (
    user_id INT,
    res_id INT,
    amount INT,
    date_rate DATETIME,
    PRIMARY KEY (user_id, res_id),
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (res_id) REFERENCES restaurant(res_id)
);

INSERT INTO user (full_name, email, password)
VALUES 
('Nguyen Van A', 'a@gmail.com', '123456'),
('Tran Thi B', 'b@gmail.com', '123456');

INSERT INTO sub_food (sub_name, sub_price, food_id)
VALUES
('Extra Cheese', 10000, 1),
('Large Size', 5000, 2);

INSERT INTO food_type (type_name)
VALUES 
('Fast Food'),
('Drink');

INSERT INTO food (food_name, image, price, `desc`, type_id)
VALUES
('Burger', 'burger.jpg', 50000, 'Delicious burger', 1),
('Coca', 'coca.jpg', 15000, 'Soft drink', 2);

INSERT INTO restaurant (res_name, image, `desc`)
VALUES
('KFC', 'kfc.jpg', 'Fried Chicken'),
('Highlands', 'highlands.jpg', 'Coffee Shop');

INSERT INTO like_res (user_id, res_id, date_like)
VALUES
(1, 1, NOW()),
(2, 2, NOW());

INSERT INTO rate_res (user_id, res_id, amount, date_rate)
VALUES
(1, 1, 5, NOW()),
(2, 2, 4, NOW());

FOREIGN KEY (user_id) REFERENCES `user`(id)
RENAME TABLE User TO user;

DROP DATABASE IF EXISTS food_app;
CREATE DATABASE food_app;
USE food_app;


CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
);
CREATE TABLE restaurant (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    image VARCHAR(255),
    description VARCHAR(255)
);
CREATE TABLE like_res (
    user_id INT,
    restaurant_id INT,
    created_at DATETIME DEFAULT NOW(),
    PRIMARY KEY (user_id, restaurant_id),
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (restaurant_id) REFERENCES restaurant(id)
);
CREATE TABLE rate_res (
    user_id INT,
    restaurant_id INT,
    amount INT,
    created_at DATETIME DEFAULT NOW(),
    PRIMARY KEY (user_id, restaurant_id),
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (restaurant_id) REFERENCES restaurant(id)
);
CREATE TABLE food_type (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255)
);
CREATE TABLE food (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    image VARCHAR(255),
    price FLOAT,
    description VARCHAR(255),
    type_id INT,
    FOREIGN KEY (type_id) REFERENCES food_type(id)
);
CREATE TABLE sub_food (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    price FLOAT,
    food_id INT,
    FOREIGN KEY (food_id) REFERENCES food(id)
);
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    food_id INT,
    amount INT,
    code VARCHAR(100),
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (food_id) REFERENCES food(id)
);

INSERT INTO user (full_name, email, password) VALUES
('Phong', 'phong@gmail.com', '123'),
('Nam', 'nam@gmail.com', '123');
INSERT INTO restaurant (name, image, description) VALUES
('KFC', 'kfc.jpg', 'Gà rán'),
('Highlands', 'highlands.jpg', 'Cafe');
INSERT INTO food_type (name) VALUES
('Fast Food'),
('Drink');
INSERT INTO food (name, image, price, description, type_id) VALUES
('Burger', 'burger.jpg', 50000, 'Ngon', 1),
('Coca', 'coca.jpg', 15000, 'Nước ngọt', 2);
INSERT INTO sub_food (name, price, food_id) VALUES
('Extra Cheese', 10000, 1),
('Size L', 5000, 2);
INSERT INTO like_res VALUES
(1, 1, NOW()),
(2, 2, NOW());
INSERT INTO rate_res VALUES
(1, 1, 5, NOW()),
(2, 2, 4, NOW());
INSERT INTO orders (user_id, food_id, amount, code) VALUES
(1, 1, 2, 'ORD001'),
(2, 2, 1, 'ORD002');