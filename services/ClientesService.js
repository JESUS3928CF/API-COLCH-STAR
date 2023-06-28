const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();
const uri = process.env.URI;
const port = process.env.PORT || 4000;

class ClientesService {
    constructor() { }

    //-----------------READ FIND--------------

    async find(limit, offset) {
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const usuarios = await client
                .db('colch_star')
                .collection('cliente')
                .find({})
                .sort({ id_cliente: 1 }) // Orden ascendente por id:usuario
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
                .collection('cliente')
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
                const resultado =  await client.db('colch_star').collection('cliente').insertOne(body);
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
                .collection('cliente')
                .insertMany(body);
            return resultado;
        } catch (e) {
            console.log(e);
        } finally {
            await client.close();
        }
    }

    //---------------------updateOne------------

    async updateOne(id, id_cliente, nombre, estado) {
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const resultado = await client
                .db('colch_star')
                .collection('cliente')
                .updateOne(
                    { _id: new ObjectId(id) },
                    {
                        $set: {
                            id_cliente: id_cliente,
                            nombre: nombre,
                            estado: estado,
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
                .collection('cliente')
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
                .collection('cliente')
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
                .collection('cliente')
                .deleteMany(body);

            return resultado;
        } catch (e) {
            console.log(e);
        } finally {
            await client.close();
        }
    }
}

module.exports = ClientesService;
