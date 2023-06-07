const express = require('express');
const {MongoClient,ObjectId} = require('mongodb')// Para poder buscar por id
const usuariosService = require('../services/usuariosService')

require("dotenv").config();
const uri = process.env.URI;
const port = process.env.PORT || 4000;

// const uri = 'mongodb+srv://herlindavid269:herlin.2004@sena.ahhwqpe.mongodb.net/?retryWrites=true&w=majority'

const router = express.Router();

const servive = new usuariosService();

// Find -- Read
router.get('/', async(req,res)=>{
            const usuarios = await servive.find();
            if(usuarios.length>0){
                res.status(200).send(usuarios);
            }else{
                res.status(404).send("No se encontro la informacion solicitada")
            }
})


// FindOne
router.get('/:id', async(req,res)=>{
    const id = req.params.id;
    const client = new MongoClient(uri);
        try {
            await client.connect();
            const usuario =  await client.db('mi_base').collection('usuarios').findOne({_id: new ObjectId(id)});
            if(usuario){
                res.status(200).send(usuario);
            }else{
                res.status(404).send("No se encontro el usuario en la base de datos");
            }
        } catch (e) {
            console.log(e);
        }finally{
            await client.close();
        }
})


// InsertOne
router.post('/', async(req,res)=>{
    const body = req.body;
    const client = new MongoClient(uri);
        try {
            await client.connect();
            const users =  await client.db('mi_base').collection('usuarios').insertOne(body);
            if(users){
                res.status(200).json({
                    message: 'Se creo el usuario en la base de datos',
                    users,
                });
            }else{
                res.send("No se creo el usuario en la base de datos");
            }
        } catch (e) {
            console.log(e);
        }finally{
            await client.close();
        }
})



// InsertMany
router.post('/', async(req,res)=>{
    const body = req.body;
    const client = new MongoClient(uri);
        try {
            await client.connect();
            const users =  await client.db('mi_base').collection('usuarios').insertMany(body);
            if(users){
                res.status(200).json({
                    message: 'Se crearon los usuarios en la base de datos',
                    users,
                });
            }else{
                res.status(400).send("No se crearon los usuarios en la base de datos");
            }
        } catch (e) {
            console.log(e);
        }finally{
            await client.close();
        }
})


// // Update
// // UpdateOne Actualizamos solo un campo
// router.patch('/:id', async(req,res)=>{
//     const id = req.params.id;
//     const usuario_nombre = req.body.nombre;
//     const usuario_apellido = req.body.apellido;
//     const users =  await servive.dupdateOne(id,usuario_nombre,usuario_apellido);
//         if(users.length>0){
//             res.status(200).json({
//                 message: 'Se actualizo el usuario en la base de datos',
//                 users,
//             });
//         }else{
//             res.status(400).send("No se actualizo el usuario en la base de datos");
//         }
// })


// Update Many
// UpdateMany Actualizamos varios campos
router.put('/', async (req, res)=>{
    const body = req.body;
    const client = new MongoClient(uri);
        try {
            await client.connect();
            const users = await client.db('mi_base').collection('usuarios').updateMany({},{$set:{activo:body}});
            if(users){
                res.status(200).json({
                    message: 'Se actualizaron los campos en la base de datos',
                    users,
                });
            }else{
                res.status(400).send("No se actualizaron los campos en la base de datos");
        }
        } catch(e) {
            console.log(e);
        }finally{
            await client.close();
        }
})


// Delete
// DeleteOne eliminamos solo un campo
router.delete('/:id', async(req,res)=>{
    const id = req.params.id;
    const body = req.body;
    const client = new MongoClient(uri);
        try {
            await client.connect();
            const users = await client.db('mi_base').collection('usuarios').deleteOne({_id: new ObjectId(id)},{
                $set:{
                    title:body,
                     year:body.year}});
            if(users){
                res.status(200).json({
                    message: 'Se borro el usuario de la base de datos',
                    users,
                });
            }else{
                res.status(400).send("No se borro el usuario de la base de datos");
            }
        } catch (e) {
            console.log(e);
        }finally{
            await client.close();
        }
})


// Delete Many
// DeleteMany eliminamos varios campos
router.delete('/', async (req,res)=>{
    const body=req.body;
    const client = new MongoClient(uri);
        try {
            await client.connect();
            const users = await client.db('mi_base').collection('usuarios').deleteMany(body);

            if(users){
                res.status(200).json({
                    message: "Se borraron los datos de la base de datos",
                    result,
                });
            }else{
                res.status(400).send("No se borraron los datos de la base de datos");
            }
        } catch(e) {
            console.log(e);
        }finally{
            await client.close();
        }
 })


module.exports = router;


async function nombreFuntion(){
    try{

    }catch{

    }finally{

    }
}