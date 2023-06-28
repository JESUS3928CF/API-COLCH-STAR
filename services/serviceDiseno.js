const { MongoClient, ObjectId } = require('mongodb')
require("dotenv").config();
uri = process.env.URI;
const port = process.env.PORT || 4000;

class serviceDiseno {

    constructor() { }

    //-----------------READ FIND--------------

    async find(limit, offset) {
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const resultado = await client.db('colch_star').collection('diseno').find({})
            .sort({ 'id_diseno': 1 }) 
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
            const resultado = await client.db('colch_star').collection('diseno').findOne({ _id: new ObjectId(id) });
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
                const resultado =  await client.db('colch_star').collection('diseno').insertOne(body);
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
            const resultado = await client.db('colch_star').collection('diseno').insertMany(body);
            return resultado;
        } catch (e) {
            console.log(e);
        } finally {
            await client.close();
        }
    }



    //---------------------updateOne------------

    async updateOne(id, id_prenda_diseno, nombre) {
        const client = new MongoClient(uri);

        try {
            await client.connect();
            const resultado = await client.db('colch_star').collection('diseno').updateOne({ _id: new ObjectId(id) }, {
                $set: {
                    id_prenda_diseno: id_prenda_diseno,
                    nombre:nombre
                   
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
            const resultado = await client.db('colch_star').collection('diseno').updateMany({}, { $set: { body } });

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
            const resultado = await client.db('colch_star').collection('diseno').deleteOne({ _id: new ObjectId(id) });
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
            const resultado = await client.db('colch_star').collection('diseno').deleteMany(body);

            return resultado;

        } catch (e) {
            console.log(e);
        } finally {
            await client.close();
        }
    }


}



module.exports = serviceDiseno;

