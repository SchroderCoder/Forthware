const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class Rol {

    constructor(un_username, un_password, un_nombre) {
        this.rol = un_rol
        this.descripcion = una_descripcion
    }

    save() {
        return bcrypt.hash(this.pasword, 12)
            .then(() => {
                return db.execute('INSERT INTO roles (id_rol, descripcion) VALUES (?, ?)', [this.rol, this.descripcion]);
            })
            .catch(err => {
                console.log("Error al cifrar el password");
            });
    }

    static fetchAll() {
        return db.execute('SELECT * FROM roles ');
    }

    static fetchOne(un_rol) {
        return db.execute('SELECT * FROM roles WHERE id_rol = ?', [un_rol]);
    }

}