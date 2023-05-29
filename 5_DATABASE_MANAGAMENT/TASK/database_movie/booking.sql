CREATE TABLE booking(
  id_booking serial PRIMARY KEY,
  id_movie INTEGER,
  id_schedule INTEGER,
  seats_booking VARCHAR(3)[],
  watch_date DATE NOT NULL,
  total_prices_booking INTEGER NOT NULL,
  payment_method VARCHAR(50),
  CONSTRAINT fk_id_movie
    FOREIGN KEY (id_movie )
      REFERENCES movie(id_movie)
  
  CONSTRAINT fk_id_schedule
    FOREIGN KEY (id_schedule)
      REFERENCES schedule(id_schedule);
      
);

ALTER TABLE booking DROP payment_method
ALTER TABLE booking ADD payment_method VARCHAR(50);

-- CREATE


INSERT INTO booking(
  id_movie,
  id_schedule,
  watch_date,
  seats_booking,
  total_prices_booking,
  payment_method
)
VALUES
(
  1,
  1,
  '2017/07/15',
  ARRAY['C1', 'C2', 'C3'],
  30,
  'GOPAY'
),
(
  1,
  2,
  '2017/07/15',
  ARRAY['A1', 'A2', 'A3','A4'],
  40
  'GOPAY'
),
(
  2,
  3,
  '2021/06/20',
  ARRAY['C10','C11'],
  20
  'OVO'
),
(
  1,
  2,
  '2017/07/15',
  ARRAY['B1'],
  10,
  'OVO'
),
(
  3,
  4,
  '2023/03/17',
  ARRAY['D10','D11','D12','D15'],
  40,
  'DANA'
),
(
  3,
  4,
  '2023/03/17',
  ARRAY['D6','D7','D8','D9'],
  40,
  'DANA'
);


-- READ
SELECT cinema_name, title_movie, watch_date, time_playing[1], 
price_seat, seats_booking, total_prices_booking, payment_method FROM movie m JOIN booking b 
ON m.id_movie = b.id_movie JOIN schedule s ON s.id_schedule = b.id_schedule;

SELECT * FROM booking ORDER BY id_booking DESC;

--UPDATE
UPDATE booking SET seats_booking = ARRAY['E10', 'E15','E14'] 
WHERE id_booking = 3; 

UPDATE booking SET total_prices_booking = 30
WHERE id_booking = 3;

-- DELETE
DELETE FROM booking WHERE id_booking = 7;
















ALTER TABLE booking ADD watch_date DATE NOT NULL;

ALTER TABLE booking ALTER total_prices_booking TYPE NUMERIC(2) NOT NULL
ALTER TABLE booking ALTER price_booking TYPE NUMERIC(2)
ALTER TABLE booking DROP price_booking;
ALTER TABLE booking ADD id_schedule INTEGER;
ALTER TABLE booking ADD CONSTRAINT fk_id_schedule
FOREIGN KEY (id_schedule)
REFERENCES schedule(id_schedule);
SELECT movie.id_movie, id_schedule, title_movie, time_playing, cinema_name, date_start, date_end FROM movie JOIN schedule 
ON movie.id_movie = schedule.id_movie;

SELECT title_movie, cinema_name FROM movie JOIN schedule ON '08:00' = time_playing[1]