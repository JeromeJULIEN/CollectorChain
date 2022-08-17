-- Revert collector-chain:init from pg

BEGIN;

DROP TABLE "category", "collection", "user", "nft", "tag", "property", "property_has_nft", "favorite";

COMMIT;
