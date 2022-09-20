const db = require('../util/database');

module.exports = class Realiza {

    constructor(id_empleado, id_tarea) {
        this.id_empleado = id_empleado;
        this.id_tarea = id_tarea;
    }

    // save(id_empleado) {

    //     for(let e of id_empleado){
    //         console.log(e);
    //         db.execute('INSERT INTO Realiza (id_empleado, id_tarea) VALUES (?, ?)', [e, this.id_tarea]);
    //     }
        
    //     return;
    // }
    
    static registrar(id_empleado,id_tarea) {
        return db.execute('INSERT INTO Realiza (id_empleado, id_tarea) VALUES (?, ?)', [id_empleado,id_tarea]);
    }

    static fetchAll() {
        return db.execute('SELECT * FROM Realiza');
    }

    static fetchOne(un_id) {
        return db.execute('SELECT * FROM Realiza WHERE id_tarea = ?', [un_id]);
    }

}