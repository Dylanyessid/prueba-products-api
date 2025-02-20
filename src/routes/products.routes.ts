import { Request, Response, Router } from "express";
import { getAllProducts } from "../controllers/products.controller";

const router = Router()

router.get('/', (req:Request, res:Response)=>{
    getAllProducts(req,res)
})


export default router