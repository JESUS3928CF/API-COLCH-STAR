const {MongoClient,ObjectId} = require('mongodb')
require("dotenv").config();
const uri = process.env.URI;
const port = process.env.PORT || 4000;



class CompraService{

    constructor(){}

    //-----------------READ FIND--------------

    async find(){
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const resultado =  await client.db('colch_star').collection('Compra').find({}).limit(10).toArray();
            return  resultado;
        } catch (e) {
            console.log(e);
        }finally{
            await client.close();
        }
    }


    //------------------------READ findOne----------------

        async findOne(id){
            const client = new MongoClient(uri);
            try {
                await client.connect();
                const resultado =  await client.db('colch_star').collection('Compra').findOne({_id: new ObjectId(id)});
                return resultado;
            } catch (e) {
                console.log(e);
            }finally{
                await client.close();
            }
        }



    //----------------------InsertOne------------------------------

        // async insertOne(body){
        //     const client = new MongoClient(uri);
        //         try {
        //             await client.connect();
        //             const resultado =  await client.db('colch_star').collection('Compra').insertOne(body);
        //             return resultado;
        //         } catch (e) {
        //             console.log(e);
        //         }finally{
        //             await client.close();
        //         }
        // } 


    //----------------------InsertMany------------------------------

            async insertMany(body){
            const client = new MongoClient(uri);
                try {
                    await client.connect();
                    const resultado =  await client.db('colch_star').collection('Compra').insertMany(body);
                    return resultado;
                } catch (e) {
                    console.log(e);
                }finally{
                    await client.close();
                }
            }
        
            

    //---------------------updateOne------------

    async updateOne(id,id_compra,total_compra,estado){
    const client = new MongoClient(uri);
        try {
            await client.connect();
            const resultado =  await client.db('colch_star').collection('Compra').updateOne({_id: new ObjectId(id)},
            {
                $set:{
                    total_compra: total_compra,
                    estado:estado,
                    id_compra:id_compra
                }});
                return resultado;
            
            } catch (e) {
                console.log(e);
            }finally{
                await client.close();
            }
    }

    
    //--------------------------------UpdateMany------------------------------

    async updateMany(body){
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const resultado = await client.db('colch_star').collection('Compra').updateMany({},{$set:{body}});

            return resultado;

        } catch(e) {
            console.log(e);
        }finally{
            await client.close();
        }
    }


    // ----------------------------------------------DeleteOne------------------------------

    async deleteOne(id){
    const client = new MongoClient(uri);
        try {
            await client.connect();
            const resultado =  await client.db('colch_star').collection('Compra').deleteOne({_id: new ObjectId(id)});
            return resultado;
        } catch (e) {
            console.log(e);
        }finally{
            await client.close();
        }
    }  

    //----------------------------------------DeleteMany--------------------

    async deleteMany(body){
    const client = new MongoClient(uri);
        try {
            await client.connect();
            const resultado = await client.db('colch_star').collection('Compra').deleteMany(body);
            
            return resultado;

        } catch(e) {
            console.log(e);
        }finally{
            await client.close();
        }
    }
 

}



module.exports = CompraService;


