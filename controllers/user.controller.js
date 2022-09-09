const path = require('path');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/user.model');

exports.getNew = (request, response, next) => {
    response.render(path.join('new.ejs'));
};

exports.postNew = (request, response, next) => {

    const usuario = new Usuario(request.body.username, request.body.password, request.body.nombre);
    usuario.save()
        .then(() => {
            response.status(303).redirect('/user/login');
        })
        .catch(err => {
            console.log(err);
            response.render('error.ejs');
        });
};

exports.getLogin = (request, response, next) => {
    response.render(path.join('login.ejs'), {
        isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
    });
};

exports.getMain = (request, response, next) => {

    response.render(path.join('..',"views", "principal.ejs"));
};

exports.getProyectos = (request, response, next) => {

    response.render(path.join('..',"views", "proyectos.ejs"));
};

exports.getCrearProyecto = (request, response, next) => {

    response.render(path.join('..',"views", "CrearProyecto.ejs"));
};

exports.getEditarProyecto = (request, response, next) => {

    response.render(path.join('..',"views", "EditarProyecto.ejs"));
};

exports.getReportes = (request, response, next) => {

    response.render(path.join('..',"views", "reportes.ejs"));
};

exports.getCrearReporte = (request, response, next) => {

    response.render(path.join('..',"views", "CrearReportes.ejs"));
};

exports.getColaboradores = (request, response, next) => {

    response.render(path.join('..',"views", "colaboradores.ejs"));
};

exports.getTareas = (request, response, next) => {

    response.render(path.join('..',"views", "tareas.ejs"));
};

exports.postLogin = (request, response, next) => {
    
    return Usuario.fetchOne(request.body.username)
        .then(([rows, fielData]) => {
            if (rows.length == 1) {
                bcrypt.compare(request.body.password, rows[0].password)
                    .then(doMatch => {
                        if (doMatch) {
                            request.session.isLoggedIn = true;
                            request.session.user = rows[0].nombre;
                            return request.session.save(err => {
                                response.redirect('/user/main');
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