const express = require('express');
const corsAnywhere = require('cors-anywhere');

const app = express();
const port = 8080;

corsAnywhere.createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2']
}).listen(port, () => {
  console.log(`CORS Anywhere proxy running on port ${port}`);
});
