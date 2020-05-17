const db = require ("../models")

module.exports = {
    findAll: function(req, res) {

        console.log("Retrieving all books.");
        console.log(req.query);

        db.Book
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    findById: function (req, res){
        console.log("Finding book by ID.");
        console.log(req.params);
        
        db.Book
        .find(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },

    create: function(req, res){

        console.log("Book document creation initiated.");
        console.log(req.body);

        db.Book
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
        

    },

    update: function (req, res){

        console.log("Book document update initiated.");
        console.log(req.body);

        db.Book
        .findOneAndUpdate({_id: req.params.id}, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },

    delete: function (req, res){

        console.log("Book document deletion initiated.");
        console.log(req.params);

        db.Book
            .findById({ _id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }

};
