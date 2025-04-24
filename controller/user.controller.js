const User = require('../model/user.model');

exports.findAll = function(req, res) {
    User.findAll(function(err, User) {
        if(err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving users."
            });
        } else {
            res.send(User);
        }
    });
};

exports.findByID = function(req, res) {
    User.findByID(req.params.user_id, function(err, user) { 
        if(err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving user."
            });
        } else {
            res.send(user);
        }
    });
}

exports.update = function(req, res) {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            error: true,
            message: "User content can not be empty"
        });
    }

    // Create a User
    const updatedUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        datetime_created: req.body.datetime_created
    });

    // Save User in the database
    User.update(req.params.user_id, updatedUser, function(err, data) {
        if(err) {
            res.status(500).send({
                message: err.message || "Some error occurred while updating user."
            });
        } else {
            res.send(data);
        }
    });
}

exports.create = function(req, res) {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            error: true,
            message: "User content can not be empty"
        });
    }

    // Create a User
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        datetime_created: req.body.datetime_created
    });

    // Save User in the database
    User.create(newUser, function(err, data) {
        if(err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating user."
            });
        } else {
            res.send(data);
        }
    });
}

exports.delete = function(req, res) {
    User.delete(req.params.user_id, function(err, data) {
        if(err) {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting user."
            });
        } else {
            res.send({error: false, message: `User ${req.params.user_id} was deleted successfully!`});
        }
    });
}

