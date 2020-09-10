import express from 'express';
import dotenv from 'dotenv';
// create new express app and save it as "app"
const app = express();

// Listen for the port
dotenv.config();

// Setting up the enviromental variables
const PORT = process.env.PORT;
// const db = `mongodb+srv://Bill:${process.env.PASSWORD}@cluster0.fti7j.mongodb.net/quick_mechanic?retryWrites=true&w=majority`;


// Connect to MongoDB with Mongoose.
// mongoose.Promise = global.Promise;
// mongoose.set('useFindAndModify', false);
// mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Server Connected to database'))
//     .catch(err => { console.log(db); console.error(err); });


// create a route for the app
app.get('/', (req, res) => {
    res.send('Hello World');
});

// make the server listen to requests
app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
});