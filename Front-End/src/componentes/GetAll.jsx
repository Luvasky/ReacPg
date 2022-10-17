import React, { useState, useEffect } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function GetAll() {

  
  const valor = useRef();
  const navigate = useNavigate();
  const [persona, setPerssona] = useState([]);
  const [datos, setDatos] = useState({

      nombre:'',
      cedula:'',
      telefono:''
  })

  const getAllPeople = async () => {
    const resul = await fetch("http://localhost:5000/personas", {
      method: "Get",
    });
    const data = await resul.json();
    setPerssona(data);
  };

  const mostrar = (e) =>{        
            datos['nombre'] = e.target.parentNode.parentNode.childNodes[0].textContent
            datos['cedula'] = e.target.parentNode.parentNode.childNodes[1].textContent
            datos['telefono'] = e.target.parentNode.parentNode.childNodes[2].textContent
            console.log(datos.nombre, datos.cedula, datos.telefono)
            alert(`${datos.nombre} ${datos.cedula} ${datos.telefono}`)               
  }

  useEffect(() => {
    getAllPeople();
  }, []);

  return (
    <div className="container-all-table">
      <table className="table table table-striped table-hover  table-bordered">
        <thead>
          <tr className="table-info">
            <th>Nombre</th>
            <th>Cedula</th>
            <th>Telefono</th>
            <th>opciones</th>
          </tr>
        </thead>
        <tbody>
          {persona.map((e) => (
            <tr key={e.id}  >
              <td name= {e.nombre} ref={valor}>{e.nombre}</td>
              <td name={e.cedula}>{e.cedula}</td>
              <td name={e.telefono}>{e.telefono}</td>

          
              <td className="td">
                <button
                  type="button"
                  className="btn btn-primary margen"
                  id="editar"
                  // onClick={(e)=>console.log(e.target.parentNode.parentNode.childNodes)}
                  onClick={mostrar}
                  
                >
                  Editar
                </button>
                <button
                  type="button"
                  className="btn btn-danger margen"
                  id="eliminar"

                >
                  Eliminar
                </button>

             
              </td>
            </tr>
              
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GetAll;
