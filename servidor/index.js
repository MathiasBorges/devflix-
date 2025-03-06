const express = require('express')
const cors=require('cors')
const routes=require('./routes')
const app = express()

const port=3000

const corsOptions ={
    //permitindo a porta do front-end ->
    origin:'*', 
    credentials:true,
    optionSuccessStatus:200
}
app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(routes)

app.get('/',(req,res)=>{
    res.send(`<err>Porta[${port}] <br> Servidor [OK]</err>`)
})


app.listen(port, '192.168.0.138')
