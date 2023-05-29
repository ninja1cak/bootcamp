CREATE TABLE movie(
  id_movie serial PRIMARY KEY,
  title_movie VARCHAR(255) UNIQUE NOT NULL,
  release_date_movie DATE,
  director_movie VARCHAR(255) NOT NULL,
  casts_movie TEXT[],
  synopsis_movie TEXT,
  url_image_movie TEXT
);



ALTER TABLE movie ADD release_date_movie DATE;
ALTER TABLE movie ADD id_schedule INTEGER; 
ALTER TABLE movie ADD duration_movie VARCHAR(255);
ALTER TABLE movie ADD url_image_movie TEXT;

-- ALTER TABLE movie ADD CONSTRAINT fk_id_schedule
-- FOREIGN KEY (id_schedule) REFERENCES schedule(id_schedule);

ALTER TABLE movie DROP CONSTRAINT fk_id_schedule;


-- CREATE
INSERT INTO movie(
  title_movie,
  director_movie,
  casts_movie,
  synopsis_movie,
  duration_movie,
  release_date_movie
) VALUES
(
  'SPIDERMAN: HOMECOMING',
  'Jon Watts',
  ARRAY['Tom Holland', 'Michael Keaton', 'Jon Faveru','Zendaya'],
  'Thrilled by his experience with the Avengers, young Peter Parker returns home to live with his Aunt May. Under the watchful eye of mentor Tony Stark, Parker starts to embrace his newfound identity as Spider-Man. He also tries to return to his normal daily routine -- distracted by thoughts of proving himself to be more than just a friendly neighborhood superhero. Peter must soon put his powers to the test when the evil Vulture emerges to threaten everything that he holds dear.',
  '2 hours 13 minutes',
  '2017-06-28'
);

INSERT INTO movie(
  title_movie,
  director_movie,
  casts_movie,
  synopsis_movie,
  duration_movie,
  release_date_movie
) VALUES
(
  'BLACK WIDOW',
  'Cate Shortland',
  ARRAY['Scarlett Johansson', 'Florence Pugh', 'David Harbour','O-T Fagbenle'],
  'Natasha Romanoff, aka Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy, and the broken relationships left in her wake long before she became an Avenger.',
  '2 hours 13 minutes',
  '2021-06-09'
),
(
  'JOHN WICK: CHAPTER 4',
  'Chad Stahelski',
  ARRAY['Keanu Reeves', 'Donnie Yen', 'Bill Skarsgård','Laurence Fishburne'],
  'With the price on his head ever increasing, legendary hit man John Wick takes his fight against the High Table global as he seeks out the most powerful players in the underworld, from New York to Paris to Japan to Berlin.',
  '2 hours 49 minutes',
  '2023-03-6'
),
(
  'IP MAN 4: THE FINALE',
  'Wilson Yip',
  ARRAY['	Donnie Yen', 'Wu Yue', 'Vanness Wu','Scott Adkins'],
  'Ip Man and his son encounter racial discrimination after travelling to the United States to seek a better life.',
  '1 hours 44 minutes',
  '2019-12-20'
),
(
  'Justice League: The Flashpoint Paradox',
  'Jay Oliva',
  ARRAY['Justin Chambers','C. Thomas Howell','Michael B. Jordan', 'Kevin McKidd' ],
  'The Flash causes a temporal ripple that creates a fractured reality where the Justice league has never formed, Superman does not exist and a war rages between Wonder Woman and Aquaman. Flash teams with Batman and Cyborg to restore the timeline.',
  '1 hours 22 minuts',
  '2013-07-30'
)

-- READ
SELECT * FROM movie ORDER BY director_movie ASC;

-- UPDATE
UPDATE movie SET title_movie = 'JUSTICE LEAGUE: THE FLASHPOINT PARADOX'
WHERE id_movie = 5;

UPDATE movie SET url_image_movie = 'drive.google.com/lorem-ipsum' 
WHERE id_movie < 6; 
-- DELETE 
DELETE FROM movie WHERE id_movie < 5;
