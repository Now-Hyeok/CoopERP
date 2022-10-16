const LocalStrategy = require('passport-local').Strategy;
const users = require('../data/users.json');
let pool = require('../config/config.json');

exports.config = (passport) => {

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        const result = users.filter((user) => user.id === id);
        if (result.length > 0) {
            done(null, result[0]);
        }
    });

    passport.use(new LocalStrategy({
        usernameField: 'id',
        passwordField: 'password',
        session: true,
        passReqToCallback: false,
    }, async function (id, password, done) {
        console.log(id, password);
        try {
            const result = await pool.findOne({
                where: { id: id, password: password },
            });
            if (!result)
                return done(null, false, { message: "Wrong id" });
            if (id == result.password) {
                return done(null, result);
            } else {
                return done(null, false, { message: "Wrong password" });
            }
        } catch (err) {
            return done(err);
        }
    }));
};