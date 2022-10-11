const path = require('path');
const session = require('express-session');
const Reporte = require('../models/reporte.model');
const Proyecto = require('../models/proyecto.model');
const PDF = require('pdfkit-table');
const fs = require('fs');

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
    console.log(request.body);

    const reporte = new Reporte(request.body.fecha_inicio, request.body.fecha_fin, request.body.efectividad, request.body.horastotales, request.body.suma, request.body.horasausencia, request.body.efectividadA, 2, '/pdf/reporte' + request.body.fecha_inicio + "-" + request.body.fecha_fin + '.pdf');
    reporte.save()
        .then(() => {
            Reporte.getHoras_proyectos(request.body.fecha_inicio, request.body.fecha_fin)
            .then(([rows,fielData]) => {
                console.log(rows);
            })

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

                var parrafo2 = 'Tiempo Completo: ' + request.body.completo; 
                
                var parrafo3 = 'Tiempo Medio: ' + request.body.medio; 

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
                        { label: "Proyectos", property: 'proyects', width: 60, renderer: null },
                        { label: "Horas hombre", property: 'hours', width: 150, renderer: null,
                          renderer: (value, indexColumn, indexRow, row, rectRow, rectCell) => { return value} 
                        },
                      ],
                      // complex data
                      datas: [
                        { 
                          proyects: 'bold:Altair', 
                          hours: '80', 
                        },
                        { 
                          proyects: 'bold:Oasis', 
                          hours: '55', 
                        },
                        { 
                            proyects: 'bold:Argos', 
                            hours: '77', 
                        },
                        { 
                            proyects: 'bold:Poseidon', 
                            hours: '39', 
                        },
                        // {...},
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
                          Horas: request.body.horas_completos, 
                        },
                        { 
                          Resumen: 'Horas totales de Tiempo Medio', 
                          Horas: request.body.horas_medios, 
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
                            Resumen: 'Horas hábiles', 
                            Horas: request.body.horasesperadas, 
                        },
                        { 
                            Resumen: 'Porcentaje de efectividad', 
                            Horas: request.body.efectividad, 
                        },
                        // {...},
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
                .text(request.body.efectividadA + '%', {
                    align: 'center'
                })
                ;

                doc.end();
            
            console.log('pdf generado');
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
