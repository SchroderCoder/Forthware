const path = require('path');
const session = require('express-session');
const Reporte = require('../models/reporte.model');
const Proyecto = require('../models/proyecto.model');

exports.getReportes = (request, response, next) => {

    Reporte.fetchAll()
    .then(([rows, fielData]) => {
        response.render(path.join('..',"views", "reportes.ejs"), {
            reportes: rows,
            privilegios: request.session.privilegios,
            isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
        });

    })
    .catch(err => {
        console.log(err);
        response.render('error.ejs', {
            isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
        });
    })

};

exports.getCrearReporte = (request, response, next) => {

    Proyecto.fetchAllProyectos()
    .then(([rows, fielData]) => {
        response.render(path.join('..',"views", "CrearReporte.ejs"), {
            proyectos: rows,
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

exports.postCrearReporte = (request, response, next) => {

    id_empleado= request.session.id_empleado;
    const reporte = new Reporte(request.body.fecha_inicio, request.body.fecha_fin, request.body.Efectividad_ajustada, request.body.horas_base, request.body.horas_hombre, request.body.horas_ausencia, request.body.proporcion_horas, id_empleado);
    console.log(reporte)
    reporte.save()
        .then(() => {
            response.status(303).redirect('/reportes/main');
            console.log("reporte creado con exito");
        })
        .catch(err => {
            console.log(err);
            response.render('error.ejs', {
                isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
            });
        });

};