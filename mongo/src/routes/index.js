const router =require('express').Router();

router.get('/',(req, res, next) =>{
    res.send('hola prros, vivo en ti');
});

module.exports = router;