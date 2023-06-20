1. Clone the repository or download the code for the Express app to your local machine.

2. Navigate to the root folder of the project in the command line or terminal.

3. Install the required dependencies by running the following command:
   npm install

4. Create a .env file in the root folder of the project and add your GNews API key as an environment variable:
   shared this for assignment purpose, will delete soon
   GNEWS_API_KEY=05685f5d71301af592dd32ab7ab70d78

5. Save the .env file.

6. Start the Express app by running the following command:
   npm start

7. The Express app will start running, and you should see a message indicating that the server is listening on a specific port (e.g., Port 3000).

8. Open a web browser and access the API endpoints using the following URLs:

Fetch N news articles: http://localhost:3000/api/articles
Find a news article by title: http://localhost:3000/api/articles/title/:title
Search news articles by keywords: http://localhost:3000/api/articles/search?keywords=:keywords
Replace :title with the specific title you want to search for, and replace :keywords with the specific keywords you want to search for.

For example, to fetch N news articles, you can open http://localhost:3000/api/articles in the browser.

That's it! You can now use the provided Express app to fetch news articles, find articles by title, and search articles by keywords.
