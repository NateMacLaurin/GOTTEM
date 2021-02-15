
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

--DROP TABLE "user";

SELECT * FROM "user";

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "isAdmin" BOOLEAN default FALSE
);

INSERT INTO "user" ("username", "password", "isAdmin")
VALUES
('admin', 'p3LmANHQ$g', TRUE),
('nate', 'p3LmANHQ$g', FALSE);

--DROP TABLE "assets_master";

SELECT * FROM "assets_master";

CREATE TABLE "assets_master" (
	"id" SERIAL PRIMARY KEY,
    "type_id" 
);

CREATE TABLE "" (
	"id" SERIAL PRIMARY KEY,
);