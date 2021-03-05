const express = require('express')
const passport = require('passport')
const router= express.Router()


//Authentication with google
//GET /auth/google

router.get('/google',passport.authenticate('google', {scope: ['profile'] }))


//Google Auth Callback
// GET /auth/google/callback

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
    (req, res)=> {
        // Successful authentication, redirect home.
        res.redirect('/dashboard');
    })

module.exports = router