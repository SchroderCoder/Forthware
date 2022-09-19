const path = require('path');
const session = require('express-session');
const Proyecto = require('../models/proyecto.model');
const { saveEtiqueta } = require('../models/proyecto.model');

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

exports.postCrearProyecto = (request, response, next) => {
    id_empleado= request.session.id_empleado;
    const proyecto = new Proyecto(request.body.nombre,request.body.descripcion, request.body.stack,request.body.importancia, request.body.estatus,0,request.body.imagen, id_empleado);

    proyecto.save()
        .then(() => {
            response.status(303).redirect('/proyectos/main');
            console.log("proyecto creado con exito");
        })
        .catch(err => {
            console.log(err);
            response.render('error.ejs');
        });
};  



exports.getEditarProyecto = (request, response, next) => {

    response.render(path.join('..',"views", "EditarProyecto.ejs"), {
        privilegios: request.session.privilegios,
    });
};

exports.getCrearEtiqueta = (request, response, next) => {

    response.render(path.join('..',"views", "CrearEtiqueta.ejs"), {
        privilegios: request.session.privilegios,
    });
};

exports.postCrearEtiqueta = (request, response, next) => {
    id_empleado= request.session.id_empleado;

    saveEtiqueta(request.body.nombre,1 ,id_empleado)
        .then(() => {
            response.status(303).redirect('/proyectos/main');
            console.log("etiqueta creada con exito");
        })
        .catch(err => {
            console.log(err);
            response.render('error.ejs');
        });
};  