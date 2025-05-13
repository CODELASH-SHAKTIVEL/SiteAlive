import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';
const API_VERSION = process.env.API_VERSION || 'v1';

// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
// Middleware to handle CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
    }
);

app.get('/api/v1', (req, res) => {
    res.send('Welcome to the API!');
}
);

app.listen(PORT, () => {
    console.log(`Server is running on http://${HOST}:${PORT}/api/${API_VERSION}`);
});