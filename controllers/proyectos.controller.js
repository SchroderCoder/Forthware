const path = require('path');
const session = require('express-session');
const Proyecto = require('../models/proyecto.model');
const { fetchColaboradores, fetchLideres } = require('../models/proyecto.model');
const Crea = require('../models/crea');
const Usuario = require('../models/user.model');
const { response } = require('express');

exports.getProyectos = (request, response, next) => {
    
    Proyecto.fetchAllProyectos()
    .then(([rows, fielData]) => {
        Proyecto.fetchAllEtiquetas()
        .then(([cols, fielData]) => {
            response.render(path.join('..',"views", "proyectos.ejs"), {
                proyectos: rows,
                etiquetas: cols,
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
    })
    .catch(err => {
        console.log(err);
        response.render('error.ejs', {
            isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
        });
    });
    
};

exports.getCrearProyecto = (request, response, next) => {
    let colaboradores = fetchColaboradores;
    let lideres = fetchLideres;
    // <const importancia = ['Alto','Medio','Bajo'];
    // const estatus = ['']>
    Usuario.fetchAll()
        .then(([rows, fielData]) => {
            request.session.isLoggedIn = true;
            request.session.empleados = [];
            for(let empleado of rows) {
                request.session.empleados.push(empleado);
            }
            response.render(path.join('..',"views", "CrearProyecto.ejs"), {
                privilegios: request.session.privilegios,
                empleados: request.session.empleados,
                isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
                proyectos: "",
                titulo: "Crear Proyecto", 
                es_etiqueta: "¿Es etiqueta?",
            })
        })
        .catch(err => {
            console.log(err);
            response.render('error.ejs', {
                isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
            });
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
            response.render('error.ejs', {
                isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
            });
        });
};  


exports.getCrearEtiqueta = (request, response, next) => {
    
    response.render(path.join('..',"views", "CrearEtiqueta.ejs"), {
        privilegios: request.session.privilegios,
        isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
        proyectos: "",
        titulo: "Crear etiqueta",
    });
};

exports.postCrearEtiqueta = (request, response, next) => {
    id_empleado= request.session.id_empleado;

    Proyecto.saveEtiqueta(request.body.nombre,1 ,id_empleado)
        .then(() => {
            response.status(303).redirect('/proyectos/main');
            console.log("etiqueta creada con exito");
        })
        .catch(err => {
            console.log(err);
            response.render('error.ejs', {
                isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
            });
        });
};  

exports.getEditarProyecto = (request, response, next) => {
    Proyecto.fetchOne(request.params.id)
    .then(([rows, fielData]) => { 
        if (rows.length > 0) {
            Crea.fetchRegistrados(request.params.id)
                .then(([registered, fielData]) => {
                    request.session.empleados_r = [];
                    for(let empleado of registered) {
                        request.session.empleados_r.push(empleado);
                    }
                    Crea.fetchNoRegistrados(request.params.id)
                    .then(([noregistered, fielData]) => {
                        request.session.empleados_no_r = [];
                        for(let empleado of noregistered) {
                            request.session.empleados_no_r.push(empleado);
                        }


                        response.render(path.join('..',"views", "CrearProyecto.ejs"), {
                            proyectos: rows[0],
                            registrados: request.session.empleados_r,
                            no_registrados: request.session.empleados_no_r,
                            titulo: "Editar proyecto " + rows[0].nombre,
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

};


exports.postEditarProyecto = (request, response, next) => {

    Proyecto.fetchOne(request.body.id)
    .then(([rows, fielData]) => {
        rows[0].nombre= request.body.nombre
        rows[0].descripcion= request.body.descripcion
        rows[0].stack_tecnologia= request.body.stack
        rows[0].importancia= request.body.importancia
        rows[0].estatus= request.body.estatus
        rows[0].image_url= request.body.imagen
        
        Proyecto.saveEdit(rows[0])
        .then(() => {
            response.status(303).redirect('/proyectos/main');
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
};

exports.getEditarEtiqueta = (request, response, next) => {
    Proyecto.fetchOne(request.params.id)
    .then(([rows, fielData]) => { 
        if (rows.length > 0) {
            response.render(path.join('..',"views", "CrearEtiqueta.ejs"), {
                proyectos: rows[0],
                titulo: "Editar etiqueta " + rows[0].id_proyecto,
                etiqueta:rows[0],
                isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
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

};


exports.postEditarEtiqueta = (request, response, next) => {
    Proyecto.fetchOne(request.body.id)
    .then(([rows, fielData]) => {
        rows[0].nombre= request.body.nombre
        
        Proyecto.saveEdit(rows[0])
        .then(() => {
            response.status(303).redirect('/proyectos/main');
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
};


exports.getEliminarEtiqueta = (request, response, next) => {
    console.log()
};

/* 
exports.postEliminarEtiqueta = (request, response, next) => {
    id_empleado= request.session.id_empleado;

    Proyecto.deleteEtiqueta(request.body.nombre)
        .then(() => {
            response.status(303).redirect('/proyectos/main');
            console.log("etiqueta elimin");
        })
        .catch(err => {
            console.log(err);
            response.render('error.ejs', {
                isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
            });
        });
};   */