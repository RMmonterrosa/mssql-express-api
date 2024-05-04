import mExpress from 'express' // ó  const mExpress = require('express') 
import routes from './routes/ejemplo.rutas.js'
import cors from 'cors'



const app = mExpress()
app.use(cors())

app.use(mExpress.json())
app.use(routes) 

export default app 