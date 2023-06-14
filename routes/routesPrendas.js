const express = require('express');
const {MongoClient,ObjectId} = require('mongodb');

require("dotenv").config();
const uri = "mongodb+srv://jesus3928cf:1234@cluster0.6sahaj9.mongodb.net/?retryWrites=true&w=majority"
const port = process.env.PORT || 4000;
const servicePrendas = require('../services/servicePrendas');
const router = express.Router();
const service  = new servicePrendas();


//------------------------------- Find---------------------------------

router.get('/', async(req,res)=>{

    const resultado = await service.find();

    if (resultado.length>0){
        res.status(200).send(resultado);
    }else{
        res.status(404).send("Not found")
    }
    
        
})


//--------------------------------------- FindOne-----------------------------------

router.get('/:id', async(req,res)=>{
    const id = req.params.id;
    const  resultado = await service.findOne(id);
        if(resultado){
            res.status(200).send(resultado);
        }else{
            res.status(404).send("No se encontro la prenda en la base de datos");
        }
        
})


//-----------------------------------InsertOne---------------------------------------

// router.post('/', async(req,res)=>{
//     const body = req.body;
//     const resultado = await service.insertOne(body);
//             if(resultado){
//                 res.status(200).json({
//                     message: 'Se creo la prenda en la base de datos',
//                     resultado,
//                 });
//             }else{
//                 res.status(404).send("No se creo la prenda en la base de datos");
//             }
// })


//--------------------------InsertMany------------------------------

router.post('/', async(req,res)=>{
    const body = req.body;   
    const resultado = await service.insertMany(body);
            if(resultado){
                res.status(200).json({
                    message: 'Se crearon las prendas en la base de datos',
                    resultado,
                });
            }else{
                res.status(404).send("No se crearon las prendas en la base de datos");
            }
        
})


// --------------------------------UpdateOne-------------------------------------

router.patch('/:id', async(req,res)=>{
    const id = req.params.id;
    const id_prenda =  req.body.id_prenda;
    const nombre = req.body.nombre;
    const cantidad=req.body.cantidad;
    const precio = req.body.precio;
    const estado = req.body.estado;
    const imagen= req.body.imagen;
    const tipo_tela = req.body.tipo_tela;
    const genero = req.body.genero;
    const publicado = req.body.publicado;
    const fk_color = req.body.fk_color;
    const fk_talla = req.body.fk_talla;
    const fk_diseno = req.body.fk_diseno

    const resultado= await service.updateOne(id,id_prenda,nombre,cantidad,precio,
        estado,imagen,tipo_tela,genero,publicado,fk_color,fk_talla,fk_diseno)
    if(resultado){
        res.status(200).json({
            message: 'Se actualizo la prenda  en la base de datos',
            resultado,
        });
    }else{
        res.status(404).send("No se actualizo el proveedor en la base de datos");
        }
})



//--------------------------------UpdateMany------------------------------

router.put('/', async (req, res)=>{
    const body = req.body;
    
    const  resultado = await service.updateMany(body);
        if(resultado){
            res.status(200).json({
                message: 'Se actualizaron los campos en la base de datos',
                resultado,
            });
        }else{
            res.status(404).send("No se actualizaron los campos en la base de datos");
        }
        
})



// ----------------------------------------------DeleteOne------------------------------

router.delete('/:id', async(req,res)=>{
    const id = req.params.id;
            const resultado = await service.deleteOne(id)
            if(resultado){
                res.status(201).json({
                    message: 'Se borro la prenda de la base de datos',
                    resultado,
                });
            }else{
                res.status(400).send("No se borro la prenda de la base de datos");
            }
        
})


//----------------------------------------DeleteMany----------------------------- 

router.delete('/', async (req,res)=>{
    const body=req.body;
    const  resultado = await service.deleteMany(body);
        if(resultado){
            res.status(200).json({
                message: "Se borraron los datos de la base de datos",
                resultado,
            });
        }else{
            res.status(400).send("No se borraron los datos de la base de datos");
        }
        
})


module.exports = router;
