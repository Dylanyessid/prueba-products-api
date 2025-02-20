//Esquema de Precios especiales en Mongoose , el cual es un ODM para MongoDB y usarlo en Node usando POO
import mongoose, {  Schema } from "mongoose";

const SpecialPricesSchema:Schema = new Schema({
    user:{
        type:String
    },
    product:{
        type:String
    },
    newPrice:{
        type:Number
    }
})

const SpecialPrice = mongoose.model('preciosEspecialesLopez19', SpecialPricesSchema)
export default SpecialPrice