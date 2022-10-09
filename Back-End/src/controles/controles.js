const db=require('../db.js')

const getAll = async(req, res) =>{
    const resul = await db.query('SELECT *FROM persona');
    console.log(resul.rows);      
    res.json(resul.rows)

}


const getByNombre = async(req, res) =>{      const nombre=req.params.nombre
     const resul=await db.query(`SELECT *FROM persona WHERE nombre = $1`, [nombre]);
     console.log(resul.rows)
     res.json(resul.rows)

}


const getByCedula = async(req, res) =>{
    const cedula = req.params.cedula
    const resul=await db.query("SELECT *FROM persona WHERE cedula = $1", [cedula]);
    res.json(resul.rows)
    console.log(resul.rows);
}

const createPeople = async(req, res) =>{

    const nombre = req.body.nombre
    const cedula = req.body.cedula
    const telefono = req.body.telefono
    const id = req.body.id
    await db.query("INSERT INTO persona(id,nombre, cedula, telefono) VALUES($1, $2, $3, $4)", [id, nombre, cedula, telefono]);
    console.log(
        `nombre : ${nombre}
         cedula: ${cedula}
         telefono: ${telefono}         
        `        
        )
    res.json({mensaje: 'persona insertada'})
}

const DeletePeople = async(req, res) =>{
    const cedula = req.params.cedula
    await db.query("DELETE FROM persona WHERE cedula = $1", [cedula]);
    res.json({mensaje: "persona eliminada"});
}

const updatePeople = async(req, res) =>{
      
    const cedula = req.params.cedula;
    const nombre = req.body.nombre;
    const telefono = req.body.telefono;
    await db.query("UPDATE persona SET nombre = $1, telefono= $2 WHERE cedula = $3", [nombre, telefono, cedula]);

    res.json({mensaje: "persona actualizada"});
}

module.exports= {

    getAll, 
    getByNombre,
    getByCedula,
    createPeople,
    DeletePeople,
    updatePeople


}