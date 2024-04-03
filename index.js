import  express  from "express";
import authRouter from './routes/auth.routes.js'

const app = express()

// For the auth router
app.use('/api/auth',authRouter)

app.listen(3001,()=>console.log('app is runnig on port 3001'))
