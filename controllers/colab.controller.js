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

exports.postoneColaborador = (request, response, next) => {
    Colaboradores.fetchOne(request.body.id)
        .then(([rows, fieldData]) => {
            Colaboradores.fetchProyectos(request.body.id)
            .then(([filas, fieldData]) => {
                response.status(200).json({empleados: rows , proyectos: filas});
                privilegios: request.session.privilegios
            })
            .catch(err => { 
                console.log(err);
                response.status(500).json({message: "ERROR 500"});
            });
        })
        .catch(err => { 
            console.log(err);
            response.status(500).json({message: "ERROR 500"});
        });
};