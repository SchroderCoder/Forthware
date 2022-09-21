const db = require('../util/database');


module.exports = class Proyecto {

    constructor(un_nombre, una_descripcion, un_stack, una_importancia, un_estatus, es_etiqueta, una_imagen, un_id) {
        this.nombre = un_nombre;
        this.descripcion = una_descripcion;
        this.stack = un_stack;
        this.importancia = una_importancia;
        this.un_estatus = un_estatus;
        this.etiqueta = es_etiqueta;
        this.imagen = una_imagen;
        this.id = un_id;
    }

    save() {
        return db.execute('INSERT INTO proyectos (nombre, descripcion, stack_tecnologia, importancia, estatus, es_etiqueta, image_url, id_empleado) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [this.nombre, this.descripcion, this.stack,this.importancia,this.un_estatus,this.etiqueta, this.imagen,this.id]);
    }

    static saveEtiqueta(un_nombre, un_bool, un_id) {
        return db.execute('INSERT INTO proyectos (nombre,es_etiqueta,id_empleado) VALUES (?,?,?)', [un_nombre,un_bool,un_id]);
    }

    static fetchColaboradores(){
        return db.execute('SELECT T.id_empleado,E.nombre,T.id_rol,R.descripcion FROM empleados E, tiene T, roles R WHERE e.id_empleado=T.id_empleado AND R.id_rol=T.id_rol AND E.id_empleado IN (SELECT id_empleado FROM tiene WHERE id_rol=1) ');
    }
    static fetchLideres(){
        return db.execute('SELECT T.id_empleado,E.nombre,T.id_rol,R.descripcion FROM empleados E, tiene T, roles R WHERE e.id_empleado=T.id_empleado AND R.id_rol=T.id_rol AND E.id_empleado IN (SELECT id_empleado FROM tiene WHERE id_rol=2) ');
    }

    static fetchAll() {
        return db.execute('SELECT * FROM proyectos');
    }

    static fetchOne(un_id) {
        return db.execute('SELECT * FROM proyectos WHERE id_proyecto = ?', [un_id]);
    }

    static fetchId(un_nombre) {
        return db.execute('SELECT id_proyecto FROM proyectos WHERE proyectos.nombre = ?', [un_nombre]);
    }

    static saveEdit(proyecto) {
        return db.execute(
            'UPDATE proyectos SET nombre = ?, descripcion= ?, stack_tecnologia= ?, importancia =?, estatus= ?, image_url= ? WHERE id_proyecto = ?', 
            [proyecto.nombre, proyecto.descripcion,proyecto.stack_tecnologia,proyecto.importancia,proyecto.estatus,proyecto.image_url,proyecto.id_proyecto]);
    }

    static fetchAllProyectos() {
        return db.execute('SELECT * FROM proyectos WHERE es_etiqueta = 0');
    }

    static fetchAllEtiquetas() {
        return db.execute('SELECT * FROM proyectos WHERE es_etiqueta = 1');
    }
            
}