
module.exports = (request, response, next) => {
    if (!( request.params.roles == 'coordinador')) {
        return response.redirect('/user/main');
    } 
    next();

}
