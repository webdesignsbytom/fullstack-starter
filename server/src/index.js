// Load our .env file
require('dotenv').config();
// Load app
const app = require('./server.js')
// Set the port
const PORT = process.env.PORT || 4000;
const URL = process.env.URL || 'http://localhost:'
// Start our API server
app.listen(PORT, () => {
    console.log(`\nServer is running on ${URL}${PORT}\n`);
});
