var sequelize = require('../db');
const student = sequelize.import('../models/student')


exports.getAll = function(){
        return student.findAll({
            
        })
}

exports.getOneStudent = function(req, id){
    return student.findOne({
        where: {
            id:req.params.id
        }
    })
}

exports.createStudent = function(req){
    return student.create({
        first_name : req.body.student.first_name,
        last_name : req.body.student.last_name,
        email : req.body.student.email,
        password : bcrypt.hashSync(req.body.student.password, 10),
        resume : req.body.student.resume,
        social_media_id : req.body.student.social_media_id,
        // token: jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*2})
    })
}

exports.loginStudent = function(req){
    return student.login({
        // first_name : req.body.student.first_name,
        // last_name : req.body.student.last_name,
        email : req.body.student.email,
        password : bcrypt.hashSync(req.body.student.password, 10),
        // resume : req.body.student.resume,
        // social_media_id : req.body.student.social_media_id,
        token: jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*2})
    })
}

exports.authenticateStudent = function(req, res){
    return student.findOne({where: {email: req.body.student.email} } ).then(
        function(student) {
            if (student) {
                bcrypt.compare(req.body.student.password, student.password, function (err, matches) {
                    if (matches) {
                        var sessionToken =  jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*2})
                        return sessionToken
                        // res.json({
                        //     student: student.id,
                        //     message: "Successfully Authenticated",
                        //     sessionToken: token
                        // })
                    } else {
                        //password doesn't match
                        return err
                        // res.json({
                        //     success: false,
                        //     error: 'Authentication failed, incorrect login credentials'
                        // });
                    }
                })
            } else {
                return err
                //account doesn't exist
                // res.json({
                //     success: false,
                //     error: 'Authentication failed, incorrect login credentials'
                // });
            }
        }
    )
    //email not found
    res.json({
        success: false,
        error: 'Authentication failed, incorrect login credentials'
    });
}

exports.editStudent = function(req, id){
    return student.update({
        first_name : req.body.student.first_name,
        last_name : req.body.student.last_name,
        email : req.body.student.email,
        password : req.body.student.password,
        resume : req.body.student.resume,
        social_media_id : req.body.student.social_media_id,
    },
    {where: {id: req.params.id}})
}

exports.deleteStudent = function(req ,id){
    return student.destroy({
        where:{ id:req.params.id}
    })
}