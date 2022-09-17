const path = require('path');
const session = require('express-session');

exports.getProyectos = (request, response, next) => {

    response.render(path.join('..',"views", "proyectos.ejs"), {
        privilegios: request.session.privilegios,
    });
};

exports.getCrearProyecto = (request, response, next) => {

    response.render(path.join('..',"views", "CrearProyecto.ejs"), {
        privilegios: request.session.privilegios,
    });
};

exports.getEditarProyecto = (request, response, next) => {

    response.render(path.join('..',"views", "EditarProyecto.ejs"), {
        privilegios: request.session.privilegios,
    });
};