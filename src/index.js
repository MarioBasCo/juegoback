const express = require('express');
const cors = require('cors');
const app = express();
const { sequelize } = require('./models/index');
const Moment = require('moment-timezone');
const path = require('path');
Moment().tz('America/Guayaquil').format();

app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/', express.static(path.join(__dirname + '/public')));

app.use("/images", express.static(path.join(__dirname + '/uploads')));


//Rutas
app.use(require('./routes/routes'));

app.listen(app.get('port'), ()=> {
    console.log('Server on port', app.get('port'));

    //Conectarse a la base de datos
    sequelize.authenticate().then(() => {
        console.log('Nos hemos conectado a la base de datos!!!!!');
    });
});
