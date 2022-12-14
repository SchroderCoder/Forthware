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
        return db.execute('INSERT INTO proyectos (nombre, descripcion, stack_tecnologia, importancia, estatus, es_etiqueta, image_url, id_empleado) VALUES (?, ?, ?, ?, ?, ?, ?,?)', [this.nombre, this.descripcion, this.stack,this.importancia,this.un_estatus,this.etiqueta, this.imagen, this.id]);
    }

    static saveEtiqueta(un_nombre, un_bool) {
        return db.execute('INSERT INTO proyectos (nombre,es_etiqueta) VALUES (?,?)', [un_nombre,un_bool]);
    }

    static fetchColaboradores(){
        return db.execute('SELECT T.id_empleado,E.nombre,T.id_rol,R.descripcion FROM empleados E, tiene T, roles R WHERE e.id_empleado=T.id_empleado AND R.id_rol=T.id_rol AND E.id_empleado IN (SELECT id_empleado FROM tiene WHERE id_rol=1) ');
    }
    static fetchLideres(){
        return db.execute('SELECT T.id_empleado,E.nombre,T.id_rol,R.descripcion FROM empleados E, tiene T, roles R WHERE e.id_empleado=T.id_empleado AND R.id_rol=T.id_rol AND E.id_empleado IN (SELECT id_empleado FROM tiene WHERE id_rol=2) ');
    }

    static fetchAll() {
        return db.execute('SELECT * FROM proyectos P WHERE P.is_deleted= 0 ORDER BY nombre asc');
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

    static saveEdit_NoImage(proyecto) {
        return db.execute(
            'UPDATE proyectos SET nombre = ?, descripcion= ?, stack_tecnologia= ?, importancia =?, estatus= ?  WHERE id_proyecto = ?', 
            [proyecto.nombre, proyecto.descripcion,proyecto.stack_tecnologia,proyecto.importancia,proyecto.estatus,proyecto.id_proyecto]);
    }

    static fetchAllProyectos() {
        return db.execute('SELECT * FROM proyectos p WHERE p.is_deleted= 0 AND p.es_etiqueta= 0 GROUP BY id_proyecto ORDER BY id_proyecto DESC');
    }

    static fetchHorasProyectos() {
        return db.execute('SELECT P.nombre, P.id_proyecto, P.is_deleted, P.es_etiqueta, SUM(H.duracion) AS horas FROM horas_tarea H, tareas T, proyectos P WHERE P.id_proyecto = H.id_proyecto AND T.id_tarea = H.id_tarea AND P.is_deleted= 0 GROUP BY H.id_proyecto ORDER BY P.id_proyecto DESC');
    }
    

    static fetchAllEtiquetas() {
        return db.execute('SELECT * FROM proyectos p WHERE p.is_deleted= 0 AND p.es_etiqueta= 1 GROUP BY id_proyecto ORDER BY id_proyecto DESC');
    }

    static erase(un_id){
        return db.execute('UPDATE proyectos SET is_deleted = 1 WHERE id_proyecto = ?; ', [un_id]);
    }

    static borrar(un_id) {
        return db.execute('DELETE FROM proyectos WHERE id_proyecto = ?', [un_id]);
    }
            
    static fetchRecent() {
        return db.execute('SELECT MAX(id_proyecto) AS reciente FROM `proyectos`');
    }


    // main 

    static fetchProyectosImportancia() {
        return db.execute('SELECT * FROM proyectos p WHERE p.is_deleted= 0 AND p.es_etiqueta= 0 GROUP BY id_proyecto ORDER BY CASE WHEN importancia="Alto" THEN 1 WHEN importancia="Medio" THEN 2 ELSE 3 END, id_proyecto desc limit 6;');
    }

    static fetchProyectosHoras(un_id) {
        return db.execute('SELECT P.nombre, P.id_proyecto, P.is_deleted, P.es_etiqueta, SUM(H.duracion) AS horas FROM horas_tarea H, tareas T, proyectos P WHERE P.id_proyecto = H.id_proyecto AND T.id_tarea = H.id_tarea AND P.is_deleted= 0 AND P.id_proyecto= ? GROUP BY H.id_proyecto ORDER BY P.id_proyecto DESC', [un_id])
    }

    static fetchProyectosEmpleados(un_id) {
        return db.execute('SELECT E.nombre, E.id_empleado FROM empleados E, crea C WHERE E.id_empleado = C.id_empleado AND C.id_proyecto = ? order by E.NOMBRE ASC', [un_id])
    }
}