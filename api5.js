const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// Define endpoint for deleting existing event
app.delete('/api/v3/app/events/:id', (req, res) => {
  const eventId = req.params.id; // Get the event ID from the request parameter

  // Here you would typically delete the event data from a database or other data source based on the provided event ID
  // and return a success message as a JSON response
  const message = {
    status: 'success',
    message: `Event with ID ${eventId} has been deleted.`
  };

  // Return the success message as JSON
  res.json(message);
});

// Start the server
app.listen(PORT, () => {
  console.log(`server started on port no. ${PORT}`);
});
