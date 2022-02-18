const router = require('express').Router()

router.get('/', (req,res) => {
    return res.json({message:'up tasks'})
})


module.exports = router