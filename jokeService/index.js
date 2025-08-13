import http from 'http';
import { fetchRandomJoke } from './jokeService.js';

const port = 3000;

const server = http.createServer(async (req, res) => {
  try {
    const joke = await fetchRandomJoke();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(joke));
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: error.message }));
  }
});

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
