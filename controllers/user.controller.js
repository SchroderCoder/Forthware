const path = require('path');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/user.model');
const session = require('express-session');
const { request } = require('http');
const Proyecto = require('../models/proyecto.model');
const Tarea = require('../models/tarea.model');

exports.getNew = (request, response, next) => {
    response.render(path.join('new.ejs'), {
        isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
    });
};

exports.postNew = (request, response, next) => {
    const usuario = new Usuario(request.body.correo, request.body.password, request.body.nombre, request.body.disponibilidad, request.body.image);
    usuario.save()
        .then(() => {
            response.status(303).redirect('/user/login');
            console.log("usuario creado con exito");
        })
        .catch(err => {
            console.log(err);
            response.render('error.ejs', {
                isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
            });
        });
};

exports.getRol = (request, response, next) => {
    Usuario.fetchEmpleados()
        .then(([rows, fielData]) => {
            Usuario.fetchRol()
                .then(([cols, fielData]) => {
                    response.render(path.join('..',"views", "asignarRol.ejs"), {
                        empleados: rows,
                        roles: cols,
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

exports.postRol = (request, response, next) => {
    let rol = request.body.rol;
    let empleado = request.body.empleados;

    if(rol == 'Coordinador') {
        rol = 3;
    } 
    else if(rol == 'Lider') {
        rol = 2;
    }
    else if(rol == 'Colaborador') {
        rol = 1;
    }

    Usuario.changeRol(rol,empleado)
    .then(([]) => {
        response.redirect('/user/main');
    })
    .catch(err => {
        console.log(err);
        response.render('error.ejs', {
            isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
        });
    });
};

exports.getLogin = (request, response, next) => {
    let alert = request.session.alerta ? request.session.alerta : "";
    request.session.alerta = ""; 
    response.render(path.join('login.ejs'), {
        alert: alert,
        isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
    });
};

exports.getMain = (request, response, next) => {
    Proyecto.fetchProyectosImportancia()
    .then(([rows, fielData]) => {
        Usuario.fetchTareasMain(id_usuario)
        .then(([cols, fielData]) => {
        response.render(path.join('..',"views", "main.ejs"), {
            proyectos: rows.slice(0,3),
            proyectos2: rows.slice(3,6),
            tareas: cols,
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

exports.postLogin = (request, response, next) => {
    
    return Usuario.fetchOne(request.body.correo)
        .then(([rows, fielData]) => {
            if (rows.length == 1) {
                request.session.isLoggedIn = true;
                request.session.user = rows[0].nombre; 
                nombreUsuario = request.session.user;                
                request.session.id_empleado= rows[0].id_empleado;
                idUsuario= request.session.id_empleado;
                request.session.image = rows[0].image_url;
                imagenUsuario = request.session.image;
                bcrypt.compare(request.body.password, rows[0].contraseña)
                    .then(doMatch => {
                        if (doMatch) {
                            return request.session.save(err => {
                                //Obtener los permisos del usuario
                                Usuario.getPermisos(rows[0].id_empleado)
                                    .then(([consulta_privilegios, fielData]) => {
                                        //Guardar los permisos en una variable de sesión
                                        request.session.privilegios = [];
                                        for(let privilegio of consulta_privilegios) {
                                            request.session.privilegios.push(privilegio.descripcion);
                                        }
                                        response.redirect('/user/main');
                                    })
                                    .catch(err => {
                                        console.log(err);
                                        response.render('error.ejs', {
                                            isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
                                        });
                                    });
                                
                                    Usuario.getRol(rows[0].id_empleado)	
                                    .then(([consulta_roles, fielData]) => {  	
                                        request.session.roles = ""; 	
                                        request.session.roles = consulta_roles[0].descripcion;
                                        rolUsuario= request.session.roles;                                                                 	
                                    })	
                                    .catch(err => {	
                                        console.log(err);	
                                        response.render('error.ejs', {	
                                            isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,	
                                        });	
                                    });
                            });
                        } else {
                            request.session.alerta = "El usuario o contraseña no existe";
                            return response.redirect('/user/login');
                        }
                    }).catch(err => {
                        console.log(err);
                        return response.render("error.ejs", {
                            isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
                        });
                    });
            } else {
                request.session.alerta = "El usuario o contraseña no existe";   
                return response.render("error.ejs", {
                    isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
                });
            }
        })
        .catch(err => {
            console.log(err);
            return response.render("error.ejs", {
                isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
            });
        });

};

exports.logout = (request, response, next) => {

    request.session.destroy(() => {
        response.redirect('/user/login'); 
    });

    
};
