const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class Usuario {

    constructor(un_username, un_password, un_nombre) {
        this.username = un_username;
        this.pasword = un_password;
        this.nombre = un_nombre;
    }

    save() {
        return bcrypt.hash(this.pasword, 12)
            .then((newPassword) => {
                return db.execute('INSERT INTO usuarios (username, password, nombre) VALUES (?, ?, ?)', [this.username, newPassword, this.nombre]);
            })
            .catch(err => {
                console.log("Error al cifrar el password");
            });
    }

    static fetchAll() {
        return db.execute('SELECT * FROM usuarios');
    }

    static fetchOne(a_username) {
        return db.execute('SELECT * FROM usuarios WHERE username = ?', [a_username]);
    }

}