var express = require('express')
var router = express.Router()
var Employer = require('../services/employerServices');     
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

router.post('/createEmployer', function (req, res) {
    var username = req.body.employer.username;
    var pass = req.body.employer.password;
    var email = req.body.employer.email;

    Employer.create({
      username: username,
      passwordhash: bcrypt.hashSync(pass, 10),
      email: email

    }).then(
  
      function createSuccess(employer) {
        var token = jwt.sign({id: employer.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
        res.json({
            employer: employer,
          message: 'created',
          sessionToken: token 
        });
      },
      function createError(err) {
        res.send(500, err.message);
      }
    );
  });

    router.post('/login', function(req, res) {
    
        Employer.findOne( { where: { username: req.body.user.username } } ).then(
            function(employer) {
                if (employer) {
                    bcrypt.compare(req.body.employer.password, employer.passwordhash, function(err, matches){

                        if (matches) {
                            var token = jwt.sign({id: employer.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24 });
                            res.json({  
                                employer: employer,
                            message: "successfully authenticated",
                                sessionToken: token
                            });
                        }else { 
                            console.log("Username or Password is incorrect");
                            res.status(502).send({ error: "Double check your username or password, they dont match our records" });
                        }
                    });
                } else {
                    console.log("2");
                    res.status(500).send({ error: "failed to authenticate" });
                }
            },
            function(err) {
                res.status(501).send({ error: "you failed, yo" });
            }
        );
});
  
  module.exports = router;