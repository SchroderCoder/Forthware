const path = require('path');
const session = require('express-session');
const Proyecto = require('../models/proyecto.model');
const Tarea = require('../models/tarea.model');
const Usuario = require('../models/user.model');
const Realiza = require('../models/realiza.model');
const PDF = require('pdfkit-table');
const fs = require('fs');

exports.getTareas = (request, response, next) => {
    Tarea.fetchAll()
    .then(([rows, fielData]) => {

        let alert = request.session.alerta ? request.session.alerta : "";
        request.session.alerta = ""; 

        response.render(path.join('..',"views", "tareas.ejs"), {
            tareas: rows,
            privilegios: request.session.privilegios,
            isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
            alert: alert,
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
    Usuario.fetchAll(idUsuario)
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

                if (Array.isArray(request.body.empleados)) {

                    for (e of id_empleados){    
                        console.log(e);
                        Realiza.registrar(e,id_reciente)
                        .then(() => {
                        })
                        .catch(err => {
                            console.log(err);
                            response.render('error.ejs', {
                                isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
                            });
                        });
                    }

                    Realiza.registrar(idUsuario,id_reciente)
                        .then(() => {
                        })
                        .catch(err => {
                            console.log(err);
                            response.render('error.ejs', {
                                isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
                            });
                        });

                } else {

                    Realiza.registrar(request.body.empleados,id_reciente)
                        .then(() => {
                        })
                        .catch(err => {
                            console.log(err);
                            response.render('error.ejs', {
                                isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
                            });
                        });

                    Realiza.registrar(idUsuario,id_reciente)
                        .then(() => {
                        })
                        .catch(err => {
                            console.log(err);
                            response.render('error.ejs', {
                                isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
                            });
                        });

                }           
                request.session.alerta = "Tarea : "+ request.body.descripcion + " creado con éxito!";
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

                Realiza.fetchRegistrados(request.params.id)
                .then(([registered, fielData]) => {
                    request.session.empleados_r = [];
                    for(let empleado of registered) {
                        request.session.empleados_r.push(empleado);
                    }
                    Realiza.fetchNoRegistrados(request.params.id)
                    .then(([noregistered, fielData]) => {
                        request.session.empleados_no_r = [];
                        for(let empleado of noregistered) {
                            request.session.empleados_no_r.push(empleado);
                        }
                        response.render(path.join('..',"views", "CrearTarea.ejs"), {
                            privilegios: request.session.privilegios,
                            tareas: rows[0],
                            registrados: request.session.empleados_r,
                            no_registrados: request.session.empleados_no_r,
                            proyectos: request.session.proyectos,
                            titulo: "Editar Tarea " + rows[0].descripcion,
                            isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
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
            })     

        })

            .catch(err => {
                console.log(err);
                response.render('error.ejs', {
                    isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
                });
            }); 
        } else {
            console.log("no existe el id de la tarea");
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
    Tarea.fetchOne(request.body.id)
    .then(([rows, fielData]) => {
        rows[0].fecha_creacion= request.body.fecha
        rows[0].descripcion= request.body.descripcion
        rows[0].id_proyecto= request.body.proyectos
        rows[0].duracion= request.body.duracion
        Tarea.saveEdit(rows[0])
        .then(() => {
            if (request.body.registrados){
                Tarea.fetchRecent()
                .then(([cols, fielData]) => {
                    let id_reciente= cols[0].reciente;
                    let id_empleados = request.body.registrados;

                    if (Array.isArray(request.body.registrados)) {
                        
                        for (e of id_empleados){    
                            Realiza.eliminar(e,id_reciente)
                            .then(() => {
                            })
                            .catch(err => {
                                console.log(err);
                                response.render('error.ejs', {
                                    isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
                                });
                            });
                        }

                    } else {

                        Realiza.eliminar(request.body.registrados,id_reciente)
                        .then(() => {
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
            }

            if (request.body.no_registrados){
                Tarea.fetchRecent()
                .then(([cols, fielData]) => {
                    let id_reciente= cols[0].reciente;
                    let id_empleados = request.body.no_registrados;

                    if (Array.isArray(request.body.no_registrados)) {

                        for (e of id_empleados){    
                            Realiza.registrar(e,id_reciente)
                            .then(() => {
                            })
                            .catch(err => {
                                console.log(err);
                                response.render('error.ejs', {
                                    isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
                                });
                            });
                        }
                    } else {

                        Realiza.registrar(request.body.no_registrados,id_reciente)
                        .then(() => {
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
            }
            privilegios: request.session.privilegios,
            request.session.alerta = "Tarea: "+ request.body.descripcion + " editada con éxito!";
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

exports.getdeleteTareas = (request, response, next) => {    
    Tarea.erase(request.params.id)
    .then(([]) => {
        privilegios: request.session.privilegios,
        request.session.alerta = "Tarea eliminada con éxito!";
        response.redirect('/tareas/main');
    })  
    .catch(err => {
        console.log(err);
        response.render('error.ejs', {
            isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
        });
    }); 
}   

exports.postoneTarea = (request, response, next) => {
    Tarea.fetchOne(request.body.id)
        .then(([rows, fieldData]) => {
            Tarea.fetchTareasEmpleados(request.body.id)
            .then(([filas, fieldData]) => {
                privilegios: request.session.privilegios,
                response.status(200).json({tareas: rows, empleados: filas});
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

exports.getBuscar = (request, response, next) => {
    Tarea.find(request.params.valor ? request.params.valor : '')
        .then(([rows, fieldData]) => {
            privilegios: request.session.privilegios,
            response.status(200).json({tareas: rows});
        })
        .catch(err => { 
            console.log(err);
            response.status(500).json({message: "ERROR 500"});
        });
}