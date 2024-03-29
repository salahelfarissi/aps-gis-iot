-- Time Bucket
SELECT
  time_bucket('1 day', "PHENOMENON_TIME_START") AS bucket,
  avg("RESULT_NUMBER")
FROM "OBSERVATIONS" obs
WHERE "PHENOMENON_TIME_START" > now() - INTERVAL '1 week'
GROUP BY bucket
ORDER BY bucket;

-- Continuous aggregate
CREATE MATERIALIZED VIEW observations_daily
WITH (timescaledb.continuous) AS
SELECT
  time_bucket('1 day', "PHENOMENON_TIME_START") AS day,
  max("RESULT_NUMBER") AS high,
  first("RESULT_NUMBER", "PHENOMENON_TIME_START") AS open,
  last("RESULT_NUMBER", "PHENOMENON_TIME_START") AS close,
  min("RESULT_NUMBER") AS low
FROM "OBSERVATIONS" obs
GROUP BY day;

SELECT * FROM observations_daily
ORDER BY day DESC;

-- Inspect details about a continuous aggregate
SELECT * FROM timescaledb_information.continuous_aggregates;

-- Continuous aggregate policies
SELECT add_continuous_aggregate_policy('observations_daily',
  start_offset => INTERVAL '3 days',
  end_offset => INTERVAL '1 hour',
  schedule_interval => INTERVAL '1 days');

-- Manuel refresh
CALL refresh_continuous_aggregate(
  'observations_daily',
  now() - INTERVAL '1 week',
  now()
);