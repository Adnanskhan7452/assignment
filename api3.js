const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// Define endpoint for creating new event
app.post('/api/v3/app/events', (req, res) => {
  const { name, tagline, schedule, description, moderator, category, sub_category, rigor_rank } = req.body;
  const image = req.files.image; // Assuming you're using the multer middleware to handle file uploads

  // Here you would typically save the event data to a database or other data source
  // and return the newly created event data, including the generated event ID, as a JSON response
  const eventData = {
    id: 'event1',
    name,
    tagline,
    schedule,
    description,
    moderator,
    category,
    sub_category,
    rigor_rank,
    image_url: image.path // Assuming you're storing the uploaded image on disk and returning the path as the image URL
  };

  // Return the newly created event data as JSON
  res.json(eventData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`server started on port no. ${PORT}`);
});
