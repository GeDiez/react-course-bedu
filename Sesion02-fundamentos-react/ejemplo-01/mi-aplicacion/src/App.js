// Como fue mencionado en el archivo index.js, esta línea siempre es necesaria
// cuando un archivo contiene código de React
import React, {useState} from 'react';
import AlumnoCard from "./components/AlumnoCard";

const alumno = {
  firstName: 'Chantal',
  lastName: 'Perez',
  email: 'chantal@bedu.com',
  avatar: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png'
}

// Este es un componente de React que regresa un `div` con una cadena de texto
function App() {
  const [isShowing, toggle] = useState({})
  // const [state, setState] = useState(valorInicial)

  return (
    <div>
      <button onClick={() => toggle(!isShowing)}>open tarjeta de alumno</button>
      <AlumnoCard alumno={alumno} isHidden={!isShowing} />
    </div>
  );
}

// Tenemos que exportar el componente para poder ser usado en cualquier otro
// archivo de React
export default App;
