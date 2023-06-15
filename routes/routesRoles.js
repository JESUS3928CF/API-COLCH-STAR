const express = require('express');
const { MongoClient, ObjectId } = require('mongodb')// Para poder buscar por id
const rolesService = require('../services/rolesService')

require("dotenv").config();
const uri = process.env.URI;
const port = process.env.PORT || 4000;

// const uri = 'mongodb+srv://herlindavid269:herlin.2004@sena.ahhwqpe.mongodb.net/?retryWrites=true&w=majority'

const router = express.Router();

const service = new rolesService();

// Find -- Read
router.get('/', async (req, res) => {
    const { limit, offset } = req.query;
    const roles = await service.find(limit, offset);
    if (roles.length > 0) {
        res.status(200).send(roles);
    } else {
        res.status(404).send("No se encontro la informacion solicitada")
    }
})


// FindOne
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const rol = await service.findOne(id);
    if (rol) {
        res.status(200).send(rol);
    } else {
        res.status(404).send("No se encontro el usuario en la base de datos");
    }
})


// // InsertOne
// router.post('/', async(req,res)=>{
//     const body = req.body;
//             const role =  await service.insertOne(body);
//             if(role){
//                 res.status(200).json({
//                     message: 'Se creo el rol en la base de datos',
//                     role,
//                 });
//             }else{
//                 res.status(404).send("No se creo el rol en la base de datos");
//             }
// })



// InsertMany
router.post('/', async (req, res) => {
    const body = req.body;
    const role = await service.insertMany(body);
    if (role) {
        res.status(200).json({
            message: 'Se crearon los roles en la base de datos',
            role,
        });
    } else {
        res.status(404).send("No se crearon los roles en la base de datos");
    }
})


// UpdateOne
router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const id_rol = req.body.id_rol;
    const rol_nombre = req.body.rol;
    const role = await service.updateOne(id, id_rol, rol_nombre);
    if (role) {
        res.status(200).json({
            message: 'Se actualizo el rol en la base de datos',
            role,
        });
    } else {
        res.status(404).send("No se actualizo el rol en la base de datos");
    }
})


// UpdateMany
router.put('/', async (req, res) => {
    const body = req.body;
    const role = await service.updateMany(body);
    if (role) {
        res.status(200).json({
            message: 'Se actualizaron los campos en la base de datos',
            role,
        });
    } else {
        res.status(404).send("No se actualizaron los campos en la base de datos");
    }
})


// DeleteOne
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const role = await service.deleteOne(id);
    if (role) {
        res.status(200).json({
            message: 'Se borro el rol de la base de datos',
            role,
        });
    } else {
        res.status(404).send("No se borro el rol de la base de datos");
    }
})
// DeleteMany
router.delete('/', async (req, res) => {
    const body = req.body;
    const role = await service.deleteMany(body);
    if (role) {
        res.status(200).json({
            message: 'Se borraron los datos de la base de datos',
            role,
        });
    } else {
        res.status(404).send("No se borraron los datos de la base de datos");
    }
})

module.exports = router;