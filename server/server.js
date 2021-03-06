import express from 'express';
import dotenv from 'dotenv';
const app = express();
import colors from 'colors';
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
const PORT = process.env.PORT || 5000;

dotenv.config()
connectDB()

app.get('/', (req, res) => {
    res.send('API is running')
})

app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID))

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, (err) => {
    if (err) return console.log('unable to connect server')
    console.log(`server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`.yellow.bold)
})