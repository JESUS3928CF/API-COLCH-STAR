const express = require('express');
const {MongoClient,ObjectId} = require('mongodb')// Para poder buscar por id
const configuracionService = require('../services/configuracionService')

require("dotenv").config();
const uri = process.env.URI;
const port = process.env.PORT || 4000;

// const uri = 'mongodb+srv://herlindavid269:herlin.2004@sena.ahhwqpe.mongodb.net/?retryWrites=true&w=majority'

const router = express.Router();

const service = new configuracionService();

// Find -- Read
router.get('/', async(req,res)=>{
    const configuracion = await service.find();
    if(configuracion.length>0){
        res.status(200).send(configuracion);
    }else{
        res.status(404).send("No se encontro la informacion solicitada")
    }
})


// FindOne
router.get('/:id', async(req,res)=>{
    const id = req.params.id;
            const config =  await service.findOne(id);
            if(config){
                res.status(200).send(config);
            }else{
                res.status(404).send("No se encontro la configuracion en la base de datos");
            }
})


// // InsertOne
// router.post('/', async(req,res)=>{
//     const body = req.body;
//             const conf =  await service.insertOne(body);
//             if(conf){
//                 res.status(200).json({
//                     message: 'Se creo la configuracion en la base de datos',
//                     conf,
//                 });
//             }else{
//                 res.status(404).send("No se creo la configuracion en la base de datos");
//             }
// })


// InsertMany
router.post('/', async(req,res)=>{
    const body = req.body;
            const conf =  await service.insertMany(body);
            if(conf){
                res.status(200).json({
                    message: 'Se crearon las configuraciones en la base de datos',
                    conf,
                });
            }else{
                res.status(404).send("No se crearon las configuraciones en la base de datos");
            }
})


// UpdateOne
router.patch('/:id', async(req,res)=>{
    const id = req.params.id;
    const id_configuracion = req.body.id_configuracion;
    const fk_rol = req.body.fk_rol;
    const conf =  await service.updateOne(id,id_configuracion,fk_rol);
        if(conf){
            res.status(200).json({
                message: 'Se actualizo el rol en la base de datos',
                conf,
            });
        }else{
            res.status(400).send("No se actualizo el rol en la base de datos");
        }
})



// UpdateMany
router.put('/', async(req,res)=>{
    const body = req.body;
            const conf =  await service.updateMany(body);
            if(conf){
                res.status(200).json({
                    message: 'Se actualizaron los campos en la base de datos',
                    conf,
                });
            }else{
                res.status(404).send("No se actualizaron los campos en la base de datos");
            }
})



// DeleteOne
router.delete('/:id', async(req,res)=>{
    const id = req.params.id;
            const conf = await service.deleteOne(id);
            if(conf){
                res.status(200).json({
                    message: 'Se borro la configuracion de la base de datos',
                    conf,
                });
            }else{
                res.status(404).send("No se borro la configuracion de la base de datos");
            }
})



// DeleteMany
router.delete('/', async(req,res)=>{
    const body = req.body;
            const conf =  await service.deleteMany(body);
            if(conf){
                res.status(200).json({
                    message: 'Se borraron los datos de la base de datos',
                    conf,
                });
            }else{
                res.status(404).send("No se borraron los datos de la base de datos");
            }
})


module.exports = router;