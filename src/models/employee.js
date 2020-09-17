// ANCHOR Here we create the schema for an account
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Create an Employee Schema.
const EmployeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date_of_birth: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },
    salary: {
        type: Schema.Types.Decimal128,
        required: true
    }
});

const User = mongoose.model('Employees', EmployeeSchema);

export default User;