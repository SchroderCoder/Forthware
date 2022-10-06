const path = require('path');
const session = require('express-session');
const Reporte = require('../models/reporte.model');
const Proyecto = require('../models/proyecto.model');

exports.getReportes = (request, response, next) => {


    Reporte.fetchAll()
    .then(([rows, fielData]) => {
        response.render(path.join('..',"views", "reportes.ejs"), {
            reportes: rows,
            privilegios: request.session.privilegios,
            isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
        });

    })
    .catch(err => {
        console.log(err);
        response.render('error.ejs', {
            isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
        });
    })

};

exports.getCrearReporte = (request, response, next) => {

        response.render(path.join('..',"views", "CrearReporte.ejs"), {
            privilegios: request.session.privilegios,
            isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
        });


};

exports.postCrearReporte = (request, response, next) => {
    console.log(request.body.proyectos);
    console.log(request.body.efectividad);
    console.log(request.body.horas_base);
    console.log(request.body.horas_ausencia);

    id_empleado= request.session.id_empleado;
    const reporte = new Reporte(request.body.fecha_inicio, request.body.fecha_fin, request.body.efectividad, 350, request.body.horas_base, request.body.horas_ausencia, .76, 2);
    reporte.save()
        .then(() => {
            Reporte.getHoras_proyectos(request.body.fecha_inicio, request.body.fecha_fin)
            .then(([rows,fielData]) => {
                console.log(rows);
            })

            var doc = new PDF();

            doc.pipe(fs.createWriteStream(__dirname + '/public/pdf/reporte' + request.session.id_reporte + '.pdf'));
            
            doc.text('Reporte semanal Natdev' , {
                align: 'center'
            });
            
            var parrafo = 'Este es un documento PDF'; 
            
            doc.image('./public/media/natgas-logo-simple.png', {
                scale: 0.1
            });
            
            doc.text(parrafo, {
                columns: 1,
                align: 'justify'
            });
            
            doc.end();
            
            console.log('Archivo Generado');
            response.status(303).redirect('/reportes/main');
            console.log("reporte creado con exito");
        })
        .catch(err => {
            console.log(err);
            response.render('error.ejs', {
                isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
            });
        });

};

exports.postBuscar = (request, response, next) => {
    Reporte.getHoras_proyectos(request.body.fecha_inicio, request.body.fecha_fin)
        .then(([rows, fieldData]) => {
            response.status(200).json({proyectos: rows});
        })
        .catch(err => { 
            console.log(err);
            response.status(500).json({message: "ERROR 500"});
        });
};

exports.postCompleto = (request, response, next) => {
    console.log(request.body)
    response.status(200).json({completos: request.body});
};

exports.postHorasHombre = (request, response, next) => {
    console.log(request.body)
    response.status(200).json({horasHombre: request.body});
};

exports.getDeleteReporte = (request, response, next) => {
    console.log(request.params.id);
    Reporte.erase(request.params.id)
    .then(([]) => {
        console.log("Reporte eliminado con éxito");
        response.redirect('/reportes/main');
    })  
    .catch(err => {
        console.log(err);
        response.render('error.ejs', {
            isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
        });
    }); 
};
