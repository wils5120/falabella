const router = require ('express').Router();
const mongojs = require('mongojs');

const db = mongojs('demo', ['tasks']);

    router.get('/task', (req, res, next) => {
        db.tasks.find((err, tasks) => {
            if (err) return next(err);
            res.json(tasks);
        })
    });

    router.get('/task/:id', (req, res, next) => {
        db.tasks.findOne({_id : mongojs.ObjectId(req.params.id) }, (err, task) => {
            if (err) return next(err);
            res.json(task);
        });
    });

    router.post('/task', (req, res, next) => {
        const task = req.body;
        if(!task.nombre || !(task.cedula) ||!( task.isDone + '')){
            res.status(400).json({
                error: 'bad date'
            });
        }
        else {
            db.tasks.save(task, (err, task)=> {
                if (err) return next(err);
                res.json(task);
            })
        }
    })


    router.delete('/task/:id', (req, res, next) => {
        db.tasks.remove({_id : mongojs.ObjectId(req.params.id)}, (err, result) => {
            if (err) return next(err);
            res.json(result);
        });
    });

    router.put('/task/:id', (req, res, next) =>{
        const task = req.body;
        const updateTask = {};
        if(task.isDone){
            updateTask.isDone = task.isDone;
        }

        if(task.nombre){
            updateTask.nombre = task.nombre;
        }
        if (!updateTask){
            res.status(400).json({
                error: 'bad request'
            });
        }
        else {
            db.tasks.update({ _id: mongojs.ObjectId(req.params.id)}, updateTask, (err, task) =>{
                if (err) return next(err);
                res.json(task);
            });
        }
     
    });
    

module.exports = router;