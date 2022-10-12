const bodyParser = require('body-parser');
const db = require('../util/database');

module.exports = class Colaboradores {

    constructor(un_nombre, una_contraseña, un_correo_electronico, una_disponibilidad, una_imagen) {
        this.nombre = un_nombre;
        this. contraseña = una_contraseña;
        this.correo_electronico = un_correo_electronico;
        this.disponibilidad = una_disponibilidad;
        this.imagen = una_imagen;

    }

    static fetchAll() {
        return db.execute('SELECT * FROM `empleados`');
    }

    static fetchOne(un_id) {
        return db.execute('SELECT * FROM empleados WHERE id_empleado = ?', [un_id]);
    }




}