require('dotenv').config();
const express = require('express');
const app = express();
const DbConnect = require('./database');
const router = require('./routes');
const cors = require('cors');
<<<<<<< HEAD
const cookieParser = require('cookie-parser');

app.use(cookieParser());
const corsOption = {
    credentials: true,
    origin: ['http://localhost:3000'],
};
app.use(cors(corsOption));
app.use('/storage', express.static('storage'));

const PORT = process.env.PORT || 5500;
DbConnect();
app.use(express.json({ limit: '8mb' }));
app.use(router);

app.get('/', (req, res) => {
    res.send('Hello from express Js');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
=======

const corsOption = {
    origin:['http://localhost:3000'],
}
app.use(cors(corsOption))


const PORT = process.env.PORT || 5500;

DbConnect();

app.use(express.json());

app.use(router);

app.get('/', (req, res) => {
    res.send('Hello from express');
});

app.listen(PORT, () => console.log(`Listning on port ${PORT}`));
>>>>>>> 20ffaefbf0b561d1337f5c084e1de18ddb08d973
