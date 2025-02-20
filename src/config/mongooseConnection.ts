import mongoose from "mongoose";
import envs from "./envs"

export class MongooseConnection {

    static async connect(){
        try {
            await mongoose.connect(envs.mongoUri)
            console.log('DB Connected!')
        } catch (error) {
            console.log("Can't connect to DB")
        }
       
    }

}

