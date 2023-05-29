CREATE TABLE genre(
  id_genre serial PRIMARY KEY,
  name_genre VARCHAR(255) NOT NULL
)

-- CREATE
INSERT INTO genre(name_genre)
VALUES
  ('Action'),
  ('Comedy'),
  ('Adventure'),
  ('Teen'),
  ('Superhero'),
  ('Fantasy'),
  ('Sci-Fi'),
  ('Martial Arts'),
  ('Drama'),
  ('Sports'),
  ('Thriller'),
  ('Spy'),
  ('Neo-noir'),
  ('Animation'),
  ('Time-Travel')


-- PAGINATION + READ
SELECT g.id_genre,name_genre, string_agg(title_movie, ', ') FROM genre g
JOIN bridge_movie_genre b ON g.id_genre = b.id_genre
JOIN movie m ON m.id_movie = b.id_movie
GROUP BY g.id_genre ORDER BY g.id_genre LIMIT 100;

-- PAGINATION + READ
SELECT * FROM genre ORDER BY name_genre ASC LIMIT 3;

-- UPDATE
UPDATE genre SET name_genre = 'anime' WHERE name_genre = 'Animation';

-- DELETE
DELETE FROM genre WHERE id_genre = 15;