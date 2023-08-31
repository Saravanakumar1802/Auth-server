import express from 'express'
import { MongoClient } from 'mongodb'
import * as dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import cors from 'cors';


dotenv.config()
const app = express();
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Credentials", "true");
//     res.setHeader("Access-Control-Max-Age", "1800");
//     res.setHeader("Access-Control-Allow-Headers", "content-type");
//     res.setHeader(
//         "Access-Control-Allow-Methods",
//         "PUT, POST, GET, DELETE, PATCH, OPTIONS"
//     );
//     next();
// });

app.use(cors());

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send("❤️⚡🔥💙")
});

// MongoDB Connection
const MONGO_URL = process.env.MONGO_URL;
const client = new MongoClient(MONGO_URL);

await client.connect();
console.log('Mongo is Connected');

app.use(express.json());

//Routes
app.use('/user', userRouter)



app.listen(PORT, () => console.log(`Running Successfully on ${PORT}`));

export { client };