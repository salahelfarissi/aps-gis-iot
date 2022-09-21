COMMIT;
BEGIN;

CREATE EXTENSION IF NOT EXISTS hstore;
CREATE EXTENSION IF NOT EXISTS postgis;
CREATE EXTENSION IF NOT EXISTS timescaledb;

DROP TABLE IF EXISTS measures;
CREATE TABLE measures (
  sensor_id SERIAL PRIMARY KEY,
  "timestamp" TIMESTAMP,
  sensor_type TEXT DEFAULT 'STA',
  measure jsonb NOT NULL DEFAULT '{}'::jsonb
);

COMMIT;