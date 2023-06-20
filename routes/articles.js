const express = require("express");
const router = express.Router();
const axios = require("axios");

// Fetch N news articles
router.get("/articles", async (req, res) => {
  //   const apiKey = "05685f5d71301af592dd32ab7ab70d78"; // Use the environment variable for API key
  const apiKey = process.env.GNEWS_API_KEY;
  category = "general";
  url =
    "https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=" +
    apiKey;

  try {
    const response = await axios.get(url);
    const articles = response.data.articles;

    for (let i = 0; i < articles.length; i++) {
      console.log("Title: " + articles[i].title);
      console.log("Description: " + articles[i].description);
      // You can access other properties of the article as needed.
    }

    res.json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Find a news article by title
router.get("/articles/title/:title", async (req, res) => {
  try {
    const { title } = req.params;
    const apiKey = process.env.GNEWS_API_KEY; // Use the environment variable for API key

    // Make a GET request to gnews.io API
    const response = await axios.get(
      `https://gnews.io/api/v4/search?q=${title}&apikey=${apiKey}&lang=en`
    );

    // Extract the articles from the response data
    const articles = response.data.articles;

    res.json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Search news articles by keywords
router.get("/articles/search", async (req, res) => {
  try {
    const { keywords } = req.query; // Get the value of keywords from query parameters
    const apiKey = process.env.GNEWS_API_KEY; // Use the environment variable for API key

    // Make a GET request to gnews.io API
    const response = await axios.get(
      `https://gnews.io/api/v4/search?q=${keywords}&apikey=${apiKey}&lang=en`
    );

    // Extract the articles from the response data
    const articles = response.data.articles;

    res.json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
