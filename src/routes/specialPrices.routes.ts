import { Request, Response, Router } from "express";
import { getAllProducts } from "../controllers/products.controller";
import { createSpecialPrice, getAllSpecialPrices, getByUser } from "../controllers/specialPrices.controller";

const router = Router()

router.get('/', (req:Request, res:Response)=>{
    getAllSpecialPrices(req,res)
})

router.get('/:user',(req:Request, res:Response)=>{
    getByUser(req,res)
} )

router.post('/', (req:Request, res:Response)=>{
    createSpecialPrice(req,res)
})


export default router