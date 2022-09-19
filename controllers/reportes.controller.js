const path = require('path');
const session = require('express-session');

exports.getReportes = (request, response, next) => {

    response.render(path.join('..',"views", "reportes.ejs"), {
        privilegios: request.session.privilegios,
    });
};

exports.getCrearReporte = (request, response, next) => {

    response.render(path.join('..',"views", "CrearReporte.ejs"), {
        privilegios: request.session.privilegios,
    });
};