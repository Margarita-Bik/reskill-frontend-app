const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/posts", async (req, res) => {
  try {
    const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
    res.json(posts.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/photos", async (req, res) => {
  try {
    const photos = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    res.json(photos.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/posts/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const posts = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    res.json(posts.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/photos/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const photos = await axios.get(
      `https://jsonplaceholder.typicode.com/photos/${id}`
    );
    res.json(photos.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
