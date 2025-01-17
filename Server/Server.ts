import express, { request } from 'express';
const app = express();
require('dotenv').config();
const port = process.env.PORT;
app.use(express.json());
import { Request , Response } from 'express';
app.get('/' , (req : Request , res : Response) => {
    res.json({
        message: "Hello World!",
        status : 200
    });
});
app.listen(port , () => {
    console.log(`Running on port ${port}`);
})