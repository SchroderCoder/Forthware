const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class Proyecto {

    constructor(un_nombre, una_descripcion, un_stack, una_importancia, un_estatus, es_etiqueta, una_imagen, un_id) {
        this.nombre = un_nombre;
        this.descripcion = una_descripcion;
        this.stack = un_stack;
        this.importancia = una_importancia;
        this.un_estatus = un_estatus;
        this.etiqueta = es_etiqueta;
        this.imagen = una_imagen;
        this.id = un_id;
    }

    save() {
        return db.execute('INSERT INTO proyectos (nombre, descripcion, stack_tecnologia, importancia, estatus, es_etiqueta, image_url, id_empleado) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [this.nombre, this.descripcion, this.stack,this.importancia,this.un_estatus,this.etiqueta, this.imagen,this.id]);
    }

    static fetchAll() {
        return db.execute('SELECT * FROM proyectos');
    }

    static fetchOne(un_id) {
        return db.execute('SELECT * FROM proyectos WHERE id_proyecto = ?', [un_id]);
    }

}