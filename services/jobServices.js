var sequelize = require('../db');
const job = sequelize.import('../models/job')

exports.getAll = function() {
    return job.findAll({

    })
}

exports.getOneJob = function(req, id){
    return job.findOne({
        where: {
            id:req.params.id
        }
    })
}

exports.createJob = function(req){
    return job.create({
        job_role : req.body.job.job_role,
        job_experience : req.body.job.job_experience,
        job_description : req.body.job.job_description,
        job_salary : req.body.job.job_salary
    })
}

exports.editJob = function(req, id){
    return job.update({
        job_role : req.body.job.job_role,
        job_experience : req.body.job.job_experience,
        job_description : req.body.job.job_description,
        job_salary : req.body.job.job_salary
    },
    {where: {id: req.params.id}})
}

exports.deleteJob = function(req ,id){
    return job.destroy({
        where:{ id:req.params.id}
    })
}