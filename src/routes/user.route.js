import { create, findAll, findOne, update, Delete } from '../controller/users'

export default (app) => {
    // Create a new user
    app.post('/users', create);

    // Retrieve all user
    app.get('/users', findAll);

    // Retrieve a single user with userId
    app.get('/users', findOne);

    // Update a user with userId
    app.put('/users', update);

    // Delete a user with userId
    app.delete('/users', Delete);
}
