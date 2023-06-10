const {MongoClient,ObjectId} = require('mongodb')
require("dotenv").config();
const uri = process.env.URI;
const port = process.env.PORT || 4000;


//Find -- Read
class configuracionService{
    constructor(){}
    async find(){
        const client = new MongoClient(uri);
        try{
            await client.connect();
            const configuracion =  await client.db('colch_star').collection('configuracion').find({}).limit(10).toArray();
            return configuracion;
        }catch (e) {
            console.log(e);
        }finally{
            await client.close();
        }
    }


// FindOne
    async findOne(id){
        const client = new MongoClient(uri);
            try {
                await client.connect();
                const config =  await client.db('colch_star').collection('configuracion').findOne({_id: new ObjectId(id)});
                return config;
            } catch (e) {
                console.log(e);
            }finally{
                await client.close();
            }
    }
    

// //InsertOne
// async insertOne(body){
//     const client = new MongoClient(uri);
//     try{
//         await client.connect();
//         const conf =  await client.db('colch_star').collection('configuracion').insertOne(body);
//         return conf;
//     }catch (e) {
//         console.log(e);
//     }finally{
//         await client.close();
//     }
// }


//InsertMany
async insertMany(body){
    const client = new MongoClient(uri);
    try{
        await client.connect();
        const conf =  await client.db('colch_star').collection('configuracion').insertMany(body);
        return conf;
    }catch (e) {
        console.log(e);
    }finally{
        await client.close();
    }
}


// UpdateOne
async updateOne(id,id_configuracion,fk_rol){
    const client = new MongoClient(uri);
        try {
            await client.connect();
            const conf =  await client.db('colch_star').collection('configuracion').updateOne({_id: new ObjectId(id)},
            {
                $set:{
                    id_configuracion : id_configuracion,
                    fk_rol : fk_rol,
                }});
                return conf;
        } catch (e) {
            console.log(e);
        }finally{
            await client.close();
        }

    }


//Updatemany
async updateMany(body){
    const client = new MongoClient(uri);
    try{
        await client.connect();
        const conf = await client.db('colch_star').collection('configuracion').updateMany({},{$set:{body}});
        return conf;
    }catch (e) {
        console.log(e);
    }finally{
        await client.close();
    }
}


// DeleteOne
async deleteOne(id){
    const client = new MongoClient(uri);
        try {
            await client.connect();
            const conf =  await client.db('colch_star').collection('configuracion').deleteOne({_id: new ObjectId(id)});
            return conf;
        } catch (e) {
            console.log(e);
        }finally{
            await client.close();
        }
    }


// DeleteMany
async deleteMany(body){
    const client = new MongoClient(uri);
    try{
        await client.connect();
        const conf =  await client.db('colch_star').collection('roles').deleteMany(body);
        return conf;
    }catch (e) {
        console.log(e);
    }finally{
        await client.close();
    }

}

}
module.exports = configuracionService;