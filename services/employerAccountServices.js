// The purpose of this class will be to create functions that query the database, rather than the routes doing that itself. The reasoning being that we want to create testable code, in order to do so we don't want to rely of mocking of http request to an endpoint to test.

// This should have an initial get function that retrieves all of the items from that db table

var db = require("../models/index").sequelize;
var employerModel = db.model("../models/Employer_account"); // - 7/19/2018 does not exist yet 
var modelOne = db.model("model_one");
var modelTwo = db.model("model_two");

class EmployerAccountService {
    constructor(userId, paramsId){

     }

    getAllEmployers(){
    // MODELNAME
    //     .findAll({
    //         where: {
    //             owner: userId
    //         }
    //     })
        return employerModel.findAll({ 
            include: [modelOne, modelTwo] 
        })
    }
    
    getOneEmployer(){
    // MODELNAME
    //     .findOne({
    //         where: {
    //             id: paramsId,
    //             owner: userid
    //         }
    //     })

    }
    
}

exports.editEmployer = function(req, id){
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

module.exports = EmployerAccountService;