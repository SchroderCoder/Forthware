const db = require('../util/database');

module.exports = class Tarea {

    constructor(una_descripcion, una_duracion, id_proyecto, una_fecha) {
        this.descripcion = una_descripcion;
        this.duracion = una_duracion;
        this.id_proyecto = id_proyecto;
        this.fecha = una_fecha;
    }

    save() {
        return db.execute('INSERT INTO tareas (descripcion, duracion, id_proyecto, fecha_creacion) VALUES (?, ?, ?, ?)', [this.descripcion, this.duracion,this.id_proyecto,this.fecha]);
    }

    static fetchAll() {
        return db.execute('SELECT * FROM tareas');
    }

    static fetchOne(un_id) {
        return db.execute('SELECT * FROM tareas WHERE id_tarea = ?', [un_id]);
    }

}