CREATE TABLE  IF NOT EXISTS flighter( id serial PRIMARY KEY, date VARCHAR(50), airport VARCHAR(50), aircraft VARCHAR(50) );

INSERT INTO flighter( airport, aircraft ) VALUES( 'Buchanan', 'Cessna 172p' );