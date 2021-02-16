
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

--DROP TABLE "assets_master";

SELECT * FROM "assets_master";

CREATE TABLE "assets_master" (
	"id" SERIAL PRIMARY KEY,
	"assetNumber" INT NOT NULL,
	"domain_name" VARCHAR(50) NOT NULL,
	"ipv4" varchar(15) DEFAULT '000.000.000.000',
	"mac_addr" varchar(17) DEFAULT 'FF-FF-FF-FF-FF-FF',
    "type_id" INT NOT NULL,
	"location_id" INT NOT NULL,
	"status_id" INT NOT NULL
);


SELECT * FROM "assets_master";

INSERT INTO "assets_master" ("type_id", "location_id", "status_id",
"assetNumber", "domain_name", "ipv4", "mac_addr")
VALUES (1, 1, 1, 12345678, 'EXAMPLE_PC', '10.10.110.100', '01-23-45-67-89-0A'),
(2, 4, 4, 12345679, 'TEST_MAC', '10.10.110.101', '23-45-62-21-57-00'),
 (3, 3, 2, 12345680, 'LAP_PC', '10.10.110.102', '0A-33-AB-67-89-F3'),
 (3, 2, 3, 12345681, 'SLOW_PC', '10.10.110.103', '31-00-AF-93-00-0B'),
 (4, 4, 1, 12345682, 'PHONE', '10.10.110.104', '86-CC-65-27-20-FD'),
 (1, 1, 5, 12345683, 'DEAD_PC', '10.10.110.105', '32-77-CD-37-0C-4B');

--add column test

ALTER TABLE "assets_master"
ADD "added_by" VARCHAR(30) DEFAULT 'Unknown';

--DROP TABLE "asset_types";

CREATE TABLE "asset_types" (
	"id" SERIAL PRIMARY KEY,
	"type_name" VARCHAR(50) NOT NULL
);

SELECT * FROM "asset_types";

INSERT INTO "asset_types" ("type_name")
VALUES ('Desktop PC'),('Laptop Macintosh'),('Laptop PC'),('Phone');

--DROP TABLE "locations";

CREATE TABLE "locations" (
	"id" SERIAL PRIMARY KEY,
	"loc_name" VARCHAR(50) NOT NULL
);

SELECT * FROM "locations";

INSERT INTO "locations" ("loc_name")
VALUES ('Main office 100 Big Chungus Dr'),
('Sattelite Office 110 Enterprise Pkwy'), ('New Branch 123 Main Street'), ('Work From Home');

--DROP TABLE "asset_status";

CREATE TABLE "asset_status" (
	"id" SERIAL PRIMARY KEY,
	"status_name" VARCHAR(50) NOT NULL
);

SELECT * FROM "asset_status";

INSERT INTO "asset_status" (status_name)
VALUES ('In Use'), ('In Inventory'), ('Awaiting Repair'), ('Ordered'), ('Retired');

SELECT "assets_master".id, "assetNumber", "domain_name","ipv4","mac_addr",
"asset_types".type_name, "locations".loc_name , "asset_status".status_name FROM "assets_master"
JOIN "asset_types" ON "asset_types".id = "assets_master".type_id
JOIN "locations" ON "locations".id = "assets_master".location_id
JOIN "asset_status" ON "asset_status".id = "assets_master".status_id;

--inventory table of sums
--by asset type
SELECT "asset_types".type_name, COUNT("asset_types".type_name) FROM "assets_master"
JOIN "asset_types" ON "asset_types".id = "assets_master".type_id
GROUP BY "asset_types".type_name;

--by location
SELECT "locations".loc_name, COUNT("locations".loc_name) FROM "assets_master"
JOIN "locations" ON "locations".id = "assets_master".location_id
GROUP BY "locations".loc_name;

--by status
SELECT "asset_types".type_name, COUNT("asset_types".type_name) FROM "assets_master"
JOIN "asset_types" ON "asset_types".id = "assets_master".type_id
GROUP BY "asset_types".type_name;

--base search fields
--DROP TABLE "search_base"
CREATE TABLE "search_base" (
	"id" SERIAL PRIMARY KEY,
	"base_category" VARCHAR(50) NOT NULL
);

INSERT INTO "search_base" ("base_category")
VALUES ('Domain Name'), ('Asset Number'), ('IP Address'), ('MAC Address');

SELECT * FROM "search_base";

--select master inventory (everything)
SELECT "assets_master".id,"assetNumber","domain_name","ipv4","mac_addr", 
"asset_types".type_name, "locations".loc_name , "asset_status".status_name FROM "assets_master"
JOIN "asset_types" ON "asset_types".id = "assets_master".type_id
JOIN "locations" ON "locations".id = "assets_master".location_id
JOIN "asset_status" ON "asset_status".id = "assets_master".status_id;

--search by id
SELECT "assets_master".id,"assetNumber","domain_name","ipv4","mac_addr", 
"asset_types".type_name, "locations".loc_name , "asset_status".status_name FROM "assets_master"
JOIN "asset_types" ON "asset_types".id = "assets_master".type_id
JOIN "locations" ON "locations".id = "assets_master".location_id
JOIN "asset_status" ON "asset_status".id = "assets_master".status_id
WHERE "assets_master".id = 1;

--search form field
SELECT "assets_master".id,"assetNumber","domain_name","ipv4","mac_addr", 
"asset_types".type_name, "locations".loc_name , "asset_status".status_name FROM "assets_master"
JOIN "asset_types" ON "asset_types".id = "assets_master".type_id
JOIN "locations" ON "locations".id = "assets_master".location_id
JOIN "asset_status" ON "asset_status".id = "assets_master".status_id
WHERE domain_name ILIKE '%PC%';

SELECT * FROM "search_base";
SELECT * FROM "asset_status";
SELECT * FROM "locations";
SELECT * FROM "asset_types";

SELECT "assets_master".id,"assetNumber","domain_name","ipv4","mac_addr", "added_by", 
  "asset_types".type_name, "locations".loc_name , "asset_status".status_name FROM "assets_master"
  JOIN "asset_types" ON "asset_types".id = "assets_master".type_id
  JOIN "locations" ON "locations".id = "assets_master".location_id
  JOIN "asset_status" ON "asset_status".id = "assets_master".status_id;