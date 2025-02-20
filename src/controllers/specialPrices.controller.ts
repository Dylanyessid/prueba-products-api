import { Request, Response } from "express"
import SpecialPrice from "../models/SpecialPrice"
import { createErrorResponse, createSucessResponse } from "../utils/ResponseMaker"

//Método para obtener los productos con precios especiales
export const getAllSpecialPrices = async (req:Request, res:Response) =>{
    try {
        const specialPrices = await SpecialPrice.find().lean()

        if(!specialPrices)  return res.status(200).json(createErrorResponse('Not found', 404))

        const response = createSucessResponse(specialPrices, 200)
        return res.status(200).json(response)
    } catch (error) {
        const response = createErrorResponse('There was an error', 500)
        return res.status(500).json(response)
    }
}
//Método para obtener los productos con precios especiales por usuario
export const getByUser = async (req:Request, res:Response) => {
    try {
        const {user} = req.params




        const specialPrices = await SpecialPrice.find(
            {
                user
            }
        ).lean()

        if(!specialPrices ||  !specialPrices.length)  return res.status(200).json(createErrorResponse('Not found', 404))

        const response = createSucessResponse(specialPrices, 200)
        return res.status(200).json(response)
    } catch (error) {
        const response = createErrorResponse('There was an error', 500)
        return res.status(500).json(response)
    }
}

//Método para crear los  precios especiales
export const createSpecialPrice = async (req:Request, res:Response) => {
    try {
        const {user, product, newPrice} = req.body
        const specialPrices = await SpecialPrice.find(
            {
                user
            }
        ).lean()

        if(!specialPrices.length) return res.status(404).json(createErrorResponse('User not found', 404))

        const specialPrice = await SpecialPrice.create({user, product,newPrice})

        if(!specialPrice )  return res.status(400).json(createErrorResponse('Incorrect fields', 404))

        const response = createSucessResponse(specialPrice, 200)
        return res.status(200).json(response)
    } catch (error) {
        const response = createErrorResponse('There was an error', 500)
        return res.status(500).json(response)
    }
}