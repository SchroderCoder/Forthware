module.exports = (request, response, next) => {
    if (!(request.session.roles == 'coordinador' || request.session.roles == 'lider')) {
        return response.redirect('/user/main');
    } 
    next();

}
