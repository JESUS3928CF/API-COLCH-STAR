const {MongoClient,ObjectId} = require('mongodb')
require("dotenv").config();
const uri = process.env.URI;
const port = process.env.PORT || 4000;

// READ
class usuariosService{
    constructor(){}
    async find(){
        const client = new MongoClient(uri);
        try{
            await client.connect();
            const usuarios =  await client.db('mi_base').collection('usuarios').find({}).limit(10).toArray();
            return usuarios;
        }catch (e) {
            console.log(e);
        }finally{
            await client.close();
        }
    }

// // UPDATE
// async updateOne(id,nombre,apellido){
//     const client = new MongoClient(uri);
//         try {
//             await client.connect();
//             const users =  await client.db('mi_base').collection('usuarios').updateOne({_id: new ObjectId(id)},
//             {
//                 $set:{
//                     nombre : nombre,
//                     apellido : apellido,
//                 }});
//                 return users;
//         } catch (e) {
//             console.log(e);
//         }finally{
//             await client.close();
//         }

//     }

}






    // DELETE


module.exports = usuariosService;