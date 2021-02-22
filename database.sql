
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

--DROP TABLE "user";

SELECT * FROM "user";
SELECT * FROM "assets_master";

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

INSERT INTO "assets_master" ("assetNumber", "domain_name", "ipv4", "mac_addr", 
							 "type_id", "location_id", "status_id")
 VALUES (34556200, 'MO100_CONF_PC', '10.10.110.100', '01-23-45-67-89-0A', 1, 1, 1),
        (34556201, 'SO110_CONF_PC', '10.10.120.100', '23-45-62-21-57-00', 1, 2, 1),
 		(34556202, 'NB1200_CONF_PC', '10.10.130.100', '0A-33-AB-67-89-F3', 1, 3, 1),
 		(34556203, 'AMOORE_WFH_MAC', '10.65.100.13', '31-00-AF-93-00-0B', 3, 4, 1),
 		(34556204, 'AMOORE_WFH_PH', '10.65.100.14', '86-CC-65-27-20-FD', 5, 4, 1),
  		(34556205, 'MDAVIS_WFH_LAP', '10.65.100.15', 'CA-8A-B4-34-1D-A5', 2, 4, 1),
 		(34556206, 'MDAVIS_WFH_PH', '10.65.100.16', '1F-B7-32-27-20-3B', 5, 4, 1),
		(34556207, 'JWILLIAMS_MO100_PC', '10.10.110.101', '32-73-CD-37-0C-4B', 1, 1, 1),
		(34556208, 'JWILLIAMS_MO100_PC2', '10.10.110.102', '01-23-5F-67-89-0A', 1, 1, 3),
		(34556209, 'HSMITH_NB1200_LAP', '10.10.130.101', '23-45-23-21-57-00', 2, 3, 3),
 		(34556210, 'HSMITH_NB1200_TAB', '10.10.130.102', '43-33-F3-67-89-F3', 4, 3, 1),
 		(34556211, 'HSMITH_NB1200_PC', '10.10.130.103', '31-00-AF-93-00-0B', 1, 3, 5),
 		(34556212, 'ATAYLOR_WFH_PC', '10.65.100.17', '86-CC-65-27-20-FD', 1, 4, 1),
  		(34556213, 'ATAYLOR_WFH_MAC', '10.65.100.18', 'CA-8A-B4-34-1D-A5', 3, 4, 1),
 		(34556214, 'ATAYLOR_WFH_PH', '10.65.100.19', '1F-B7-32-A0-28-3B', 5, 4, 4),
 		(34556215, 'BASE_IMAGE_PC', '10.10.110.103', '32-70-6A-37-0C-4B', 1, 1, 2),
 		(34556216, 'BASE_IMAGE_LAP', '10.10.110.104', '01-23-45-07-89-0A', 2, 1, 2),
		(34556217, 'BASE_IMAGE_MAC', '10.10.110.105', '23-45-F2-21-57-00', 3, 1, 2),
 		(34556218, 'BASE_IMAGE_PC', '10.10.110.106', '0A-33-AB-67-89-F3', 1, 1, 2),
 		(34556219, 'JRAMSEY_WFH_PH', '10.65.100.20', '33-BD-AF-9C-01-0B', 5, 4, 1),
 		(34556220, 'JRAMSEY_WFH_TAB', '10.65.100.21', '86-CC-65-27-20-FD', 4, 4, 1),
  		(34556221, 'MANDERSON_WFH_PH', '10.65.100.22', 'CA-DA-B4-39-1D-A5', 5, 4, 1),
 		(34556222, 'MANDERSON_WFH_TAB', '10.65.100.23', '1F-B7-32-27-20-3B', 4, 4, 1),
 		(34556223, 'BTHORPE_WFH_PH', '10.65.100.24', '01-77-CD-70-BC-4B', 5, 4, 1),
		(34556224, 'BTHORPE_WFH_TAB', '10.65.100.25', '01-23-45-67-89-0A', 4, 4, 1),
		(34556225, 'MO100_PUB_PC', '10.10.110.101', '23-45-62-21-57-00', 1, 1, 5),
 		(34556226, 'SO110_IT_PC', '10.10.120.101', '0A-73-AC-67-3C-FF', 1, 2, 1),
 		(34556227, 'CCHILDS_MO100_PC', '10.10.110.103', '55-00-AF-93-00-0B', 1, 1, 1),
 		(34556228, 'XALLAN_MO100_PC', '10.10.110.104', 'A6-CC-65-27-20-FD', 1, 1, 1),
  		(34556229, 'ALENNOX_MO100_PC', '10.10.110.105', 'AA-8A-B4-F4-1D-A5', 1, 1, 3),
 		(34556230, 'AEDMONDS_SO110_MAC', '10.10.120.102', '9F-00-C2-94-20-A2', 3, 2, 1);
--add column test

ALTER TABLE "assets_master"
ADD "added_by" VARCHAR(30) DEFAULT 'Unknown';

--delete test
DELETE FROM "assets_master" WHERE id = 18;
DELETE FROM "assets_master" WHERE id = 19;
--update test
UPDATE "assets_master" SET "domain_name" = 'IPHONE' WHERE id = 3;

UPDATE "user" SET "isAdmin" = TRUE WHERE id = 1;

--DROP TABLE "asset_types";

CREATE TABLE "asset_types" (
	"id" SERIAL PRIMARY KEY,
	"type_name" VARCHAR(50) NOT NULL
);

SELECT * FROM "asset_types";

INSERT INTO "asset_types" ("type_name")
VALUES ('Desktop PC'),('Laptop PC'),('Laptop Macintosh'),('Tablet'),('Phone');

--DROP TABLE "locations";

CREATE TABLE "locations" (
	"id" SERIAL PRIMARY KEY,
	"loc_name" VARCHAR(50) NOT NULL
);

SELECT * FROM "locations";

INSERT INTO "locations" ("loc_name")
VALUES ('Main Office 100 Big Chungus Dr.'),
('Sattelite Office 110 Enterprise Pkwy.'), ('New Branch 1200 Main St.'), ('Work From Home');

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


SELECT * FROM "search_base";
SELECT * FROM "asset_status";
SELECT * FROM "locations";
SELECT * FROM "asset_types";

--full query
SELECT "assets_master".id,"assetNumber","domain_name","ipv4","mac_addr", "added_by", 
  "asset_types".type_name, "locations".loc_name , "asset_status".status_name FROM "assets_master"
  JOIN "asset_types" ON "asset_types".id = "assets_master".type_id
  JOIN "locations" ON "locations".id = "assets_master".location_id
  JOIN "asset_status" ON "asset_status".id = "assets_master".status_id;
  
--search form field testing

SELECT "assets_master".id,"assetNumber","domain_name","ipv4","mac_addr",
  "asset_types".type_name, "locations".loc_name , "asset_status".status_name FROM "assets_master"
  JOIN "asset_types" ON "asset_types".id = "assets_master".type_id
  JOIN "locations" ON "locations".id = "assets_master".location_id
  JOIN "asset_status" ON "asset_status".id = "assets_master".status_id
  WHERE "domain_name" ILIKE '%' || 'PC' || '%';
  
SELECT "assets_master".id,"assetNumber","domain_name","ipv4","mac_addr", 
"asset_types".type_name, "locations".loc_name , "asset_status".status_name FROM "assets_master"
JOIN "asset_types" ON "asset_types".id = "assets_master".type_id
JOIN "locations" ON "locations".id = "assets_master".location_id
JOIN "asset_status" ON "asset_status".id = "assets_master".status_id
WHERE domain_name ILIKE '%' || 'EXAMPLE_PC' || '%';