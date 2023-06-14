const {MongoClient,ObjectId} = require('mongodb')
require("dotenv").config();
const uri = process.env.URI;
const port = process.env.PORT || 4000;

//Find -- Read
class rolesService{
    constructor(){}
    async find(limit,offset){
        const client = new MongoClient(uri);
        try{
            await client.connect();
            const roles =  await client.db('colch_star').collection('roles').find({}).skip(Number(offset)).limit(Number(limit)).toArray();
            return roles;
        }catch (e) {
            console.log(e);
        }finally{
            await client.close();
        }
    }

// FindOne
async findOne(id){
    const client = new MongoClient(uri);
        try {
            await client.connect();
            const rol =  await client.db('colch_star').collection('roles').findOne({_id: new ObjectId(id)});
            return rol;
        } catch (e) {
            console.log(e);
        }finally{
            await client.close();
        }
}


// //InsertOne
// async insertOne(body){
//     const client = new MongoClient(uri);
//     try{
//         await client.connect();
//         const role =  await client.db('colch_star').collection('roles').insertOne(body);
//         return role;
//     }catch (e) {
//         console.log(e);
//     }finally{
//         await client.close();
//     }
// }


//InsertMany
async insertMany(body){
    const client = new MongoClient(uri);
    try{
        await client.connect();
        const role =  await client.db('colch_star').collection('roles').insertMany(body);
        return role;
    }catch (e) {
        console.log(e);
    }finally{
        await client.close();
    }
}


// UpdateOne
async updateOne(id,id_rol,rol){
    const client = new MongoClient(uri);
        try {
            await client.connect();
            const role =  await client.db('colch_star').collection('roles').updateOne({_id: new ObjectId(id)},
            {
                $set:{
                    id_rol : id_rol,
                    rol : rol,
                }});
                return role;
        } catch (e) {
            console.log(e);
        }finally{
            await client.close();
        }

    }



//UpdateMany
async updateMany(body){
    const client = new MongoClient(uri);
    try{
        await client.connect();
        const role = await client.db('colch_star').collection('roles').updateMany({},{$set:{estado:body}});
        return role;
    }catch (e) {
        console.log(e);
    }finally{
        await client.close();
    }
}


// DeleteOne
async deleteOne(id){
    const client = new MongoClient(uri);
        try {
            await client.connect();
            const role =  await client.db('colch_star').collection('roles').deleteOne({_id: new ObjectId(id)});
            return role;
        } catch (e) {
            console.log(e);
        }finally{
            await client.close();
        }
    }

// DeleteMany
    async deleteMany(body){
        const client = new MongoClient(uri);
        try{
            await client.connect();
            const role =  await client.db('colch_star').collection('roles').deleteMany(body);
            return role;
        }catch (e) {
            console.log(e);
        }finally{
            await client.close();
        }
    
    }

}

module.exports = rolesService;