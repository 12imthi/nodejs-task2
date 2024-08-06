import express from 'express';
import cors from 'cors';
import router from './Routers/CreatingRooms.js'


const app = express();
const PORT = 5000;

app.use(cors())

app.use(express.json())

app.use('/api',router)

app.get('/',(req,res)=>{
    res.status(200).send('hello api')
})


app.listen(PORT,()=> {
    console.log(`app is runing ${PORT}`);
})