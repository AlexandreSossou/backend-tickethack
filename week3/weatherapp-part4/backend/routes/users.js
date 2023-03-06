var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');
const User = require('../models/users');






router.post('/signup', (req, res) => {
	// Check if the city has not already been added

User.findOne({email : { $regex: new RegExp(req.body.email, 'i') }})
.then(data=>{

    if ( !req.body.email || !req.body.name ){

        res.json({ result: false, error: 'Missing or empty fields' });

    }
    if (data ) {
        console.log(data)
        res.json({ result: false, error: 'User already exists' })

    }
    else{
        const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    
                });

                newUser.save().then(u => {
                    res.json({ result: true, b:u});
                    });
    }
})
});

router.post('/signin', (req, res) => {
	// Check if the city has not already been added

User.findOne({email : { $regex: new RegExp(req.body.email, 'i') }})
.then(data=>{

    if ( !req.body.email || !req.body.name || req.body.name === null || req.body.email ===null){

        res.json({ result: false, error: 'Missing or empty fields' });

    }
    if (data=== null ) {
        console.log(data)
       
        res.json({ result: false, error: 'User not found' })

    }
    else{

       
        console.log(data)
         res.json({ result: true});
                  
    }
})
});







module.exports = router;
