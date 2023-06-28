const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();
const uri = process.env.URI;
const port = process.env.PORT || 4000;

class DetalleCompraService {
    constructor() { }

    //-----------------READ FIND--------------

    async find() {
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const resultado = await client
                .db('colch_star')
                .collection('detalle_venta')
                .find({})
                .limit(10)
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
            const resultado = await client
                .db('colch_star')
                .collection('detalle_venta')
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
                const resultado =  await client.db('colch_star').collection('detalle_venta').insertOne(body);
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
                .collection('detalle_venta')
                .insertMany(body);
            return resultado;
        } catch (e) {
            console.log(e);
        } finally {
            await client.close();
        }
    }

    //---------------------updateOne------------

    async updateOne(
        id,
        id_detalle_venta,
        cantidad,
        subtotal,
    ) {
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const resultado = await client
                .db('colch_star')
                .collection('detalle_venta')
                .updateOne(
                    { _id: new ObjectId(id) },
                    {
                        $set: {
                            id_detalle_venta: id_detalle_venta,
                            cantidad: cantidad,
                            subtotal: subtotal,
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
                .collection('detalle_venta')
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
                .collection('detalle_venta')
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
                .collection('detalle_venta')
                .deleteMany(body);

            return resultado;
        } catch (e) {
            console.log(e);
        } finally {
            await client.close();
        }
    }
}

module.exports = DetalleCompraService;
