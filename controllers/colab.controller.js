const path = require('path');
const session = require('express-session');


exports.getColaboradores = (request, response, next) => {

    response.render(path.join('..',"views", "colaboradores.ejs"), {
        privilegios: request.session.privilegios,
    });
};
