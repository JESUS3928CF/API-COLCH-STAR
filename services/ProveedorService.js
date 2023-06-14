const { MongoClient, ObjectId } = require('mongodb')
require("dotenv").config();
const uri = process.env.URI;
const port = process.env.PORT || 4000;



class ProveedorService {

    constructor() { }

    //-----------------READ FIND--------------

    async find(limit, offset) {
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const resultado = await client.db('colch_star').collection('Proveedor').find({}).skip(Number(offset)).limit(Number(limit)).toArray();
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
            const resultado = await client.db('colch_star').collection('Proveedor').findOne({ _id: new ObjectId(id) });
            return resultado;
        } catch (e) {
            console.log(e);
        } finally {
            await client.close();
        }
    }



    //----------------------InsertOne------------------------------

    // async insertOne(body){
    //     const client = new MongoClient(uri);
    //         try {
    //             await client.connect();
    //             const resultado =  await client.db('colch_star').collection('Proveedor').insertOne(body);
    //             return resultado;
    //         } catch (e) {
    //             console.log(e);
    //         }finally{
    //             await client.close();
    //         }
    // } 


    //----------------------InsertMany------------------------------

    async insertMany(body) {
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const resultado = await client.db('colch_star').collection('Proveedor').insertMany(body);
            return resultado;
        } catch (e) {
            console.log(e);
        } finally {
            await client.close();
        }
    }



    //---------------------updateOne------------

    async updateOne(id, id_proveedor, nombre, contacto, estado) {
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const resultado = await client.db('colch_star').collection('Proveedor').updateOne({ _id: new ObjectId(id) },
                {
                    $set: {
                        id_proveedor: id_proveedor,
                        nombre: nombre,
                        contacto: contacto,
                        estado: estado

                    }
                });
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
            const resultado = await client.db('colch_star').collection('Proveedor').updateMany({}, { $set: { body } });

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
            const resultado = await client.db('colch_star').collection('Proveedor').deleteOne({ _id: new ObjectId(id) });
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
            const resultado = await client.db('colch_star').collection('Proveedor').deleteMany(body);

            return resultado;

        } catch (e) {
            console.log(e);
        } finally {
            await client.close();
        }
    }


}



module.exports = ProveedorService;

