CREATE DATABASE iot;

CREATE TABLE metrics (
  sensor_id SERIAL PRIMARY KEY,
  "timestamp" TIMESTAMP,
  sensor_type TEXT DEFAULT 'STA',
  metric jsonb NOT NULL DEFAULT '{}'::jsonb
);