import express from 'express'
import healthRouter from './routes/healthRouter.js'
import itemRouter from './routes/itemRouter.js'
import connectToDatabase from './config/database.js'
import { configDotenv } from 'dotenv'

configDotenv()
connectToDatabase()
const app = express()
app.use(express.json())

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
})

app.use("/", healthRouter);
app.use("/api/item/", itemRouter)

app.use((req, res, next) => {
  res.status(404).json({
    message: 'Resource Not Found',
    status: 404
  });
});

app.listen(3000, () => {
    console.log('Server is running');

})