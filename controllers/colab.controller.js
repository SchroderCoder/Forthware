const path = require('path');
const session = require('express-session');
const Colaboradores = require('../models/colaboradores.model');


exports.getColaboradores = (request, response, next) => {
    Colaboradores.fetchAll()
    .then(([rows, fielData]) => {
        response.render(path.join('..',"views", "colaboradores.ejs"), {
            colaboradores: rows,
            
            privilegios: request.session.privilegios,
            isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
        });
    })
    .catch(err => {
        console.log(err);
        response.render('error.ejs', {
            isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
        });
    });
};
