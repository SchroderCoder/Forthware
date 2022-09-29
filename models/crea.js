const db = require('../util/database');

module.exports = class Crea {

    constructor(id_empleado, id_proyecto) {
        this.id_empleado = id_empleado;
        this.id_proyecto = id_proyecto;
    }

    
    
    static registrar(id_empleado,id_proyecto) {
        return db.execute('INSERT INTO Realiza (id_empleado, id_tarea) VALUES (?, ?)', [id_empleado,id_proyecto]);
    }
    
    static eliminar(id_empleado,id_proyecto) {
        return db.execute('DELETE FROM `crea` WHERE `crea`.`id_empleado` = ? AND `crea`.`id_proyecto` = ?', [id_empleado, id_proyecto]);
    }

    static fetchAll() {
        return db.execute('SELECT * FROM Realiza');
    }

    static fetchRegistrados(un_id) {
        return db.execute('SELECT nombre FROM empleados, crea WHERE empleados.id_empleado = crea.id_empleado AND id_proyecto = ?', [un_id]);
    }

    static fetchNoRegistrados(un_id) {
        return db.execute('SELECT nombre FROM empleados, crea WHERE empleados.id_empleado = crea.id_empleado AND NOT id_proyecto = ?', [un_id]);
    }



}