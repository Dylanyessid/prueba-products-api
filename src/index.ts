import express from "express"
import morgan from "morgan"
import envs from "./config/envs"
import routes from "./routes"
import { MongooseConnection } from "./config/mongooseConnection"
import cors from 'cors'


//Creación de app backend express
const app = express()

//Middlewares para cors, usar JSON, registro de APIs y llamadas
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use('/api/v1', routes)

//Levantar el servidor
app.listen(envs.port,async()=>{
    await MongooseConnection.connect()
    console.log(`Server listening on port ${envs.port}`)
})