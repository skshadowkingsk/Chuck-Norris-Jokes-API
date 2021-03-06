const User = require('../models/user.model');

// test
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.user_create = function (req, res) {
    let user = new User(
        {
            email: req.body.email,
            senha: req.body.senha
        }
    );

    user.save(function (err) {
        if (err) {
            res.send(err);
        }
        res.send('User Created successfully')
    })
};

// find all
exports.user_find_all = function (req, res) {
    User.find(function(err, users){
        if (err)
            res.send(err);
        res.send(users);
    });
}

// find by id
exports.user_details = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return res.send(err);
        res.send(user);
    })
};
// find one
exports.user_find_one = function (req, res){
    let query = {email:req.params.email,senha:req.params.senha};
    User.findOne(query, function(err,user){
        if(err) return res.send(err);
        if(user){
            res.send("Ok");
        }else{
            res.send("N");
        }
    })
}
// update
exports.user_update = function (req, res) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) return res.send(err);
        res.send("User "+user._id+' Updated successfully!');
    });
};

// delete
exports.user_delete = function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) return res.send(err);
        res.send('Deleted successfully!');
    })
};