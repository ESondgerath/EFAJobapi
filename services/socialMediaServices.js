var sequelize = require('../db');
const social_media = require('../models/socialmedia');

exports.getAll = function(){
    return social_media.findAll({
        
    })
}
exports.getOneSocialMedia = function(id){
    return social_media.findAll({
        where: {
            id:req.params.id
        }
    })
}

exports.createSocialMedia = function(){
    return social_media.create({
        Github : req.body.social_media.Github,
        LinkedIn : req.body.social_media.LinkedIn,
        CodePen : req.body.social_media.CodePen,
        Porfolio: req.body.social_media.Portfolio,
        student_account_Id : req.body.social_media.resume,
        social_media_id : req.body.social_media.student_account_id,
    })
}

exports.editSocialMedia = function(id){
    return social_media.update({
        Github : req.body.social_media.Github,
        LinkedIn : req.body.social_media.LinkedIn,
        CodePen : req.body.social_media.CodePen,
        Porfolio: req.body.social_media.Portfolio,
        student_account_Id : req.body.social_media.resume,
        social_media_id : req.body.social_media.student_account_id,
    },
    {where: {id: req.params.id}})
}

exports.deleteStudent = function(id){
    return social_media.destroy({
        where:{ id:req.social_media.id}
    })
}

