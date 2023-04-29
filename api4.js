const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// Define endpoint for updating existing event
app.put('/api/v3/app/events/:id', (req, res) => {
  const { name, tagline, schedule, description, moderator, category, sub_category, rigor_rank } = req.body;
  const image = req.files.image; // Assuming you're using the multer middleware to handle file uploads
  const eventId = req.params.id; // Get the event ID from the request parameter

  // Here you would typically update the event data in a database or other data source based on the provided event ID and payload
  // and return the updated event data as a JSON response
  const eventData = {
    id: eventId,
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

  // Return the updated event data as JSON
  res.json(eventData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`server started on port no. ${PORT}`);
});
