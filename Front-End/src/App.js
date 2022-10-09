import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import GetAll from './componentes/GetAll';
import Edit from './componentes/Edit';
import Eliminar from './componentes/Eliminar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/lista' element={<GetAll></GetAll>}/>
          <Route path='/editar' element={<Edit></Edit>}/>
          <Route path='/eliminar' element={<Eliminar></Eliminar>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
