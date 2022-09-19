const db = require('../util/database');

module.exports = class Realiza {

    constructor(id_empleado, id_tarea) {
        this.id_empleado = id_empleado;
        this.id_tarea = id_tarea;
    }

    save() {
        return db.execute('INSERT INTO Realiza (id_empleado, id_tarea) VALUES (?, ?)', [this.id_empleado, this.id_tarea]);
    }

    static fetchAll() {
        return db.execute('SELECT * FROM Realiza');
    }

    static fetchOne(un_id) {
        return db.execute('SELECT * FROM Realiza WHERE id_tarea = ?', [un_id]);
    }

    static fetchRecent() {
        return db.execute('SELECT MAX(id_tarea) AS reciente FROM "tareas" ');
    }

}