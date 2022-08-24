-- Deploy collector_chain:v5 to pg

BEGIN;

ALTER TABLE "property"
DROP CONSTRAINT "property_name_key";
-- ALTER TABLE "property"
-- ADD COLUMN "nameTagId" TEXT NOT NULL UNIQUE GENERATED ALWAYS AS ("name" || "tag_id") STORED;



COMMIT;
