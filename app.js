const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var session = require('express-session');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');



const app = express();

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({
    secret: 'skbfssopgdwkpgpoejgjoewgewnhgwiogowipwjifiwejfwiofrjwoi', 
    resave: false, 
    saveUninitialized: false, 
}));


const csrfProtection = csrf();
app.use(csrfProtection); 

app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});


const rutas_usuario = require('./routes/user.routes.js');
app.use('/user', rutas_usuario);

const rutas_colab = require('./routes/colaboradores.routes.js');
app.use('/colaboradores', rutas_colab);

const rutas_proyectos = require('./routes/proyectos.routes.js');
app.use('/proyectos', rutas_proyectos);

const rutas_reportes = require('./routes/reportes.routes.js');
app.use('/reportes', rutas_reportes);

const rutas_tareas = require('./routes/tareas.routes.js');
app.use('/tareas', rutas_tareas);

app.use((request, response, next) => {
    response.status(404);
    response.send('<h1>Error 404: El recurso solicitado no existe</h1>'); 
});


app.listen(3000);