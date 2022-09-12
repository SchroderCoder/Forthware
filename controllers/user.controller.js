const path = require('path');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/user.model');
const isRol = require('../util/isRol');
const { changeRol } = require('../models/user.model');

exports.getNew = (request, response, next) => {
    response.render(path.join('new.ejs'));
};

exports.postNew = (request, response, next) => {
    const usuario = new Usuario(request.body.correo, request.body.password, request.body.nombre, request.body.disponibilidad, request.body.image);
    usuario.save()
        .then(() => {
            response.status(303).redirect('/user/login');
        })
        .catch(err => {
            console.log(err);
            response.render('error.ejs');
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
                    });
                })
                .catch(err => {
                    console.log('no salio cols');
                    response.render('error.ejs');
                });
        })
        .catch(err => {
            console.log('no salio');
            response.render('error.ejs');
        });
};

exports.postRol = (request, response, next) => {
    let rol = request.body.rol;
    let empleado = request.body.empleados;

    if(rol == 'coordinador') {
        rol = 3;
    } 
    else if(rol == 'lider') {
        rol = 2;
    }
    else if(rol == 'colaborador') {
        rol = 1;
    }

    Usuario.changeRol(rol,empleado)
    .then(([]) => {
        console.log('Rol ha sido cambiado');
        response.redirect('/user/main');
    })
    .catch(err => {
        console.log('no salio cols');
        response.render('error.ejs');
    });
};

exports.getLogin = (request, response, next) => {
    response.render(path.join('login.ejs'), {
        isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
    });
};

exports.getMain = (request, response, next) => {
    console.log(request.session.privilegios);
    response.render(path.join('..',"views", "principal.ejs"), {
        privilegios: request.session.privilegios,
    });
};

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

exports.getEditarProyecto = (request, response, next) => {

    response.render(path.join('..',"views", "EditarProyecto.ejs"), {
        privilegios: request.session.privilegios,
    });
};

exports.getReportes = (request, response, next) => {

    response.render(path.join('..',"views", "reportes.ejs"), {
        privilegios: request.session.privilegios,
    });
};

exports.getCrearReporte = (request, response, next) => {

    response.render(path.join('..',"views", "CrearReporte.ejs"), {
        privilegios: request.session.privilegios,
    });
};

exports.getColaboradores = (request, response, next) => {

    response.render(path.join('..',"views", "colaboradores.ejs"), {
        privilegios: request.session.privilegios,
    });
};

exports.getTareas = (request, response, next) => {

    response.render(path.join('..',"views", "tareas.ejs"), {
        privilegios: request.session.privilegios,
    });
};

exports.postLogin = (request, response, next) => {
    
    return Usuario.fetchOne(request.body.correo)
        .then(([rows, fielData]) => {
            if (rows.length == 1) {
                bcrypt.compare(request.body.password, rows[0].contraseña)
                    .then(doMatch => {
                        if (doMatch) {
                            request.session.isLoggedIn = true;
                            request.session.user = rows[0].nombre;
                            return request.session.save(err => {
                                //Obtener los permisos del usuario
                                console.log(rows[0].id_empleado)
                                Usuario.getPermisos(rows[0].id_empleado)

                                    .then(([consulta_privilegios, fielData]) => {
                                        //Guardar los permisos en una variable de sesión
                                        request.session.privilegios = [];
                                        for(let privilegio of consulta_privilegios) {
                                            request.session.privilegios.push(privilegio.descripcion);
                                        }
                                        Usuario.getRol(rows[0].id_empleado)
                                            .then(([consulta_roles, fielData]) => {
                                                request.session.roles = "";
                                                
                                                request.session.roles = consulta_roles[0].descripcion;
                                                console.log(request.session.roles);
                                                
                                            })
                                            .catch(console.log('sirve'));
                                        response.redirect('/user/main');
                                    })
                                    .catch();
                                
                                
                                
                                
                            });
                        } else {
                            console.log("El usuario o contraseña no existe");
                            return response.redirect('/user/login');
                        }
                    }).catch(err => {
                        console.log(err);
                        return response.render("error.ejs", {
                            isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
                        });
                    });
            } else {
                console.log("El usuario o contraseña no existe");
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