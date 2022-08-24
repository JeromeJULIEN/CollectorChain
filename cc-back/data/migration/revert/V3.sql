-- Revert collector_chain:V3 from pg

BEGIN;

ALTER TABLE "property"
ALTER COLUMN "tag_id" SET NOT NULL;

COMMIT;
