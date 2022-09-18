// Load our .env file
require('dotenv').config();
// Load app
const app = require('./server.js')
// Set the port
const port = process.env.PORT || 4000;
// Start our API server
app.listen(port, () => {
    console.log(`\n Server is running on http://localhost:${port}\n`);
});
