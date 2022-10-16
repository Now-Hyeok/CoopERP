const express = require('express');
const passport = require('passport');
const router = express.Router();
const { coop } = require('../models/index.js');
let pool = require('../config/config.json');

router.get('/signIn', function(req, res, next) {
    if (req.isAuthenticated() && req.user) {
        return res.json({ user: req.user });
    }
    return res.json({ user: null });
});

router.post('/signIn', passport.authenticate('local'), function(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }
});

router.post('/signUp', async (req, res, next) => {
    await coop.create({
        Coop_name: req.body.coop,
        Coop_address: req.body.address,
        Coop_pw: req.body.password,
        Coop_login_id: req.body.id
    }).then(_ => console.log("Data is created!"));
    res.send('success');
});

module.exports = router;