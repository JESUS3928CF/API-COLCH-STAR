const express = require('express');
const { MongoClient, ObjectId } = require('mongodb')// Para poder buscar por id
const usuariosService = require('../services/usuariosService')

require("dotenv").config();
const uri = process.env.URI;
const port = process.env.PORT || 4000;

// const uri = 'mongodb+srv://herlindavid269:herlin.2004@sena.ahhwqpe.mongodb.net/?retryWrites=true&w=majority'

const router = express.Router();

const service = new usuariosService();

// Find -- Read
router.get('/', async (req, res) => {
    const { limit, offset} = req.query;
    const usuarios = await service.find(limit,offset);
    if (usuarios.length > 0) {
        res.status(200).send(usuarios);
    } else {
        res.status(404).send("No se encontró la información solicitada")
    }
})


// FindOne
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const usuario = await service.findOne(id);
    if (usuario) {
        res.status(200).send(usuario);
    } else {
        res.status(404).send("No se encontró el usuario en la base de datos");
    }
})



// // InsertOne
// router.post('/', async(req,res)=>{
//     const body = req.body;
//             const users =  await service.insertOne(body);
//             if(users){
//                 res.status(200).json({
//                     message: 'Se creo el usuario en la base de datos',
//                     users,
//                 });
//             }else{
//                 res.status(404).send("No se creo el usuario en la base de datos");
//             }
// })


// InsertMany
router.post('/', async (req, res) => {
    const body = req.body;
    const users = await service.insertMany(body);
    if (users) {
        res.status(200).json({
            message: 'Se crearon los usuarios en la base de datos',
            users,
        });
    } else {
        res.status(404).send("No se crearon los usuarios en la base de datos");
    }
})



// UpdateOne
router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const usuario_nombre = req.body.nombre;
    const usuario_apellido = req.body.apellido;
    const users = await service.updateOne(id, usuario_nombre, usuario_apellido);
    if (users) {
        res.status(200).json({
            message: 'Se actualizo el usuario en la base de datos',
            users,
        });
    } else {
        res.status(404).send("No se actualizo el usuario en la base de datos");
    }
})



// UpdateMany
router.put('/', async (req, res) => {
    const body = req.body;
    const users = await service.updateMany(body);
    if (users) {
        res.status(200).json({
            message: 'Se actualizaron los campos en la base de datos',
            users,
        });
    } else {
        res.status(404).send("No se actualizaron los campos en la base de datos");
    }
})


// DeleteOne
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const users = await service.deleteOne(id);
    if (users) {
        res.status(200).json({
            message: 'Se borro el usuario de la base de datos',
            users,
        });
    } else {
        res.status(404).send("No se borro el usuario de la base de datos");
    }
})


// DeleteMany
router.delete('/', async (req, res) => {
    const body = req.body;
    const users = await service.deleteMany(body);
    if (users) {
        res.status(200).json({
            message: 'Se borraron los datos de la base de datos',
            users,
        });
    } else {
        res.status(404).send("No se borraron los datos de la base de datos");
    }
})

module.exports = router;