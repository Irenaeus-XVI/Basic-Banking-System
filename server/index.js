import express from 'express'
import connection from './db/dbConnection.js'
const app = express()
const port = 4000
import cors from 'cors';
app.use(cors())
import userRoutes from './src/modules/user/user.routes.js'
import transferRoutes from './src/modules/transfer/transfer.routes.js'
import { globalErrorHandling } from './src/middleware/GlobalErrorHandling.js'
app.use(express.json())
connection()
app.use(userRoutes)
app.use(transferRoutes)

app.use(globalErrorHandling)
app.listen(port, () => console.log(`Server listening on port ${port}!`)) 