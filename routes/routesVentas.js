const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

require('dotenv').config();
const uri = process.env.URI;
const port = process.env.PORT || 4000;

const VentasService = require('../services/VentasService');

const router = express.Router();

const service = new VentasService();

//------------------------------- Find---------------------------------

router.get('/', async (req, res) => {
    /// Se cambio las dos primeras lineas
    const { limit, offset } = req.query;
    const resultado = await service.find(limit, offset);

    if (resultado.length > 0) {
        res.status(200).send(resultado);
    } else {
        res.status(404).send('Not found');
    }
});

//--------------------------------------- FindOne-----------------------------------

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const resultado = await service.findOne(id);
    if (resultado) {
        res.status(200).send(resultado);
    } else {
        res.status(404).send('No se encontró la venta en la base de datos');
    }
});

//-----------------------------------InsertOne---------------------------------------

router.post('/', async(req,res)=>{
    const body = req.body;
    const resultado = await service.insertOne(body);
            if(resultado){
                res.status(200).json({
                    message: 'Se creo la venta en la base de datos',
                    resultado,
                });
            }else{
                res.status(404).send("No se creo la venta en la base de datos");
            }
})

//--------------------------InsertMany------------------------------

router.post('/many', async (req, res) => {
    const body = req.body;
    const resultado = await service.insertMany(body);
    if (resultado) {
        res.status(200).json({
            message: 'Se crearon las ventas en la base de datos',
            resultado,
        });
    } else {
        res.status(404).send('No se crearon las ventas en la base de datos');
    }
});

// --------------------------------UpdateOne-------------------------------------

router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const id_venta = req.body.id_venta;
    const precio_total = req.body.precio_total;
    const estado_de_venta = req.body.estado_de_venta;
    const resultado = await service.updateOne(
        id,
        id_venta,
        precio_total,
        estado_de_venta
    );
    if (resultado) {
        res.status(200).json({
            message: 'Se actualizo la venta en la base de datos',
            resultado,
        });
    } else {
        res.status(404).send('No se actualizo la venta en la base de datos');
    }
});

//--------------------------------UpdateMany------------------------------

router.put('/', async (req, res) => {
    const body = req.body;

    const resultado = await service.updateMany(body);
    if (resultado) {
        res.status(200).json({
            message:
                'Se actualizaron los campos de ventas en la base de datos',
            resultado,
        });
    } else {
        res.status(404).send(
            'No se actualizaron los campos de ventas en la base de datos'
        );
    }
});

// ----------------------------------------------DeleteOne------------------------------

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const resultado = await service.deleteOne(id);
    if (resultado) {
        res.status(201).json({
            message: 'Se borro la venta de la base de datos',
            resultado,
        });
    } else {
        res.status(400).send('No se borro la venta de la base de datos');
    }
});

//----------------------------------------DeleteMany-----------------------------

router.delete('/', async (req, res) => {
    const body = req.body;
    const resultado = await service.deleteMany(body);
    if (resultado) {
        res.status(200).json({
            message: 'Se borraron los datos de la base de datos',
            resultado,
        });
    } else {
        res.status(400).send('No se borraron los datos de la base de datos');
    }
});

module.exports = router;
