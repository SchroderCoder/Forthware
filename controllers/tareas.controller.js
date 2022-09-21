const path = require('path');
const session = require('express-session');
const Proyecto = require('../models/proyecto.model');
const Tarea = require('../models/tarea.model');
const Usuario = require('../models/user.model');
const Realiza = require('../models/realiza.model');

exports.getTareas = (request, response, next) => {
    Tarea.fetchAll()
    .then(([rows, fielData]) => {
        response.render(path.join('..',"views", "tareas.ejs"), {
            tareas: rows,
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

exports.getCrearTareas = (request, response, next) => {
    Usuario.fetchAll()
        .then(([rows, fielData]) => {
            request.session.isLoggedIn = true;
            request.session.empleados = [];
            for(let empleado of rows) {
                request.session.empleados.push(empleado);
            }
            Proyecto.fetchAll()
                .then(([consulta, fielData]) => {
                    request.session.isLoggedIn = true;
                    request.session.proyectos= [];
                    for(let proyecto of consulta) {
                        request.session.proyectos.push(proyecto);
                    }
                    
                    response.render(path.join('..',"views", "CrearTarea.ejs"), {
                        privilegios: request.session.privilegios,
                        empleados: request.session.empleados,
                        proyectos: request.session.proyectos,
                        isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
                        tareas: "",
                        titulo: "Crear tarea ",
                    });
                })

                .catch(err => {
                    console.log(err);
                    response.render('error.ejs', {
                        isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
                    });
                }); 
        })
        .catch(err => {
            console.log(err);
            response.render('error.ejs', {
                isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
            });
        }); 
}

exports.postCrearTareas = (request, response, next) => {
        
        const tarea = new Tarea(request.body.descripcion,request.body.duracion,request.body.proyectos,request.body.fecha);
        tarea.save()
        .then(() => {
            Tarea.fetchRecent()
            .then(([cols, fielData]) => {
                let id_reciente= cols[0].reciente;
                let id_empleados = request.body.empleados;

                for (e of id_empleados){    
                    Realiza.registrar(e,id_reciente)
                    .then(([rows, fielData]) => {
                        response.status(303).redirect('/tareas/main');
                        console.log("tarea creada con exito");
                    })
                    .catch(err => {
                        console.log(err);
                        response.render('error.ejs', {
                            isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
                        });
                    });
                }
            })
            .catch(err => {
                console.log(err);
                response.render('error.ejs', {
                    isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
                });
            });
        })
        .catch(err => {
            console.log(err);
            response.render('error.ejs', {
                isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
            });
        });
    
}

exports.getEditarTareas = (request, response, next) => {
    Tarea.fetchOne(request.params.id)
    .then(([rows, fielData]) => { 
        if (rows.length > 0) {
    
            Proyecto.fetchAll()
                .then(([consulta, fielData]) => {
                    request.session.isLoggedIn = true;
                    request.session.proyectos= [];
                    for(let proyecto of consulta) {
                        request.session.proyectos.push(proyecto);
                    }
                    
                    console.log(rows)
                    response.render(path.join('..',"views", "CrearTarea.ejs"), {
                        privilegios: request.session.privilegios,
                        proyectos: request.session.proyectos,
                        tareas: rows[0],
                        isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
                        titulo: "Editar tarea ",
                    });
                })

                .catch(err => {
                    console.log(err);
                    response.render('error.ejs', {
                        isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
                    });
                }); 

        } else {
            console.log("no existe el id del equipo");
            response.render('error.ejs', {
                isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
            });
        }
    })
    .catch(err => {
        console.log(err);
        response.render('error.ejs', {
            isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
        });
    });
}

exports.postEditarTareas = (request, response, next) => {
    console.log(request.body.proyectos)
    console.log(request.body.fecha)
    console.log(request.body.descripcion)
    console.log(request.body.duracion)


    console.log(request.body.id)
    Tarea.fetchOne(request.body.id)
    .then(([rows, fielData]) => {
        console.log(rows)
        rows[0].fecha_creacion= request.body.fecha
        rows[0].descripcion= request.body.descripcion
        rows[0].id_proyecto= request.body.proyectos
        rows[0].duracion= request.body.duracion

        
        console.log(rows[0].fecha_creacion);
        console.log(rows[0].descripcion);
        console.log(rows[0].id_proyecto);
        console.log(rows[0].duracion);
        console.log("xs");
        
        Tarea.saveEdit(rows[0])
                    .then(() => {
                        response.status(303).redirect('/tareas/main');
                    })
                    .catch(err => {
                        console.log(err);
                        response.render('error.ejs', {
                            isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
                        });
                    });

                })
        .catch(err => {
            console.log(err);
            response.render('error.ejs', {
                isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
            });
        }); 
    
}