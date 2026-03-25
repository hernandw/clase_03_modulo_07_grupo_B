import express from 'express'
import { listarProductos, home, postVenta } from '../controllers/productosController.js'

const router = express.Router()


router.get('/', home)

router.get('/productos', listarProductos)

router.post('/productos/vender/:id', postVenta)






export default router