
//Esquema de Productos en Mongoose , el cual es un ODM para MongoDB y usarlo en Node usando POO

import mongoose, {  Schema } from "mongoose";

const ProductSchema:Schema = new Schema({
    name:{
        type:String
    },
    category:{
        type:String
    },
    price:{
        type:Number
    },
    stock:{
        type:Number
    },
    description:{
        type:String
    },
    brand:{
        type:String
    },
    sku: {
        type:String
    },
    tags:[
        {
            type:String
        }
    ]
})

const Product = mongoose.model('productos', ProductSchema)
export default Product