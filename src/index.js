import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
// create new express app and save it as "app"
const app = express();

// Listen for the port
dotenv.config();

// Setting up the enviromental variables
const PORT = process.env.PORT;
const DB_NAME = process.env.DB_NAME;
const USERNAME = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const db = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.fti7j.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;


// Connect to MongoDB with Mongoose.
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Server Connected to database'))
    .catch(err => { console.log(db); console.error(err); });


// create a route for the app
app.get('/', (req, res) => {
    res.send('Hello World');
});

// make the server listen to requests
app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
});