require('dotenv').config();

const connectDB = require('./src/config/db');
const express = require('express');
const app = express();

const courseRoutes = require('./src/routes/courseRoutes');
const errorHandler = require('./src/middleware/errorHandler');
const PORT = 3000;

connectDB();

app.set('view engine', 'ejs');
app.set('views', './src/views');


app.use(express.urlencoded({ extended: true}));
app.use('/courses', courseRoutes);

app.use((req, res) => {
    res.status(404).render('errors/404');
});
app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('Course catalogue application');
})


app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});