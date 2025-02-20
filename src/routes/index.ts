import { Router } from "express";
import productRoutes from "./products.routes"
import specialPricesRoutes from "./specialPrices.routes"


const router = Router()

router.use('/products',productRoutes )
router.use('/specialPrices', specialPricesRoutes)

export default router