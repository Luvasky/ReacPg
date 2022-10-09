import React, {useState} from 'react'
import '../App.css'

function Edit() {

  const[persona, setPerosna] = useState({
    nombre: '',
    telefono :'',
    cedula :''
  });

  const capInput = (e) =>{

    setPerosna({...persona, [e.target.id]: e.target.value})
    console.log(persona)
  }

  const peticion = async(req, res) =>{

    

    await fetch(`http://localhost:5000/persona/update/${persona.cedula}`,{

    method: 'PUT',
    body:  JSON.stringify(persona),
    headers: {"Content-Type": "application/json"}


    })

    console.log('persona actualizada')

  }
  
  

  return (
    <div className='container-all-table'>
       <form className='"row g-3 needs-validation"' onSubmit={(e) =>e.preventDefault()}>
       <div className="col-md-4">
    <label  className="form-label">Cedula</label>
    <input type="text" className="form-control" id="cedula"  onChange={capInput}/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>

  <div className="col-md-4">
    <label  className="form-label">Nombre</label>
    <input type="text" className="form-control" id="nombre" onChange={capInput} />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>

  <div className="col-md-4">
    <label  className="form-label">Telefono</label>
    <input type="text" className="form-control" id="telefono"  onChange={capInput} />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit" onClick={peticion}>Enviar</button>
  </div>

       </form>
    </div>
  )
}

export default Edit
