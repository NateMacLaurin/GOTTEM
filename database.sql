
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
    "type_id" INT NOT NULL,
	"location_id" INT NOT NULL,
	"status_id" INT NOT NULL,
	"domain_name" VARCHAR(50) NOT NULL,
	"ipv4" varchar(15) DEFAULT '000.000.000.000',
	"mac_addr" varchar(17) DEFAULT 'FF-FF-FF-FF-FF-FF',
	"isRetired" BOOLEAN DEFAULT FALSE
);


SELECT * FROM "assets_master";

INSERT INTO "assets_master" ("type_id", "location_id", "status_id",
"domain_name", "ipv4", "mac_addr", "isRetired")
VALUES (1, 1, 1, 'EXAMPLE_PC', '10.10.110.100', '01-23-45-67-89-0A', FALSE),
(2, 1, 2, 'TEST_MAC', '10.10.110.101', '23-45-62-21-57-00', FALSE),
 (3, 3, 3, 'LAP_PC', '10.10.110.102', '0A-33-AB-67-89-F3', FALSE),
 (1, 2, 3, 'SLOW_PC', '10.10.110.103', '31-00-AF-93-00-0B', FALSE),
 (4, 3, 1, 'PHONE', '10.10.110.104', '86-CC-65-27-20-FD', FALSE),
 (1, 1, 2, 'DEAD_PC', '10.10.110.105', '32-77-CD-37-0C-4B', TRUE);
 
--DROP TABLE "asset_types";

CREATE TABLE "asset_types" (
	"id" SERIAL PRIMARY KEY,
	"type_name" VARCHAR(50) NOT NULL
);

SELECT * FROM "asset_types";

INSERT INTO "asset_types" ("type_name")
VALUES ('computer'),('macintosh'),('laptop'),('phone');

--DROP TABLE "locations";

CREATE TABLE "locations" (
	"id" SERIAL PRIMARY KEY,
	"loc_name" VARCHAR(50) NOT NULL
);

SELECT * FROM "locations";

INSERT INTO "locations" ("loc_name")
VALUES ('Main office 100 Big Chungus dr.'), 
('Sattelite Office 110 Enterprise Pkwy'), ('New Branch 123 Main Street'), ('Work From Home');

--DROP TABLE "asset_status";

CREATE TABLE "asset_status" (
	"id" SERIAL PRIMARY KEY,
	"status_name" VARCHAR(50) NOT NULL
);

SELECT * FROM "asset_status";

INSERT INTO "asset_status" (status_name)
VALUES ('in use'), ('in repair'), ('awaiting repair'), ('repaired'), ('in inventory'), ('damaged');

SELECT * FROM "assets_master"
JOIN "asset_types" ON "asset_types".id = "assets_master".type_id
JOIN "locations" ON "locations".id = "assets_master".location_id
JOIN "asset_status" ON "asset_status".id = "assets_master".status_id;