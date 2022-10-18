module.exports = (request, response, next) => {
    if (request.session.privilegios.indexOf('Administrar') == -1) {
        return response.redirect('/user/main');
    } 
    next();

}