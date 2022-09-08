const path = require('path');

exports.getLogin = (request, response, next) => {

    response.render(path.join('..',"views", "login.ejs"));
};

exports.getMain = (request, response, next) => {

    response.render(path.join('..',"views", "principal.ejs"));
};

exports.getProyectos = (request, response, next) => {

    response.render(path.join('..',"views", "proyectos.ejs"));
};

exports.getReportes = (request, response, next) => {

    response.render(path.join('..',"views", "reportes.ejs"));
};

exports.getColaboradores = (request, response, next) => {

    response.render(path.join('..',"views", "colaboradores.ejs"));
};

exports.getTareas = (request, response, next) => {

    response.render(path.join('..',"views", "tareas.ejs"));
};