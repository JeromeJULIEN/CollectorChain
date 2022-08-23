-- Deploy collector_chain:V3 to pg

BEGIN;

ALTER TABLE "property"
ALTER COLUMN "tag_id" DROP NOT NULL;

COMMIT;
