const db = require('../util/database');

module.exports = class Realiza {

    constructor(id_empleado, id_tarea) {
        this.id_empleado = id_empleado;
        this.id_tarea = id_tarea;
    }

    
    static registrar(id_empleado,id_tarea) {
        return db.execute('INSERT INTO realiza (id_empleado, id_tarea) VALUES (?, ?)', [id_empleado,id_tarea]);
    }

    static eliminar(id_empleado,id_proyecto) {
        return db.execute('DELETE FROM `realiza` WHERE realiza.id_empleado = ? AND realiza.id_tarea = ?', [id_empleado, id_proyecto]);
    }


    static fetchAll() {
        return db.execute('SELECT * FROM realiza');
    }

    static fetchOne(un_id) {
        return db.execute('SELECT * FROM realiza WHERE id_tarea = ?', [un_id]);
    }

    static fetchRegistrados(un_id) {
        return db.execute('SELECT E.nombre, E.id_empleado FROM empleados E, realiza R WHERE E.id_empleado = R.id_empleado AND R.id_tarea = ?', [un_id]);
    }

    static fetchNoRegistrados(un_id) {
        return db.execute('SELECT E.nombre, E.id_empleado FROM empleados E WHERE E.id_empleado NOT IN (SELECT E.id_empleado FROM empleados E, realiza R WHERE E.id_empleado = R.id_empleado AND R.id_tarea = ?) ', [un_id]);
    }

}