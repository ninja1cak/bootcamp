
-- READ MOVIE TITLES
SELECT title_movie FROM movie;

-- READ MOVIE TITLES, GENRE, AND RELEASE YEAR
SELECT title_movie, date_part('year',release_date_movie) ,string_agg(DISTINCT name_genre, ', ') 
FROM movie m JOIN bridge_movie_genre b ON m.id_movie = b.id_movie
JOIN genre g ON g.id_genre =  b.id_genre
GROUP BY m.id_movie;