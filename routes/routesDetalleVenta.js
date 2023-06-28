const express = require('express');

require('dotenv').config();

const DetalleVentaService = require('../services/DetalleVentaService');

const router = express.Router();

const service = new DetalleVentaService();

//------------------------------- Find---------------------------------

router.get('/', async (req, res) => {
    const resultado = await service.find();

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
        res.status(404).send(
            'No se encontró el detalle de venta en la base de datos'
        );
    }
});

//-----------------------------------InsertOne---------------------------------------

router.post('/', async(req,res)=>{
    const body = req.body;
    const resultado = await service.insertOne(body);
            if(resultado){
                res.status(200).json({
                    message: 'Se creo el detalleCompra en la base de datos',
                    resultado,
                });
            }else{
                res.status(404).send("No se creo el detalleCompra en la base de datos");
            }
})

//--------------------------InsertMany------------------------------

router.post('/many', async (req, res) => {
    const body = req.body;
    const resultado = await service.insertMany(body);
    if (resultado) {
        res.status(200).json({
            message: 'Se crearon los detalles Compra en la base de datos',
            resultado,
        });
    } else {
        res.status(404).send(
            'No se crearon los detalles Compra en la base de datos'
        );
    }
});

// --------------------------------UpdateOne-------------------------------------

router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const id_detalle_venta = req.body.id_detalle_venta;
    const cantidad = req.body.cantidad;
    const subtotal = req.body.subtotal;
    const resultado = await service.updateOne(
        id,
        id_detalle_venta,
        cantidad,
        subtotal,
    );
    if (resultado) {
        res.status(200).json({
            message: 'Se actualizo el detalle de venta en la base de datos',
            resultado,
        });
    } else {
        res.status(404).send(
            'No se actualizo el detalle de venta en la base de datos'
        );
    }
});

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
        res.status(404).send(
            'No se actualizaron los campos en la base de datos'
        );
    }
});

// ----------------------------------------------DeleteOne------------------------------

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const resultado = await service.deleteOne(id);
    if (resultado) {
        res.status(201).json({
            message: 'Se borro el detalle de venta de la base de datos',
            resultado,
        });
    } else {
        res.status(400).send(
            'No se borro el detalle de venta de la base de datos'
        );
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
