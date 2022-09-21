const path = require('path');
const session = require('express-session');

exports.getReportes = (request, response, next) => {

    response.render(path.join('..',"views", "reportes.ejs"), {
        privilegios: request.session.privilegios,
        isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
    });
};

exports.getCrearReporte = (request, response, next) => {

    response.render(path.join('..',"views", "CrearReporte.ejs"), {
        privilegios: request.session.privilegios,
        isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
    });
};