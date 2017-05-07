USE cars_db;

INSERT INTO vehicles (make, makeId, model, modelId, year, color) VALUES
("Audi", 5, "R8", 5, 2010, "Black"),
("Honda", 26, "S2000", 536, 2005, "Red"),
("Honda", 26, "S2000", 536, 2006, "Blue"),
("Lotus", 39, "Elise", 750, 2006, "Red"),
("Mazda", 42, "Miata", 780, 1999, "Green");

DROP table vehicles, users;