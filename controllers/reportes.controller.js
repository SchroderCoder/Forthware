const path = require('path');
const session = require('express-session');
const Reporte = require('../models/reporte.model');
const Proyecto = require('../models/proyecto.model');
const PDF = require('pdfkit-table');
const fs = require('fs');
const database = require('../util/database');
const { ClientRequest } = require('http');

exports.getReportes = (request, response, next) => {
    Reporte.fetchAll()
    .then(([rows, fielData]) => {
        Reporte.fetchEfectividad()
        .then(([cols, fielData]) => {
        let alert = request.session.alerta ? request.session.alerta : "";
        request.session.alerta = ""; 
            response.render(path.join('..',"views", "reportes.ejs"), {
                alert: alert,
                reportes: rows,
                efectividad:cols.reverse(),
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

    var nombreArray = []
    var horasArray = []

    let datas = new Array();

    for (let a of request.body.asignaciones){

        
        datas.push({
            proyects: a.nombre,
            hours: a.horas
        });
    }


    const reporte = new Reporte(request.body.fecha_inicio, request.body.fecha_fin, request.body.efectividadaj, request.body.horastotales, request.body.total, request.body.horasausencia, request.body.efectividad, idUsuario, '/pdf/reporte' + request.body.fecha_inicio + "-" + request.body.fecha_fin + '.pdf');
    reporte.save()
        .then(() => {
    
            let doc = new PDF({margin: 30, size: 'A4'});

                doc.pipe(fs.createWriteStream(__dirname + '/../public/pdf/reporte' + request.body.fecha_inicio + "-" + request.body.fecha_fin + '.pdf'));
                
                doc.image('./public/media/natgas-logo-simple.png', {
                    scale: 0.1,
                    align: 'left'
                });
                
                doc.text('Nat Dev' , {
                    align: 'right'
                });

                doc.text('REPORTE DE EFECTIVIDAD' , {
                    align: 'center'
                });

                var fechas = request.body.fecha_inicio + "  -  " + request.body.fecha_fin; 

                doc.text(fechas , {
                    align: 'center'
                });
                
                doc.moveDown();

                var parrafo = 'Colaboradores:';

                var parrafo2 = 'Tiempo Completo: ' + request.body.tiempocompleto; 
                
                var parrafo3 = 'Tiempo Medio: ' + request.body.tiempomedio; 

                doc.text(parrafo, {
                    columns: 1,
                    align: 'justify'
                });

                doc.moveDown();

                doc.text(parrafo2, {
                    columns: 1,
                    align: 'justify'
                });

                doc.moveDown();

                doc.text(parrafo3, {
                    columns: 1,
                    align: 'justify'
                });

                doc.moveDown();

                ;(async function(){
                    // table
                    const table = {
                      headers: [
                        { label: "Proyectos", property: 'proyects', width: 120, align:'center', renderer: null },
                        { label: "Horas hombre", property: 'hours', width: 150, align:'center', renderer: null,
                          renderer: (value, indexColumn, indexRow, row, rectRow, rectCell) => { return value} 
                        },
                      ],
                      // complex data
                      datas: datas,
                        //[{atributo: valor, atributo2: valor2}, {atributo: valor, atributo2: valor2}]
                    };
                    doc.table(table, {
                    
                      prepareHeader: () => doc.font("Helvetica-Bold").fontSize(10),
                      prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
                        doc.font("Helvetica").fontSize(10);
                        indexColumn === 0 && doc.addBackground(rectRow, 'green', 0.15);
                      },
                    });

                })();

                doc.moveDown();

                ;(async function(){
                    // table
                    const table = {
                      headers: [
                        { label: "Resumen", property: 'Resumen', width: 60, renderer: null },
                        { label: "Horas", property: 'Horas', width: 150, renderer: null,
                          renderer: (value, indexColumn, indexRow, row, rectRow, rectCell) => { return value} 
                        },
                      ],
                      // complex data
                      datas: [
                        { 
                          Resumen: 'Horas totales de Tiempo Completo', 
                          Horas: request.body.horastotalescompleto, 
                        },
                        { 
                          Resumen: 'Horas totales de Tiempo Medio', 
                          Horas: request.body.horastotalesmedio, 
                        },
                        { 
                            Resumen: 'Horas totales', 
                            Horas: request.body.horastotales, 
                        },
                        { 
                            Resumen: 'Horas de ausencia', 
                            Horas: request.body.horasausencia, 
                        },
                        { 
                            Resumen: 'Horas h??biles', 
                            Horas: request.body.horasesperadas, 
                        },
                        { 
                            Resumen: 'Porcentaje de efectividad', 
                            Horas: request.body.efectividad, 
                        },
                      ],
                    };
                    doc.table(table, {
                      prepareHeader: () => doc.font("Helvetica-Bold").fontSize(10),
                      prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
                        doc.font("Helvetica").fontSize(10);
                        indexColumn === 0 && doc.addBackground(rectRow, 'green', 0.15);
                      },
                    });

                })();

                doc.moveDown();
                doc.moveDown();

                doc.text('Porcentaje de efectividad ajustada: ', {
                    align: 'center'
                })
                .fillColor('green')
                .text(request.body.efectividadaj + '%', {
                    align: 'center'
                })
                ;

                doc.end();

            privilegios: request.session.privilegios
            request.session.alerta = "Reporte: "+ request.body.fecha_inicio + " / "+ request.body.fecha_fin + " creado con ??xito!";
            response.status(200).json({mensaje: 'pdf generado'});
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
            privilegios: request.session.privilegios
            response.status(200).json({proyectos: rows});
        })
        .catch(err => { 
            console.log(err);
            response.status(500).json({message: "ERROR 500"});
        });
};

exports.postCompleto = (request, response, next) => {
    privilegios: request.session.privilegios
    response.status(200).json({completos: request.body});
};

exports.postHorasHombre = (request, response, next) => {
    privilegios: request.session.privilegios
    response.status(200).json({horasHombre: request.body});
};

exports.getDeleteReporte = (request, response, next) => {
    Reporte.erase(request.params.id)
    .then(([]) => {
        privilegios: request.session.privilegios
        request.session.alerta = "Reporte eliminado con ??xito!";
        response.redirect('/reportes/main');
    })  
    .catch(err => {
        console.log(err);
        response.render('error.ejs', {
            isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
        });
    }); 
};
