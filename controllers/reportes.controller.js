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

        response.render(path.join('..',"views", "CrearReporte.ejs"), {
            privilegios: request.session.privilegios,
            isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
        });


};

exports.postCrearReporte = (request, response, next) => {

    id_empleado= request.session.id_empleado;
    console.log(horasbase);
    const reporte = new Reporte(request.body.fecha_inicio, request.body.fecha_fin, 85, 350, 310, request.body.horas_ausencia_, request.body.proporcion_horas, id_empleado);
    console.log(reporte)
    reporte.save()
        .then(() => {
            Reporte.getHoras_proyectos(request.body.fecha_inicio, request.body.fecha_fin)
            .then(([rows,fielData]) => {
                console.log(rows);
            })
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

exports.postBuscar = (request, response, next) => {
    Reporte.getHoras_proyectos(request.body.fecha_inicio, request.body.fecha_fin)
        .then(([rows, fieldData]) => {
            response.status(200).json({proyectos: rows});
        })
        .catch(err => { 
            console.log(err);
            response.status(500).json({message: "ERROR 500"});
        });
};

exports.postCompleto = (request, response, next) => {
    console.log(request.body)
    response.status(200).json({completos: request.body});
};

exports.postHorasHombre = (request, response, next) => {
    console.log(request.body)
    response.status(200).json({horasHombre: request.body});
};
