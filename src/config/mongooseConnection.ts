import mongoose from "mongoose";
import envs from "./envs"


//Clase que administra la conexión a la BD
export class MongooseConnection {


    //Método estático que conecta a la base de datos, para no tener que instanciar la clase
    static async connect(){
        try {
            await mongoose.connect(envs.mongoUri)
            console.log('DB Connected!')
        } catch (error) {
            console.log("Can't connect to DB")
        }
       
    }

}

