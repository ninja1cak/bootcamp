SELECT * FROM movie m JOIN bridge_movie_genre b 
ON m.id_movie = b.id_movie JOIN genre g ON g.id_genre =  b.id_genre 
WHERE name_genre = 'Comedy' AND  date_part('year',release_date_movie) = 2017
AND title_movie = 'SPIDERMAN: HOMECOMING';

SELECT * FROM movie WHERE title_movie = 'BLACK WIDOW';
