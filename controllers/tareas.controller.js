const path = require('path');
const session = require('express-session');
const Proyecto = require('../models/proyecto.model');
const Tarea = require('../models/tarea.model');
const Usuario = require('../models/user.model');

exports.getTareas = (request, response, next) => {

    response.render(path.join('..',"views", "tareas.ejs"), {
        privilegios: request.session.privilegios,
    });
};

exports.getCrearTareas = (request, response, next) => {
    Usuario.fetchEmpleados()
        .then(([rows, fielData]) => {
            request.session.empleados = [];
            for(let empleado of rows) {
                request.session.empleados.push(empleado.nombre);
            }
            Proyecto.fetchAll()
                .then(([consulta, fielData]) => {
                    request.session.proyectos= [];
                    for(let proyecto of consulta) {
                        request.session.proyectos.push(proyecto.nombre);
                    }
                    
                    response.render(path.join('..',"views", "CrearTarea.ejs"), {
                        privilegios: request.session.privilegios,
                        empleados: request.session.empleados,
                        proyectos: request.session.proyectos,
                    });
                })

                .catch(err => {
                    response.render('error.ejs');
                }); 
        })
        .catch(err => {
            response.render('error.ejs');
        }); 
}

exports.postCrearTareas = (request, response, next) => {
    console.log(request.body.empleados);

    const tarea = new Tarea("w",0.5,2,"2022/08/09");
        
        tarea.save()
        .then(() => {
            response.status(303).redirect('/tareas/main');
            console.log("tarea creada con exito");
        })
        .catch(err => {
            console.log(err);
            response.render('error.ejs');
        });
}