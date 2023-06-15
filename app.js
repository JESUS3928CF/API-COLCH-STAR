const express = require('express');
const bodyparser = require('body-parser');
const routerApi = require("./routes");
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
require("dotenv").config();

const app = express();

const responApi = require('./routes/index')



const uri = process.env.URI;
const port = process.env.PORT || 4000;

/// Definiendo la carpeta public
app.use(express.static("public"));

//Middlewares
app.use(bodyparser.json()); // Para poder trabajar con json
app.use(bodyparser.urlencoded({ extended: true })); // Para poder trabajr con formularios codificados en url
app.use(express.json()); // Para poder trabajar con json
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));
app.use(express.static('public'));


app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', engine());
// app.set('view engine', 'handlebars');


routerApi(app);

// const port = 3000;

app.get('/', (req, res) => {
    res.sendFile('views/index.html', {
        root: __dirname
    })
})

app.get('/api/v1', (req, res) => {
    res.status(200).send('API DE COLCH STAR')
})

app.use('/*', (req, res) => {
    res.status(404).send("Paso algo inesperado")
})

app.listen(port, () => {
    console.log(`El servidor esta escuchando en http://localhost:${port}`);
})

responApi(app);

