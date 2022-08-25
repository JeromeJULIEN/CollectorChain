-- Revert collector_chain:v6 from pg

BEGIN;

DROP TABLE "nft_has_property_has_tag";
ALTER TABLE "property"
ADD COLUMN "tag_id" INT REFERENCES "tag"("id");

COMMIT;
