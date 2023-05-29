CREATE TABLE users(
  id_user serial PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email_user VARCHAR(255) NOT NULL,
  phone_number NUMBER,
  password_user INTEGER NOT NULL
);

-- CREATE
INSERT INTO users(
  first_name,
  last_name,
  email_user,
  phone_number,
  password_user
)VALUES(
 'Margot', 
 'Dumbrall', 
 'mdumbrall0@tripod.com', 
 4868376784, 
 'co30aNmWJlFo'
),
(
  'Jenine', 
  'York', 
  'jyork1@lycos.com', 
   6699328239, 
  'tpxkAA8xM'
),
(
  'Emilee', 
  'Covell', 
  'ecovell2@51.la', 
   7947635920, 
  'cu60YzO5'
),
(
  'Jim', 
  'Pasby', 
  'jpasby3@forbes.com', 
  7333311439, 
  'U37oHIR'
),
(
  'Bryan', 
  'Haller', 
  'bhaller4@flickr.com', 
  7063435951, 
  'Zh7gsStK'
);

-- READ
SELECT * FROM users;

-- UPDATE
UPDATE users SET phone_number = 99992342 WHERE id_user = 2;


-- DELETE
DELETE FROM users WHERE id_user< 6;
ALTER SEQUENCE users_id_user_seq RESTART WITH 1;
ALTER TABLE users ALTER phone_number TYPE BIGINT;

