
module.exports = (request, response, next) => {             
    if (request.session.privilegios.indexOf('Generar reporte') == -1) {
        return response.redirect('/user/main');
    } 
    next();

}