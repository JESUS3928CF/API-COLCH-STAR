const { MongoClient, ObjectId } = require('mongodb')
require("dotenv").config();
const uri = process.env.URI;
const port = process.env.PORT || 4000;

//Find -- Read
class usuariosService {
    constructor() { }
    async find(limit, offset) {
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const usuarios = await client
                .db('colch_star')
                .collection('usuarios')
                .find({})
                .sort({ 'id_usuario': 1 }) // Orden ascendente por id:usuario
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


    // FindOne
    async findOne(id) {
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const usuario = await client.db('colch_star').collection('usuarios').findOne({ _id: new ObjectId(id) });
            return usuario;
        } catch (e) {
            console.log(e);
        } finally {
            await client.close();
        }
    }


    // //InsertOne
    // async insertOne(body){
    //     const client = new MongoClient(uri);
    //     try{
    //         await client.connect();
    //         const users =  await client.db('colch_star').collection('usuarios').insertOne(body);
    //         return users;
    //     }catch (e) {
    //         console.log(e);
    //     }finally{
    //         await client.close();
    //     }
    // }


    //InsertMany
    async insertMany(body) {
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const users = await client.db('colch_star').collection('usuarios').insertMany(body);
            return users;
        } catch (e) {
            console.log(e);
        } finally {
            await client.close();
        }
    }


    // UpdateOne
    async updateOne(id, nombre, apellido) {
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const users = await client.db('colch_star').collection('usuarios').updateOne({ _id: new ObjectId(id) },
                {
                    $set: {
                        nombre: nombre,
                        apellido: apellido,
                    }
                });
            return users;
        } catch (e) {
            console.log(e);
        } finally {
            await client.close();
        }

    }



    //UpdateMany
    async updateMany(body) {
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const users = await client.db('colch_star').collection('usuarios').updateMany({}, { $set: { estado: body } });
            return users;
        } catch (e) {
            console.log(e);
        } finally {
            await client.close();
        }
    }



    // DeleteOne
    async deleteOne(id) {
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const users = await client.db('colch_star').collection('usuarios').deleteOne({ _id: new ObjectId(id) });
            return users;
        } catch (e) {
            console.log(e);
        } finally {
            await client.close();
        }
    }



    // DeleteMany
    async deleteMany(body) {
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const users = await client.db('colch_star').collection('usuarios').deleteMany(body);
            return users;
        } catch (e) {
            console.log(e);
        } finally {
            await client.close();
        }
    }

}
module.exports = usuariosService;