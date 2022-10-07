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
                    .then(() => {
                    })
                    .catch(err => {
                        console.log(err);
                        response.render('error.ejs', {
                            isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
                        });
                    });
                }

                let doc = new PDF({margin: 30, size: 'A4'});

                doc.pipe(fs.createWriteStream(__dirname + '/../public/pdf/reporte' + request.body.descripcion + '.pdf'));
                
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

                doc.text('FECHA1 - FECHA2' , {
                    align: 'center'
                });
                
                doc.moveDown();

                var parrafo = 'Colaboradores:';

                var parrafo2 = 'Tiempo Completo: ' + 11; 
                
                var parrafo3 = 'Tiempo Medio: ' + 9; 

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
                          Horas: '385', 
                        },
                        { 
                          Resumen: 'Horas totales de Tiempo Medio', 
                          Horas: '117', 
                        },
                        { 
                            Resumen: 'Horas totales', 
                            Horas: '502', 
                        },
                        { 
                            Resumen: 'Horas de ausencia', 
                            Horas: '50', 
                        },
                        { 
                            Resumen: 'Horas hábiles', 
                            Horas: '452', 
                        },
                        { 
                            Resumen: 'Porcentaje de efectividad', 
                            Horas: '0.76', 
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
                .text(92 + '%', {
                    align: 'center'
                })
                ;

                doc.end();
                

        
                response.status(303).redirect('/tareas/main');
                console.log("tarea creada con exito");
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
                })
                .catch(err => {
                    console.log(err);
                    response.render('error.ejs', {
                        isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
                    });
                });
            }
            
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
        console.log("Tarea eliminada con éxito");
        response.redirect('/tareas/main');
    })  
    .catch(err => {
        console.log(err);
        response.render('error.ejs', {
            isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
        });
    }); 
}   
