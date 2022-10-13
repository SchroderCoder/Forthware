const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class Usuario {

    constructor(un_correo, un_password, un_nombre, una_disponibilidad, una_imagen) {
        this.correo = un_correo;
        this.password = un_password;
        this.nombre = un_nombre;
        this.disponibilidad = una_disponibilidad;
        this.imagen = una_imagen;
    }

    


    save() {
        return bcrypt.hash(this.password, 12)
            .then((newPassword) => {
                return db.execute('INSERT INTO empleados (nombre, contraseña, correo_electronico, disponibilidad, image_url) VALUES (?, ?, ?, ?, ?)', 
                [this.nombre, newPassword, this.correo, this.disponibilidad, this.imagen]);
            })
            .catch(err => {
                console.log("Error al cifrar el password");
            });
    }

    static fetchAll() {
        return db.execute('SELECT * FROM empleados order by nombre ASC');
    }

    static fetchOne(a_correo) {
        return db.execute('SELECT * FROM empleados WHERE correo_electronico = ?', [a_correo]);
    }

    static fetchEmpleados() {
        return db.execute('SELECT nombre FROM empleados');
    }

    static fetchId() {
        return db.execute('SELECT id_empleado FROM empleados');
    }

    static fetchRol() {
        return db.execute('SELECT descripcion FROM roles');
    }

    static getPermisos(a_empleado) {
        return db.execute('SELECT pri.descripcion FROM posee p, roles r, privilegios pri WHERE p.id_rol = r.id_rol AND pri.id_privilegio = p.id_privilegio AND r.id_rol = (SELECT t.id_rol FROM tiene t WHERE t.id_empleado = ?)', [a_empleado]) ;
        
    }

    static getRol(a_rol) {
        return db.execute('SELECT descripcion FROM roles r, tiene t WHERE r.id_rol = t.id_rol AND t.id_empleado = ?', [a_rol]);
    }

    static changeRol(ch_rol, ch_name) {
        return db.execute('UPDATE tiene SET id_rol = ? WHERE id_empleado = (SELECT e.id_empleado FROM empleados e WHERE e.nombre = ?)', [ch_rol, ch_name]);
    }

        // main 

        static fetchTareasMain(a_empleado) {
            return db.execute('SELECT * FROM tareas T, realiza R where T.id_tarea=R.id_tarea AND id_empleado= 1 AND is_deleted=0 order by fecha_creacion desc LIMIT 4;');
        }

}