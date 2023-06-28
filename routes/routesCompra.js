const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

require("dotenv").config();
const uri = process.env.URI;
const port = process.env.PORT || 4000;

const CompraService = require('../services/CompraService');

const router = express.Router();

const service = new CompraService();


//------------------------------- Find---------------------------------

router.get('/', async (req, res) => {
    const { limit, offset } = req.query;
    const resultado = await service.find(limit, offset);

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
        res.status(404).send("No se encontro la Compra en la base de datos");
    }

})


//-----------------------------------InsertOne---------------------------------------

router.post('/', async(req,res)=>{
    const body = req.body;
    const resultado = await service.insertOne(body);
            if(resultado){
                res.status(200).json({
                    message: 'Se creo la Compra en la base de datos',
                    resultado,
                });
            }else{
                res.status(404).send("No se creo la Compra en la base de datos");
            }
})


//--------------------------InsertMany------------------------------

router.post('/many', async (req, res) => {
    const body = req.body;
    const resultado = await service.insertMany(body);
    if (resultado) {
        res.status(200).json({
            message: 'Se crearon las Compras en la base de datos',
            resultado,
        });
    } else {
        res.status(404).send("No se crearon las Compras en la base de datos");
    }

})


// --------------------------------UpdateOne-------------------------------------

router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const id_compra = req.body.id_compra
    const total_compra = req.body.total_compra;
    const estado = req.body.estado;
    const resultado = await service.updateOne(id, id_compra, total_compra, estado);
    if (resultado) {
        res.status(200).json({
            message: 'Se actualizo la Compra en la base de datos',
            resultado,
        });
    } else {
        res.status(404).send("No se actualizo la Compra en la base de datos");
    }
})



//--------------------------------UpdateMany------------------------------

router.put('/', async (req, res) => {
    const body = req.body;

    const resultado = await service.updateMany(body);
    if (resultado) {
        res.status(200).json({
            message: 'Se actualizaron los campos de compras en la base de datos',
            resultado,
        });
    } else {
        res.status(404).send("No se actualizaron los campos de compras en la base de datos");
    }

})



// ----------------------------------------------DeleteOne------------------------------

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const resultado = await service.deleteOne(id)
    if (resultado) {
        res.status(201).json({
            message: 'Se borro la Compra de la base de datos',
            resultado,
        });
    } else {
        res.status(400).send("No se borro la Compra de la base de datos");
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

