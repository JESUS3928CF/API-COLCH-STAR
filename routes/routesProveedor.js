const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

require("dotenv").config();
const uri = process.env.URI;
const port = process.env.PORT || 4000;

const ProveedorService = require('../services/ProveedorService');

const router = express.Router();

const service = new ProveedorService();


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
        res.status(404).send("No se encontro el proveedor en la base de datos");
    }

})


//-----------------------------------InsertOne---------------------------------------

// router.post('/', async(req,res)=>{
//     const body = req.body;
//     const resultado = await service.insertOne(body);
//             if(resultado){
//                 res.status(200).json({
//                     message: 'Se creo el proveedor en la base de datos',
//                     resultado,
//                 });
//             }else{
//                 res.status(404).send("No se creo el proveedor en la base de datos");
//             }
// })


//--------------------------InsertMany------------------------------

router.post('/', async (req, res) => {
    const body = req.body;
    const resultado = await service.insertMany(body);
    if (resultado) {
        res.status(200).json({
            message: 'Se crearon los proveedores en la base de datos',
            resultado,
        });
    } else {
        res.status(404).send("No se crearon los proveedores en la base de datos");
    }

})


// --------------------------------UpdateOne-------------------------------------

router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const id_proveedor = req.body.id_proveedor;
    const nombre = req.body.nombre;
    const contacto = req.body.contacto;
    const estado = req.body.estado;
    const resultado = await service.updateOne(id, id_proveedor, nombre, contacto, estado);
    if (resultado) {
        res.status(200).json({
            message: 'Se actualizo el proveedor en la base de datos',
            resultado,
        });
    } else {
        res.status(404).send("No se actualizo el proveedor en la base de datos");
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
            message: 'Se borro el proveedor de la base de datos',
            resultado,
        });
    } else {
        res.status(400).send("No se borro el proveedor de la base de datos");
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
