import { Router } from "express"; // Extraer el modulo Router de Express
import {getEjemplo, gidEjemplo, postEjemplo, pidEjemplo, deleteEjemplo} from '../controllers/ejemplo.controllers.js' // Exportar funciones de controles
const router = Router()

router.get('/ejemplo', getEjemplo)

router.get('/ejemplo/:id', gidEjemplo)

router.post('/ejemplo', postEjemplo)

router.put('/ejemplo/:id', pidEjemplo)

router.delete('/ejemplo/:id', deleteEjemplo)

export default router // Exportar Routers