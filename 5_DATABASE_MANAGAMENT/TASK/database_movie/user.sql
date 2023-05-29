CREATE TABLE users(
  id_user serial PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email_user VARCHAR(255) NOT NULL,
  phone_number INTEGER,
  password_user INTEGER NOT NULL
);

INSERT INTO user(
  first_name,
  last_name,
  email_user,
  phone_number,
  password_user
)VALUES(
 'Margot', 
 'Dumbrall', 
 'mdumbrall0@tripod.com', '
 486-837-6784', 
 'co30aNmWJlFo'
),
(
  'Jenine', 
  'York', 
  'jyork1@lycos.com', 
  '669-932-8239', 
  'tpxkAA8xM'
),
(
  'Emilee', 
  'Covell', 
  'ecovell2@51.la', 
  '794-763-5920, 
  'cu60YzO5'
),
(
  'Jim', 
  'Pasby', 
  'jpasby3@forbes.com', 
  733-331-1439, 
  'U37oHIR'
),
(
  'Bryan', 
  'Haller', 
  'bhaller4@flickr.com', 
  706-343-5951, 
  'Zh7gsStK'
)

