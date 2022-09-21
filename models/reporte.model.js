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
        return db.execute('SELECT * FROM reportes');
    }


}