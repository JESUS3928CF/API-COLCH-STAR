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
            const roles =  await client.db('mi_base').collection('roles').find({}).limit(10).toArray();
            if(roles){
                res.status(200).send(roles);
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
            const rol =  await client.db('mi_base').collection('roles').findOne({_id: new ObjectId(id)});
            if(rol){
                res.status(200).send(rol);
            }else{
                res.status(400).send("No se encontro el rol en la base de datos");
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
            const conf =  await client.db('mi_base').collection('roles').insertOne(body);
            if(conf){
                res.status(200).json({
                    message: 'Se creo el rol en la base de datos',
                    conf,
                });
            }else{
                res.send("No se creo el rol en la base de datos");
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
            const role =  await client.db('mi_base').collection('roles').insertMany(body);
            if(role){
                res.status(200).json({
                    message: 'Se crearon los roles en la base de datos',
                    role,
                });
            }else{
                res.status(400).send("No se crearon los roles en la base de datos");
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
            const role =  await client.db('mi_base').collection('roles').updateOne({_id: new ObjectId(id)},{
                $set:{
                    title:body,
                     year:body.year}});
            if(role){
                res.status(200).json({
                    message: 'Se actualizo el rol en la base de datos',
                    role,
                    // data: body
                });
            }else{
                res.status(400).send("No se actualizo el rol en la base de datos");
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
            const users = await client.db('mi_base').collection('roles').updateMany({},{$set:{body}});
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
            const role =  await client.db('mi_base').collection('roles').deleteOne({_id: new ObjectId(id)},{
                $set:{
                    title:body,
                     year:body.year}});
            if(role){
                res.status(200).json({
                    message: 'Se borro el rol de la base de datos',
                    role,
                });
            }else{
                res.status(400).send("No se borro el rol de la base de datos");
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
            const role = await client.db('mi_base').collection('roles').deleteMany(body);

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