require('dotenv').config(); // Load environment variables
const fetch = require('node-fetch'); // Import fetch for API requests

const NEWS_API_KEY = process.env.NEWS_API_KEY; // Load API key from .env
const NEWS_API_URL = `https://newsapi.org/v2/everything?q=cybersecurity&apiKey=${NEWS_API_KEY}`;

/**
 * Fetches the latest cybersecurity news from NewsAPI.
 * @returns {Promise<Array>} List of news articles.
 */
const fetchCyberSecurityNews = async () => {
  try {
    console.log('📰 Fetching latest cybersecurity news...');

    const response = await fetch(NEWS_API_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch news: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(`✅ Retrieved ${data.articles.length} cybersecurity articles`);

    return data.articles;
  } catch (error) {
    console.error('❌ Error in fetchCyberSecurityNews:', error.message);
    return [];
  }
};

module.exports = { fetchCyberSecurityNews };
