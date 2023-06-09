const express = require('express');
const bodyparser = require('body-parser');
const routerApi = require("./routes");

const responApi=require('./routes/index')

require("dotenv").config();
const uri = process.env.URI;
const port = process.env.PORT || 4000;

const app = express();


//Middlewares
app.use(bodyparser.json()); // Para poder trabajar con json
app.use(bodyparser.urlencoded({extended: true})); // Para poder trabajr con formularios codificados en url
app.use(express.json()); // Para poder trabajar con json

routerApi(app);

// const port = 3000;

app.get('/', (req, res)=>{
    res.sendFile('View/index.html',{
        root:__dirname
    })
})

app.get('/',(req,res)=>{
    res.status(200).send('API DE COLCH STAR')
})

app.use('/*',(req,res)=>{
    res.status(404).send("Paso algo inesperado")
})

app.listen(port, ()=>{
    console.log(`El servidor esta escuchando en http://localhost:${port}`);
})

responApi(app);