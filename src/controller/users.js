import Employee from '../models/employee'

// Create and Save a new employee
export const create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        return res.status(400).send({
            message: "content can not be empty"
        });
    }

    // Create a user
    const user = new Employee({
        name: req.body.name || "Untitled user",
        date_of_birth: req.body.date_of_birth,
        gender: req.body.gender,
        salary: req.body.salary
    });

    // Save user in the database
    user.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the user."
            });
        });
};

// Retrieve and return all employees from the database.
export const findAll = (req, res) => {
    Employee.find()
        .then(empl => {
            res.send(empl);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving employees."
            });
        });
};

// Find a single employee with a employeeId
export const findOne = (req, res) => {
    Employee.findById(req.params.noteId)
        .then(empl => {
            if (!empl) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.employeeId
                });
            }
            res.send(empl);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Employees not found with id " + req.params.employeeId
                });
            }
            return res.status(500).send({
                message: "Error retrieving employees with id " + req.params.employeeId
            });
        });
};

// Update a employee identified by the employeeId in the request
export const update = (req, res) => {
    // Validate Request
    if (!req.body.name) {
        return res.status(400).send({
            message: "Employees content can not be empty"
        });
    }

    // Find employees and update it with the request body
    Note.findByIdAndUpdate(req.params.noteId, {
        name: req.body.name || "Untitled user",
        date_Of_birth: req.body.date_Of_birth,
        gender: req.body.gender,
        salary: req.body.salary
    }, { new: true })
        .then(empl => {
            if (!empl) {
                return res.status(404).send({
                    message: "Employees not found with id " + req.params.employeeId
                });
            }
            res.send(empl);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Employees not found with id " + req.params.employeeId
                });
            }
            return res.status(500).send({
                message: "Error updating employees with id " + req.params.employeeId
            });
        });
};

// Delete a employee with the specified employeeId in the request
export const Delete = (req, res) => {
    Employee.findByIdAndRemove(req.params.employeeId)
        .then(empl => {
            if (!empl) {
                return res.status(404).send({
                    message: "Employee not found with id " + req.params.employeeId
                });
            }
            res.send({ message: "Employee deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Employee not found with id " + req.params.employeeId
                });
            }
            return res.status(500).send({
                message: "Could not delete employee with id " + req.params.employeeId
            });
        });
};