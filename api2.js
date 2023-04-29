const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// Define endpoint for getting latest events
app.get('/api/v3/app/events', (req, res) => {
  const eventType = req.query.type; // Get event type from query parameter
  const limit = req.query.limit; // Get maximum number of events to return from query parameter
  const page = req.query.page; // Get page number of events to return from query parameter

  // Here you would typically fetch the latest events data from a database or other data source based on the provided query parameters
  const eventData = [
    {
      id: 'event1',
      name: 'Event 1',
      date: '2023-05-01',
      location: 'Aligarh'
    },
    {
      id: 'event2',
      name: 'Event 2',
      date: '2023-05-05',
      location: 'Meerut'
    },
    {
      id: 'event3',
      name: 'Event 3',
      date: '2023-05-10',
      location: 'Chandigarh'
    },
    {
      id: 'event4',
      name: 'Event 4',
      date: '2023-05-15',
      location: 'Gaziabad'
    },
    {
      id: 'event5',
      name: 'Event 5',
      date: '2023-05-20',
      location: 'Bulandshahr'
    }
  ];

  // Filter and paginate events based on query parameters
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const events = eventType === 'latest' ? eventData.slice(startIndex, endIndex) : eventData;
  
  // Return the events data as JSON
  res.json(events);
});

// Start the server
app.listen(PORT, () => {
  console.log(`server started on port no. ${PORT}`);
});
