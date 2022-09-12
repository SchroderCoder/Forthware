
module.exports = (request, response, next) => {
    if (!(request.session.roles == 'coordinador' || request.session.roles == 'lider')) {
        console.log(request.session.roles);
        return response.redirect('/user/main');
    } 
    next();

}
