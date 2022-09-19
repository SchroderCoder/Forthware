
module.exports = (request, response, next) => {
    if (!( request.session.roles == 'coordinador')) {
        return response.redirect('/user/main');
    } 
    next();

}
