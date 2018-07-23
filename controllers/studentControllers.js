var express = require('express')
var router = express.Router()
var Student = require('../services/studentServices');


router.get('/students' , function(req, res) {

    Student
    .getAll()
    .then(
      function findAllSuccess(data) {
          res.json(data);
      },
      function findAllError(err) {
          res.send(500, err.message);
      }
  );
})

router.put(`/api/studentaccount/:${id}`, function(req, res) {
        var data = req.params.id;
        var student = req.body.student
        
        Student.editStudent(data)
            
            .then(
                function updateSuccess(updatedLog) {
                    res.json({
                        student: student
                    });            
                },
                function updateError(err){
                    res.send(500, err.message);
                }
            )
    });

router.post(`/api/studentaccount/:id`, function(req, res) {
        var data = req.params.id;
        var userid = req.student.id
        Student.getOneStudent(data)
            .then(
                function findOneSuccess(data) {
                    res.json(data);
                },
                function findOneError(err) {
                    res.send(500, err.message);
                }
            );
    });






module.exports = router;