// ANCHOR Here we create the schema for an account
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Create the User Schema.
const AccountSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date_Of_birth: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    salary: {
        type: Double,
        required: true
    }
});

const User = mongoose.model('Account', AccountSchema);

export default User;