const path = require('path');
const session = require('express-session');
const Proyecto = require('../models/proyecto.model');
const Tarea = require('../models/tarea.model');
const Usuario = require('../models/user.model');
const Realiza = require('../models/realiza.model');

exports.getTareas = (request, response, next) => {

    response.render(path.join('..',"views", "tareas.ejs"), {
        privilegios: request.session.privilegios,
    });
};

exports.getCrearTareas = (request, response, next) => {
    Usuario.fetchAll()
        .then(([rows, fielData]) => {
            request.session.empleados = [];
            for(let empleado of rows) {
                request.session.empleados.push(empleado);
            }
            Proyecto.fetchAll()
                .then(([consulta, fielData]) => {
                    request.session.proyectos= [];
                    for(let proyecto of consulta) {
                        request.session.proyectos.push(proyecto);
                    }
                    
                    response.render(path.join('..',"views", "CrearTarea.ejs"), {
                        privilegios: request.session.privilegios,
                        empleados: request.session.empleados,
                        proyectos: request.session.proyectos,
                    });
                })

                .catch(err => {
                    console.log(err);
                    response.render('error.ejs');
                }); 
        })
        .catch(err => {
            console.log(err);
            response.render('error.ejs');
        }); 
}

exports.postCrearTareas = (request, response, next) => {
    
    Proyecto.fetchId(request.body.proyectos)
    .then(([rows, fielData]) => {
        let id = rows[0].id_proyecto;
        const tarea = new Tarea(request.body.descripcion,request.body.duracion,id,request.body.fecha);
        tarea.save()
        .then(() => {
            Tarea.fetchRecent()
            .then(([cols, fielData]) => {
                let id_reciente= cols[0].reciente;
                const realiza = new Realiza(e,id_reciente);
                for (let e of request.body.empleados){
                    const realiza = new Realiza(e,id_reciente);
                    realiza.save();
                    
                }
                response.status(303).redirect('/tareas/main');
                console.log("tarea creada con exito");
            })
            .catch(err => {
                console.log(err);
                response.render('error.ejs');
            });
        })
        .catch(err => {
            console.log(err);
            response.render('error.ejs');
        });
    })
    .catch(err => {
        console.log(err);
        response.render('error.ejs');
    }); 
    
}