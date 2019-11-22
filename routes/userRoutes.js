const router = require("express").Router();
const User = require('../models/user.model');
const signToken = require('../auth').signToken

router.get('/', async (req, res) => {
    try{
        const user = await User.find()
        res.send(user)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
})

router.post('/signup', async (req, res) => {
    try {
        const user = await User.create(req.body)
        const token = signToken(user)
        res.json({success: true, message: "User created. Token attached", token})
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
})

router.post('/login', (req, res) => {
    
})

router.get('/:id',async (req, res) => {
    try{
    const user = await User.findById(req.params.id)
    res.send(user)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
})

module.exports = router; //Export the endpoints to be used in another file