-- ATTN WINDOWS USERS: Some of you might have an easier time just copying and pasting the lines below in to your mysql shell

-- YOUR CODE GOES HERE
-- CREATE YOUR DATABASE
DROP DATABASE IF EXISTS cowlist;

CREATE DATABASE cowlist;

USE cowlist;

-- CREATE YOUR TABLES
CREATE TABLE cows (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  cowname VARCHAR(20) NOT NULL,
  cowdescription VARCHAR(200) NOT NULL
);

-- ADD RECORDS TO YOUR TABLE
INSERT INTO cows (cowname, cowdescription)
  VALUES ('Bessie', 'Just a good old girl'),
        ('Big Bertha', 'Not to be messed with'),
        ('Phyllis', 'Ornery old coot. Will make a great steak some day');
