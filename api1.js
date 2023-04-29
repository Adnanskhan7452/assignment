const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// Define endpoint for getting event by ID
app.get('/api/v3/app/events', (req, res) => {
  const eventId = req.query.id; // Get event ID from query parameter

  // Here you would typically fetch the event data from a database or other data source
  const eventData = {
    id: eventId,
    name: 'Name of the Event',
    date: '2023-05-01',
    location: 'Aligarh'
  };

  // Returning the event data as JSON
  res.json(eventData);
});

// Starting the server
app.listen(PORT, () => {
  console.log(`server started on port no. ${PORT}`);
});
