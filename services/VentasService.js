const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();
const uri = process.env.URI;
const port = process.env.PORT || 4000;

class CompraService {
    constructor() {}

    //-----------------READ FIND--------------

    
    async find(limit, offset) {
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const usuarios = await client
                .db('colch_star')
                .collection('venta')
                .find({})
                .sort({ id_venta: 1 }) // Orden ascendente por id:usuario
                .skip(Number(offset))
                .limit(Number(limit))
                .toArray();
            return usuarios;
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
            const resultado = await client
                .db('colch_star')
                .collection('venta')
                .findOne({ _id: new ObjectId(id) });
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
                const resultado =  await client.db('colch_star').collection('venta').insertOne(body);
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
            const resultado = await client
                .db('colch_star')
                .collection('venta')
                .insertMany(body);
            return resultado;
        } catch (e) {
            console.log(e);
        } finally {
            await client.close();
        }
    }

    //---------------------updateOne------------

    async updateOne(id, id_venta, precio_total, estado_de_venta) {
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const resultado = await client
                .db('colch_star')
                .collection('venta')
                .updateOne(
                    { _id: new ObjectId(id) },
                    {
                        $set: {
                            precio_total: precio_total,
                            estado_de_venta: estado_de_venta,
                            id_venta: id_venta,
                        },
                    }
                );
            return resultado;
        } catch (e) {
            console.log(e);
        } finally {
            await client.close();
        }
    }

    //--------------------------------UpdateMany------------------------------

    async updateMany(body) {
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const resultado = await client
                .db('colch_star')
                .collection('venta')
                .updateMany({}, { $set: { body } });

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
            const resultado = await client
                .db('colch_star')
                .collection('venta')
                .deleteOne({ _id: new ObjectId(id) });
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
            const resultado = await client
                .db('colch_star')
                .collection('venta')
                .deleteMany(body);

            return resultado;
        } catch (e) {
            console.log(e);
        } finally {
            await client.close();
        }
    }
}

module.exports = CompraService;
