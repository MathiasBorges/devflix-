const express = require('express')
const cors=require('cors')
const routes=require('./routes')
const app = express()

const isProduction = process.env.NODE_ENV === "production";

const port=3000 || process.env.PORT

const corsOptions = {
    //permitindo front
    origin:'https://devflix-493y.onrender.com/', // Permitir o frontend da produção e qualquer origem no desenvolvimento
    credentials: true,
    optionsSuccessStatus: 200
  };
  
app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(routes)

app.get('/',(req,res)=>{
    res.send(`<err>Porta[${port}] <br> Servidor [OK]</err>`)
})


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });