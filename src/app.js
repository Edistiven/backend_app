const express =require('express');
const app = express();
const cors = require ('cors');
//setting del servidor

app.set('port', process.env.PORT || 4000);

//middlewares .- funciones que se ejecutaran antes de llegar a las rutas
app.use(cors());
app.use(express.json());

//routes .- urls que la aplicacion usara
app.use('/api/users', require('./routers/users') );
app.use('/api/notes', require('./routers/notes') );

module.exports= app;