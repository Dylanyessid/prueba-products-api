import 'dotenv/config'
import Joi from 'joi'


//Validación de las variables de entorno en el .env
const envsSchema = Joi.object({
    PORT:Joi.number().required(),
    MONGO_URI:Joi.string().required()
}).unknown(true)

interface IEnvVars {
    PORT:number,
    MONGO_URI:string
}

//Se validan con Joi
const {error, value} = envsSchema.validate(process.env);

if(error){
    throw new Error(`Config validation error: ${error.message}`);
}  

//En caso exitoso, se exportan las variables al resto del proyecto
const envVars: IEnvVars = value
const envs ={
    port: envVars.PORT,
    mongoUri:envVars.MONGO_URI
}

export default envs