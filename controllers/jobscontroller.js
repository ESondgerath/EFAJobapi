var express = require('express')
var router = express.Router()
var Job = require('../services/jobServices');

router.get("/jobs", function (req, res) {

    Job
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
router.post('/api/createjob', function (req, res) {

    Job.createJob(req)
    .then(
        function createSuccess(job) {
            res.json({
                job: job
            });            
        },
        function createError(err){
            res.send(500, err.message);
        }
    )
})

router.put(`/api/jobEdit/:id`, function(req, res) {
        var data = req.params.id;
        
        Job.editJob(req, data)

            .then(
                function updateSuccess(job) {
                    res.json({
                        job: job
                    });            
                },
                function updateError(err){
                    res.send(500, err.message);
                }
            )
    });

router.get(`/api/getJob/:id`, function(req, res) {
        var id = req.params.id;

        Job.getOneJob(req, id)
            .then(
                function findOneSuccess(data) {
                    res.json(data);
                },
                function findOneError(err) {
                    res.send(500, err.message);
                }
            );
    });

router.delete(`/api/deleteJob/:id`, function(req, res) {
    var id = req.params.id;

    Job.deleteJob(req, id)
        .then(
            function deleteSuccess(data) {
                res.send("Student successfully deleted");
            },
            function deleteError(err){
                res.send(500, err.message);
            }
        )
})

module.exports = router;