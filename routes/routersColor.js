const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

require("dotenv").config();
const uri = "mongodb+srv://jesus3928cf:1234@cluster0.6sahaj9.mongodb.net/?retryWrites=true&w=majority"
const port = process.env.PORT || 4000;
const serviceColor = require('../services/serviceColor');
const router = express.Router();
const service = new serviceColor();


//------------------------------- Find---------------------------------

router.get('/', async (req, res) => {

    const resultado = await service.find();

    if (resultado.length > 0) {
        res.status(200).send(resultado);
    } else {
        res.status(404).send("Not found")
    }


})


//--------------------------------------- FindOne-----------------------------------

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const resultado = await service.findOne(id);
    if (resultado) {
        res.status(200).send(resultado);
    } else {
        res.status(404).send("No se encontro el color en la base de datos");
    }

})


//-----------------------------------InsertOne---------------------------------------

// router.post('/', async(req,res)=>{
//     const body = req.body;
//     const resultado = await service.insertOne(body);
//             if(resultado){
//                 res.status(200).json({
//                     message: 'Se creo el color en la base de datos',
//                     resultado,
//                 });
//             }else{
//                 res.status(404).send("No se creo el color en la base de datos");
//             }
// })


//--------------------------InsertMany------------------------------

router.post('/', async (req, res) => {
    const body = req.body;
    const resultado = await service.insertMany(body);
    if (resultado) {
        res.status(200).json({
            message: 'Se crearon los colores en la base de datos',
            resultado,
        });
    } else {
        res.status(404).send("No se crearon los colores en la base de datos");
    }

})


// --------------------------------UpdateOne-------------------------------------

router.patch('/:id', async (req, res) => {

    const id = req.params.id;
    const id_prenda_color = req.body.id_prenda_color;
    const color = req.body.color;
    const codigo = req.body.codigo;
    const fk_prenda = req.body.fk_prenda;


    const resultado = await service.updateOne(id, id_prenda_color, color, codigo, fk_prenda)
    if (resultado) {
        res.status(200).json({
            message: 'Se actualizo el color  en la base de datos',
            resultado,
        });
    } else {
        res.status(404).send("No se actualizo el color en la base de datos");
    }
})



//--------------------------------UpdateMany------------------------------

router.put('/', async (req, res) => {
    const body = req.body;

    const resultado = await service.updateMany(body);
    if (resultado) {
        res.status(200).json({
            message: 'Se actualizaron los campos en la base de datos',
            resultado,
        });
    } else {
        res.status(404).send("No se actualizaron los campos en la base de datos");
    }

})



// ----------------------------------------------DeleteOne------------------------------

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const resultado = await service.deleteOne(id)
    if (resultado) {
        res.status(201).json({
            message: 'Se borro el color de la base de datos',
            resultado,
        });
    } else {
        res.status(400).send("No se borro el color de la base de datos");
    }

})


//----------------------------------------DeleteMany----------------------------- 

router.delete('/', async (req, res) => {
    const body = req.body;
    const resultado = await service.deleteMany(body);
    if (resultado) {
        res.status(200).json({
            message: "Se borraron los datos de la base de datos",
            resultado,
        });
    } else {
        res.status(400).send("No se borraron los datos de la base de datos");
    }

})


module.exports = router;
