const express = require('express');
const app = express();
const cors = require('cors');
const measuresRoute = require('./routes/measures');

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/measures', measuresRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});