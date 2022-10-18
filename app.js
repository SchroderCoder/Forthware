const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var session = require('express-session');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const { auth } = require('express-openid-connect');
const csrfProtection = csrf();
const { requiresAuth } = require('express-openid-connect');
const PDF = require('pdfkit');
const fs = require('fs');
const multer = require('multer');
//=====//
const { expressjwt: jwt } = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');
//====//

const guard = require("express-jwt-permissions");

// const config = {
//     authRequired: false,
//     auth0Logout: true,
//     secret: 'a long, randomly-generated string stored in env',
//     baseURL: 'localhost:3000',
//     clientID: 'VrY5U6QWknSE0ioauNNrG2gRuT2cHZc2',
//     issuerBaseURL: 'https://dev-3du5p0pi.us.auth0.com',
//     secret: 'uqyewfincosppÁEO{PWOjkoañseklmññikñhup',
//   };

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'a long, randomly-generated string stored in env',
    baseURL: 'http://localhost:3000',
    clientID: 'VrY5U6QWknSE0ioauNNrG2gRuT2cHZc2',
    issuerBaseURL: 'https://dev-3du5p0pi.us.auth0.com/',
    secret: 'uqyewfincosppÁEO{PWOjkoañseklmññikñhup',
};


const app = express();

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

// const checkJwt = jwt({
//     secret: jwksRsa.expressJwtSecret({
//       cache: true,
//       rateLimit: true,
//       jwksRequestsPerMinute: 5,
//       jwksUri: 'https://dev-3du5p0pi.us.auth0.com/.well-known/jwks.json'
//     }),
//     audience: 'https://permissions/api',
//     issuer: 'https://dev-3du5p0pi.us.auth0.com/',
//     algorithms: ['RS256']
//   });
//   var options = { customScopeKey: 'permissions'};  // This is necessary to support the direct-user permissions
//   const checkScopes = jwtAuthz([ 'crear:proyectos' ]);
//   //...x    

// app.use(checkJwt);

const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        //'uploads': Es el directorio del servidor donde se subirán los archivos 
        callback(null, 'public/project_images');
    },
    filename: (request, file, callback) => {
        //aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
        //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
        callback(null, Date.now() + '-' +file.originalname);
    },
});


app.use(multer({ storage: fileStorage }).single('archivo')); 

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({
    secret: 'skbfssopgdwkpgpoejgjoewgewnhgwiogowipwjifiwejfwiofrjwoi', 
    resave: false, 
    saveUninitialized: false, 
}));


// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
  });

app.use(csrfProtection); 

app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});

const rutas_usuario = require('./routes/user.routes.js');
app.use('/user', requiresAuth(), rutas_usuario);

const rutas_colab = require('./routes/colaboradores.routes.js');
app.use('/colaboradores',requiresAuth(), rutas_colab);

const rutas_proyectos = require('./routes/proyectos.routes.js');
app.use('/proyectos',requiresAuth(), rutas_proyectos);

const rutas_reportes = require('./routes/reportes.routes.js');
app.use('/reportes', requiresAuth(), rutas_reportes);

const rutas_tareas = require('./routes/tareas.routes.js');
const { response } = require('express');
app.use('/tareas', rutas_tareas);

 app.use((request, response, next) => {
     response.status(404);
     response.send('<h1>Error 404: El recurso solicitado no existe</h1>'); 
 });

app.get("/logout",(req, response, next) => {
    response.render(path.join(__dirname,"views","logout.ejs"));
 });

app.listen(3000);   
