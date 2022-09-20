
module.exports = (request, response, next) => {
    if (!( request.params.roles == 'coordinador' ||  request.params.roles == 'lider')) {
        return response.redirect('/user/main');
    } 
    next();

}
