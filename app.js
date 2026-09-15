require('dotenv').config();

const connectDB = require('./src/config/db');
const express = require('express');
const app = express();

const PORT = 3000;

connectDB();

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.send('Course catalogue application');
})

app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});