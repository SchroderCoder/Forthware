const db = require('../util/database');

module.exports = class Realiza {

    constructor(id_empleado, id_tarea) {
        this.id_empleado = id_empleado;
        this.id_tarea = id_tarea;
    }

    
    static registrar(id_empleado,id_tarea) {
        return db.execute('INSERT INTO realiza (id_empleado, id_tarea) VALUES (?, ?)', [id_empleado,id_tarea]);
    }



    static fetchAll() {
        return db.execute('SELECT * FROM realiza');
    }

    static fetchOne(un_id) {
        return db.execute('SELECT * FROM realiza WHERE id_tarea = ?', [un_id]);
    }


}