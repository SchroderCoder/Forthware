const db = require('../util/database');

module.exports = class Crea {

    constructor(id_empleado, id_proyecto) {
        this.id_empleado = id_empleado;
        this.id_proyecto = id_proyecto;
    }

    
    
    static registrar(id_empleado,id_proyecto) {
        return db.execute('INSERT INTO crea (id_empleado, id_proyecto) VALUES (?, ?)', [id_empleado,id_proyecto]);
    }
    
    static eliminar(id_empleado,id_proyecto) {
        return db.execute('DELETE FROM `crea` WHERE crea.id_empleado = ? AND crea.id_proyecto = ?', [id_empleado, id_proyecto]);
    }

    static fetchAll() {
        return db.execute('SELECT * FROM Realiza');
    }

    static fetchRegistrados(un_id) {
        return db.execute('SELECT E.nombre, E.id_empleado FROM empleados E, crea C WHERE E.id_empleado = C.id_empleado AND C.id_proyecto = ?', [un_id]);
    }
    
    static fetchNoRegistrados(un_id) {
        return db.execute('SELECT E.nombre, E.id_empleado FROM empleados E WHERE E.id_empleado NOT IN (SELECT E.id_empleado FROM empleados E, crea C WHERE E.id_empleado = C.id_empleado AND C.id_proyecto = ?) ', [un_id]);
    }

}