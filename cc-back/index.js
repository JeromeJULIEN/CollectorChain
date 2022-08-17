require('dotenv').config();
const { createServer } = require('http');
const app = require('./app');

const PORT = process.env.PORT || 4321;

const server = createServer(app);

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
