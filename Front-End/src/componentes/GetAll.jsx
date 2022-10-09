import React, {useState, useEffect} from 'react'
import '../App.css'
import {useNavigate} from 'react-router-dom'

function GetAll() {

    const navigate = useNavigate();

    

    const[persona, setPerssona]= useState([])


    const getAllPeople = async() =>{

      const resul = await fetch('http://localhost:5000/personas',{
            method: 'Get',
        })
        const data = await resul.json();
        setPerssona(data)
    }

 
      


    useEffect(() =>{

        getAllPeople();

    }, [])

    

  return (
    <div className='container-all-table'>

<table className="table table table-striped table-hover  table-bordered">
  <thead>
    <tr className='table-info'>
      <th >Nombre</th>
      <th >Cedula</th>
      <th >Telefono</th>
      <th>opciones</th>
    </tr>
  </thead>
  <tbody>    
   
    {

        persona.map((e) =>(

                <tr key={e.id}>
                    <td>{e.nombre}</td>
                    <td>{e.cedula}</td>
                    <td>{e.telefono}</td>
                    <td className='td'>
                      
                    <button type="button" className="btn btn-primary margen" id= 'editar' onClick={() => navigate('/editar')} >Editar</button>
                    <button type="button" className="btn btn-danger margen" id = 'eliminar' onClick={() => navigate('/eliminar')}>Eliminar</button>
                        
                    </td>
                </tr>
            
            ))
    }

  </tbody>
</table>


    </div>
  )
}

export default GetAll
