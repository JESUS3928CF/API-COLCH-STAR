const { MongoClient, ObjectId } = require('mongodb')
require("dotenv").config();
uri = "mongodb+srv://jesus3928cf:1234@cluster0.6sahaj9.mongodb.net/?retryWrites=true&w=majority"
const port = process.env.PORT || 4000;

class servicePrendas {

    constructor() { }

    //-----------------READ FIND--------------

    async find() {
        const client = new MongoClient(uri);
        try {
            await client.connect();
            const resultado = await client
            .db('colch_star')
            .collection('prendas')
            .find({})
            .sort({ id_prenda: 1 })
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
            const resultado = await client
            .db('colch_star')
            .collection('prendas')
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
                const resultado =  await client.db('colch_star').collection('prendas').insertOne(body);
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
            .collection('prendas')
            .insertMany(body);
            return resultado;
        } catch (e) {
            console.log(e);
        } finally {
            await client.close();
        }
    }



    //---------------------updateOne------------

    async updateOne(id, id_prenda, nombre, cantidad, precio, estado, imagen, tipo_tela, genero, publicado, fk_color, fk_talla, fk_diseno) {
        const client = new MongoClient(uri);

        try {
            await client.connect();
            const resultado = await client
            .db('colch_star')
            .collection('prendas')
            .updateOne({ _id: new ObjectId(id) }, {
                $set: {
                    id_prenda: id_prenda,
                    nombre: nombre,
                    cantidad: cantidad,
                    precio: precio,
                    estado: estado,
                    imagen: imagen,
                    tipo_tela: tipo_tela,
                    genero: genero,
                    publicado: publicado,
                    fk_color: fk_color,
                    fk_talla: fk_talla,
                    fk_diseno: fk_diseno
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
            const resultado = await client
            .db('colch_star')
            .collection('prendas')
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
            .collection('prendas')
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
            .collection('prendas')
            .deleteMany(body);

            return resultado;

        } catch (e) {
            console.log(e);
        } finally {
            await client.close();
        }
    }


}



module.exports = servicePrendas;

