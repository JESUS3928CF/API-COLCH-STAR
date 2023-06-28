const { MongoClient, ObjectId } = require('mongodb')
require("dotenv").config();
uri = process.env.URI;
const port = process.env.PORT || 4000;

class serviceColor {

    constructor() { }

    //-----------------READ FIND--------------

    async find(limit, offset) {
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const resultado = await client.db('colch_star').collection('prenda_color').find({})
            .sort({ 'id_color': 1 }) 
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
            const resultado = await client.db('colch_star').collection('prenda_color').findOne({ _id: new ObjectId(id) });
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
                const resultado =  await client.db('colch_star').collection('prenda_color').insertOne(body);
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
            const resultado = await client.db('colch_star').collection('prenda_color').insertMany(body);
            return resultado;
        } catch (e) {
            console.log(e);
        } finally {
            await client.close();
        }
    }



    //---------------------updateOne------------

    async updateOne(id, id_prenda_color, color,codigo,fk_prenda) {
        const client = new MongoClient(uri);

        try {
            await client.connect();
            const resultado = await client.db('colch_star').collection('prenda_color').updateOne({ _id: new ObjectId(id) }, {
                $set: {
                    id_prenda: id_prenda_color,
                    color: color,
                    codigo:codigo,
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
            const resultado = await client.db('colch_star').collection('prenda_color').updateMany({}, { $set: { body } });

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
            const resultado = await client.db('colch_star').collection('prenda_color').deleteOne({ _id: new ObjectId(id) });
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
            const resultado = await client.db('colch_star').collection('prenda_color').deleteMany(body);

            return resultado;

        } catch (e) {
            console.log(e);
        } finally {
            await client.close();
        }
    }


}



module.exports = serviceColor;

