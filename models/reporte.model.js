const bodyParser = require('body-parser');
const db = require('../util/database');

module.exports = class Reporte {

    constructor(una_fecha_inicio, una_fecha_fin, una_efectividad, unas_horas_base, unas_horas_hombre, unas_horas_ausencia, una_proporcion_horas, un_id_empleado) {
        this.fecha_inicio = una_fecha_inicio;
        this.fecha_fin = una_fecha_fin;
        this.efectividad = una_efectividad;
        this.horas_base = unas_horas_base;
        this.horas_hombre = unas_horas_hombre;
        this.horas_ausencia = unas_horas_ausencia;
        this.proporcion_horas = una_proporcion_horas;
        this.id_empleado = un_id_empleado;
    }

    save() {
        return db.execute('INSERT INTO reportes (fecha_inicio, fecha_fin, efectividad, horas_base, horas_hombre, horas_ausencia, proporcion_horas, id_empleado) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', 
        [this.fecha_inicio, this.fecha_fin, this.efectividad, this.horas_base, this.horas_hombre, this.horas_ausencia, this.proporcion_horas, this.id_empleado]);
    }

    static fetchAll() {
        return db.execute('SELECT * FROM `reportes` ORDER BY id_reporte DESC LIMIT 3');
    }

    static fetchOne(un_id) {
        return db.execute('SELECT * FROM reportes WHERE id_reporte = ?', [un_id]);
    }

    static getHoras_proyectos(fechainicio, fechafin) {
        return db.execute('SELECT P.nombre, SUM(T.duracion) AS horas FROM horas_tarea T, proyectos P WHERE P.id_proyecto = T.id_proyecto AND P.is_deleted= 0   GROUP BY T.id_proyecto',
        [fechainicio, fechafin]);
    }

    static erase(un_id){
        return db.execute('UPDATE reportes SET is_deleted = 1 WHERE id_reporte = ?', [un_id]);
    }


}