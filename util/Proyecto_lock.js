
module.exports = (request, response, next) => {
    if (request.session.privilegios.indexOf('Crear proyecto') == -1) {
        return response.redirect('/proyectos/main');
    } 
    next();

}
