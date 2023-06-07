const express = require('express');
const {MongoClient,ObjectId} = require('mongodb')// Para poder buscar por id

require("dotenv").config();
const uri = process.env.URI;
const port = process.env.PORT || 4000;

// const uri = 'mongodb+srv://herlindavid269:herlin.2004@sena.ahhwqpe.mongodb.net/?retryWrites=true&w=majority'

const router = express.Router();

// Read
// Find
router.get('/', async(req,res)=>{
    const client = new MongoClient(uri);
        try {
            await client.connect();
            const configuracion =  await client.db('mi_base').collection('configuracion').find({}).limit(10).toArray();
            if(configuracion){
                res.status(200).send(configuracion);
            }else{
                res.status(404).send("No se encontro la informacion solicitada")
            }
        } catch (e) {
            console.log(e);
        }finally{
            await client.close();
        }
})


// FindOne
router.get('/:id', async(req,res)=>{
    const id = req.params.id;
    const client = new MongoClient(uri);
        try {
            await client.connect();
            const config =  await client.db('mi_base').collection('configuracion').findOne({_id: new ObjectId(id)});
            if(config){
                res.status(200).send(config);
            }else{
                res.status(404).send("No se encontro la configuracion en la base de datos");
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
            const conf =  await client.db('mi_base').collection('configuracion').insertOne(body);
            if(conf){
                res.status(200).json({
                    message: 'Se creo la configuracion en la base de datos',
                    conf,
                });
            }else{
                res.send("No se creo la configuracion en la base de datos");
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
            const conf =  await client.db('mi_base').collection('configuracion').insertMany(body);
            if(conf){
                res.status(200).json({
                    message: 'Se crearon las configuraciones en la base de datos',
                    conf,
                });
            }else{
                res.status(400).send("No se crearon las configuraciones en la base de datos");
            }
        } catch (e) {
            console.log(e);
        }finally{
            await client.close();
        }
})


// Update
// UpdateOne Actualizamos solo un campo
router.patch('/:id', async(req,res)=>{
    const id = req.params.id;
    const body = req.body;
    const client = new MongoClient(uri);
        try {
            await client.connect();
            const conf =  await client.db('mi_base').collection('configuracion').updateOne({_id: new ObjectId(id)},{
                $set:{
                    title:body,
                     year:body.year}});
            if(conf){
                res.status(201).json({
                    message: 'Se actualizo la configuracion en la base de datos',
                    conf,
                    // data: body
                });
            }else{
                res.status(400).send("No se actualizo la configuracion en la base de datos");
            }
        } catch (e) {
            console.log(e);
        }finally{
            await client.close();
        }
})


// Update Many
// UpdateMany Actualizamos varios campos
router.put('/', async (req, res)=>{
    const body = req.body;
    const client = new MongoClient(uri);
        try {
            await client.connect();
            const users = await client.db('mi_base').collection('configuracion').updateMany({},{$set:{body}});
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
// // DeleteOne eliminamos solo un campo
router.delete('/:id', async(req,res)=>{
    const id = req.params.id;
    const body = req.body;
    const client = new MongoClient(uri);
        try {
            await client.connect();
            const conf =  await client.db('mi_base').collection('configuracion').deleteOne({_id: new ObjectId(id)},{
                $set:{
                    title:body,
                     year:body.year}});
            if(conf){
                res.status(201).json({
                    message: 'Se borro la configuracion de la base de datos',
                    conf,
                });
            }else{
                res.status(400).send("No se borro la configuracion de la base de datos");
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
            const role = await client.db('mi_base').collection('configuracion').deleteMany(body);

            if(role){
                res.status(200).json({
                    message: "Se borraron los datos de la base de datos",
                    role,
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