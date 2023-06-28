const { MongoClient, ObjectId } = require('mongodb')
require("dotenv").config();
const uri = process.env.URI;
const port = process.env.PORT || 4000;

class serviceTalla {

    constructor() { }

    //-----------------READ FIND--------------

    async find(limit, offset) {
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const resultado = await client.db('colch_star').collection('prenda_talla')
            .find({})
            .sort({ 'id_prenda_talla': 1 }) 
            .skip(Number(offset))
            .limit(Number(limit))
            .toArray();
            return resultado;
        } catch (e) {
            console.log(e);
        } finally {
            await client.close();
        }
    }


    //------------------------READ findOne----------------

    async findOne(id) {
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const resultado = await client.db('colch_star').collection('prenda_talla').findOne({ _id: new ObjectId(id) });
            return resultado;
        } catch (e) {
            console.log(e);
        } finally {
            await client.close();
        }
    }



    //----------------------InsertOne------------------------------

    async insertOne(body){
        const client = new MongoClient(uri);
            try {
                await client.connect();
                const resultado =  await client.db('colch_star').collection('prenda_talla').insertOne(body);
                return resultado;
            } catch (e) {
                console.log(e);
            }finally{
                await client.close();
            }
    } 


    //----------------------InsertMany------------------------------

    async insertMany(body) {
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const resultado = await client.db('colch_star').collection('prenda_talla').insertMany(body);
            return resultado;
        } catch (e) {
            console.log(e);
        } finally {
            await client.close();
        }
    }



    //---------------------updateOne------------

    async updateOne(id, id_prenda_talla, talla,fk_prenda) {
        const client = new MongoClient(uri);

        try {
            await client.connect();
            const resultado = await client.db('colch_star').collection('prenda_talla').updateOne({ _id: new ObjectId(id) }, {
                $set: {
                    id_prenda_talla: id_prenda_talla,
                    talla: talla,
                    fk_prenda:fk_prenda
                }
                    
            });
            return resultado;

        } catch (e) {
            console.log(e)
        } finally {
            await client.close();
        }
    }



    //--------------------------------UpdateMany------------------------------

    async updateMany(body) {
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const resultado = await client.db('colch_star').collection('prenda_talla').updateMany({}, { $set: { body } });

            return resultado;

        } catch (e) {
            console.log(e);
        } finally {
            await client.close();
        }
    }


    // ----------------------------------------------DeleteOne------------------------------

    async deleteOne(id) {
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const resultado = await client.db('colch_star').collection('prenda_talla').deleteOne({ _id: new ObjectId(id) });
            return resultado;
        } catch (e) {
            console.log(e);
        } finally {
            await client.close();
        }
    }

    //----------------------------------------DeleteMany--------------------

    async deleteMany(body) {
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const resultado = await client.db('colch_star').collection('prenda_talla').deleteMany(body);

            return resultado;

        } catch (e) {
            console.log(e);
        } finally {
            await client.close();
        }
    }


}



module.exports = serviceTalla;

