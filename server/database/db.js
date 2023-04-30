import mongoose from "mongoose";

async function Connection(dbName,user,password){
    const URL = `mongodb+srv://${user}:${password}@${dbName}.vbvb1x2.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true, useNewUrlParser:true});
        console.log("Database Connection is Successfull.");
    }catch(err){
        console.log("There was a error while connecting to database : ",err);
    }
}

export default Connection;