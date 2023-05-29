CREATE TABLE bridge_movie_genre(
  id_bridge_movie_genre serial PRIMARY KEY,
  id_movie INTEGER,
  id_genre INTEGER,

  CONSTRAINT fk_id_movie 
    FOREIGN KEY (id_movie)
      REFERENCES movie(id_movie),

  CONSTRAINT fk_id_genre
    FOREIGN KEY (id_genre)
      REFERENCES genre(id_genre)
)

INSERT INTO bridge_movie_genre(id_movie, id_genre)
VALUES
  (1,1),
  (1,2),
  (1,3),
  (1,4),
  (1,5),
  (1,6),
  (1,7),
  (2,1),
  (2,5),
  (2,7),
  (2,12),
  (2,11),
  (3,13),
  (3,1),
  (3,11),
  (4,1),
  (4,8),
  (4,9),
  (5,14),
  (5,7),
  (5,1),
  (5,15),
  (5,5)

SELECT id_movie, id_genre, title_movie, name_genre FROM movie LEFT JOIN genre ON true;