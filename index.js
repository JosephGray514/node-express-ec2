import express from 'express'

const app = express()

app.get('/', (req,res) =>{
    res.status(200).send('Hola')
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});