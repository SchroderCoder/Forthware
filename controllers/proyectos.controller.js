const path = require('path');
const session = require('express-session');
const Proyecto = require('../models/proyecto.model');
const { fetchColaboradores, fetchLideres } = require('../models/proyecto.model');

exports.getProyectos = (request, response, next) => {
    
    Proyecto.fetchAllProyectos()
    .then(([rows, fielData]) => {
        Proyecto.fetchAllEtiquetas()
        .then(([cols, fielData]) => {
            response.render(path.join('..',"views", "proyectos.ejs"), {
                proyectos: rows,
                etiquetas: cols,
                privilegios: request.session.privilegios,
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
    
};

exports.getCrearProyecto = (request, response, next) => {
    let colaboradores = fetchColaboradores;
    let lideres = fetchLideres;
    // <const importancia = ['Alto','Medio','Bajo'];
    // const estatus = ['']>
    response.render(path.join('..',"views", "CrearProyecto.ejs"), {
        privilegios: request.session.privilegios,
        proyectos: "",
        titulo: "Crear Proyecto", 
        es_etiqueta: "¿Es etiqueta?",
        
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
            response.render('error.ejs');
        });
};  


exports.getCrearEtiqueta = (request, response, next) => {

    response.render(path.join('..',"views", "CrearEtiqueta.ejs"), {
        privilegios: request.session.privilegios,
        proyectos: "",
        titulo: "Crear etiqueta",
    });
};

exports.postCrearEtiqueta = (request, response, next) => {
    id_empleado= request.session.id_empleado;

    saveEtiqueta(request.body.nombre,1 ,id_empleado)
        .then(() => {
            response.status(303).redirect('/proyectos/main');
            console.log("etiqueta creada con exito");
        })
        .catch(err => {
            console.log(err);
            response.render('error.ejs');
        });
};  

exports.getEditarProyecto = (request, response, next) => {
    Proyecto.fetchOne(request.params.id)
    .then(([rows, fielData]) => { 
        if (rows.length > 0) {
            response.render(path.join('..',"views", "CrearProyecto.ejs"), {
                proyectos: rows[0],
                titulo: "Editar proyecto " + rows[0].nombre,
                es_etiqueta: "",
            });
        } else {
            console.log("no existe el id del equipo");
            response.render('error.ejs', {
            });
        }
    })
    .catch(err => {
        console.log(err);
        response.render('error.ejs');
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
        
        console.log(rows[0].nombre);
        console.log(rows[0].descripcion);
        console.log(rows[0].stack_tecnologia);
        console.log(rows[0].importancia);
        console.log(rows[0].estatus);
        console.log(rows[0].image_url);
        console.log("xs");
        
        Proyecto.saveEdit(rows[0])
        .then(() => {
            response.status(303).redirect('/proyectos/main');
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
};


exports.getEditarEtiqueta = (request, response, next) => {
    Proyecto.fetchOne(request.params.id)
    .then(([rows, fielData]) => { 
        if (rows.length > 0) {
            response.render(path.join('..',"views", "CrearEtiqueta.ejs"), {
                proyectos: rows[0],
                titulo: "Editar etiqueta " + rows[0].nombre
            });
        } else {
            console.log("no existe el id del equipo");
            response.render('error.ejs', {
            });
        }
    })
    .catch(err => {
        console.log(err);
        response.render('error.ejs');
    });

};


exports.postEditarEtiqueta = (request, response, next) => {

    Proyecto.fetchOne(request.body.id)
    .then(([rows, fielData]) => {
        rows[0].nombre= request.body.nombre
        
        console.log(rows[0].nombre);
        
        Proyecto.saveEdit(rows[0])
        .then(() => {
            response.status(303).redirect('/proyectos/main');
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
};