const express = require('express')
const router= express.Router()


//Login
//GET

router.get('/',(req, res)=> {
    res.render('login')
})

//Dashboard
// GET /dashboard

router.get('/dashboard', (req, res)=> {
    res.render('dashboard')
})

module.exports = router