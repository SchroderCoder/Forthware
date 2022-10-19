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
        return db.execute('SELECT t.id_tarea, t.fecha_creacion , t.descripcion, t.duracion, t.id_proyecto, p.nombre FROM tareas t, proyectos p WHERE t.id_proyecto = p.id_proyecto AND t.is_deleted= 0 GROUP BY id_tarea ORDER BY id_tarea DESC');
    }

    static fetchOne(un_id) {
        return db.execute('SELECT * FROM tareas WHERE id_tarea = ?', [un_id]);
    }

    static fetchRecent() {
        return db.execute('SELECT MAX(id_tarea) AS reciente FROM `tareas` ');
    }

    static saveEdit(tarea) {
        return db.execute(
            'UPDATE tareas SET fecha_creacion = ?, descripcion= ?, id_proyecto= ?, duracion= ? WHERE id_tarea = ?', 
            [tarea.fecha_creacion, tarea.descripcion, tarea.id_proyecto ,tarea.duracion, tarea.id_tarea]);
    }

    static erase(un_id) {
        return db.execute('UPDATE tareas SET is_deleted = 1 WHERE id_tarea = ?;', [un_id]);
    }


    static fetchTareasEmpleados(un_id) {
        return db.execute('SELECT E.nombre FROM empleados E , realiza R WHERE R.id_empleado = E.id_empleado AND R.id_tarea = ?', [un_id]);
    }

    static find(valor) {
                return db.execute('SELECT * FROM tareas WHERE descripcion like ? OR fecha_creacion like ? ORDER BY id_tarea DESC', ['%' + valor + '%', '%' + valor + '%']);
            }

}