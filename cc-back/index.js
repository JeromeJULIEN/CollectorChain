require('dotenv').config();
const { createServer } = require('http');
// const bodyParser = require('body-parser');
const multer = require('multer');

const bodyParser = multer();
const cors = require('cors');
const app = require('./app');

const PORT = process.env.PORT || 4321;

app.use(cors());
app.use(bodyParser.none());
const server = createServer(app);

// parse request body
// app.use(bodyParser.json());

// cors
// app.use((req, res) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
// });

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
