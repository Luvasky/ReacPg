const express=require('express');
const db=require('./db.js');
const cors = require("cors")


const app=express();
app.use(cors())







//middlewaes 
db.connect();
app.use(express.json());    //acepta datos tipo json
app.use(express.urlencoded({extended: false}));  //acepta datos de un formulario
app.use(require('./rutas/rutas.js'))


app.get('/', (req, res) =>{
    res.send("Servidro levantado")
})
app.listen(5000, () =>{

    console.log('http://localhost:5000','levantado');


});


