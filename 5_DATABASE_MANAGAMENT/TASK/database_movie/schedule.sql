CREATE TABLE schedule(
  id_schedule serial PRIMARY KEY,
  id_movie INTEGER NOT NULL,
  date_start DATE NOT NULL,
  date_end DATE NOT NULL,
  time_playing TIME[], 
  cinema_name VARCHAR(100) NOT NULL,
  cinema_address TEXT NOT NULL,
  price_seat NUMERIC(2),
  CONSTRAINT fk_id_movie
    FOREIGN KEY (id_movie)
      REFERENCES movie(id_movie)
)

ALTER TABLE schedule DROP time_playing;
ALTER TABLE schedule DROP time_playing;
ALTER TABLE schedule ADD time_playing TIME[] NOT NULL;
ALTER TABLE schedule ADD price_seat NUMERIC(2);
ALTER TABLE schedule RENAME address_cinema TO cinema_address;
ALTER SEQUENCE schedule_id_schedule_seq RESTART WITH 1;
ALTER TABLE schedule ADD cinema_logo_url TEXT;


-- CREATE
INSERT INTO schedule(
  id_movie, 
  date_start, 
  date_end, 
  time_playing, 
  cinema_name, 
  cinema_address,
  price_seat
)VALUES(
  1,
  '2017/07/10',
  '2017/09/10',
  ARRAY[time '08:00 AM',time '09:00 AM'],
  'hiflix',
  'Merapi Street No. XX, Bandar Lampung',
  10
),
(
  1,
  '2017-07-10',
  '2017-09-10',
  ARRAY[time '02:00 PM', time '08:00 PM'],
  'CineOne21',
  'Lada Street No. XX, Bandar Lampung',
  10
),
(
  2,
  '2021-06-20',
  '2021-08-20',
  ARRAY[time '12:00 PM', time '06:00 PM'],
  'ebv.id',
  'Kimaja Street No. XX. Bandar Lampung',
  10
),
(
  3,
  '2023-03-15',
  '2023-05-15',
  ARRAY[time '02:00 PM', time '08:00 PM'],
  'CineOne21',
  'Lada Street No. XX, Bandar Lampung',
  10
),
(
  4,
  '2020/01/03',
  '2019/03/01',
  ARRAY[time '08:00 AM',time '09:00 AM'],
  'hiflix',
  'Merapi Street No. XX, Bandar Lampung',
  10
),
(
  5,
  '2013-08-05',
  '2021-07-15',
  ARRAY[time '12:00 PM', time '06:00 PM'],
  'ebv.id',
  'Kimaja Street No. XX. Bandar Lampung',
  10
)

-- READ
SELECT date_part('year', release_date_movie), string_agg( DISTINCT title_movie, ', '), string_agg(cinema_name, ', ') 
FROM movie m JOIN schedule s ON m.id_movie = s.id_movie
GROUP BY m.id_movie;

SELECT title_movie, price_seat, cinema_name, cinema_address, date_start, date_end,
time_playing FROM schedule s JOIN movie m 
ON m.id_movie = s.id_movie;

-- READ + PAGINATION
SELECT * FROM schedule ORDER BY id_movie DESC LIMIT 3;

-- UPDATE
UPDATE schedule 
SET cinema_address = 'Cengkeh Street No. XX Bandar Lampung'
WHERE cinema_name = 'ebv.id';

UPDATE schedule
SET cinema_logo_url = 'drive.google.com/cineone21.img'
WHERE cinema_name = 'CineOne21';


-- DELETE
DELETE FROM schedule 
WHERE id_schedule < 20;



