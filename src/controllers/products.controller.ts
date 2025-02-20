import { Request, Response } from "express";
import Product from "../models/Product";
import { createErrorResponse, createSucessResponse } from "../utils/ResponseMaker";

//Método para obtener los productos
export const getAllProducts = async (req:Request, res:Response) =>{
    try {
        const products = await Product.find().lean()

        if(!products)  return res.status(200).json(createErrorResponse('Not found', 404))

        const response = createSucessResponse(products, 200)
        return res.status(200).json(response)
    } catch (error) {
        const response = createErrorResponse('There was an error', 500)
        return res.status(500).json(response)
    }

}