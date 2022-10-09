const {Router}=require('express');
const rutas=Router();
const {getAll, getByNombre,  getByCedula, createPeople, DeletePeople, updatePeople}= require('../controles/controles.js')


rutas.get('/personas', getAll);
rutas.get('/persona/:nombre', getByNombre);
rutas.get('/persona/by/:cedula', getByCedula);
rutas.post('/persona/create', createPeople);
rutas.delete('/persona/delete/:cedula', DeletePeople);
rutas.put('/persona/update/:cedula', updatePeople);



module.exports = rutas;