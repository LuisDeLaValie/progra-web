import React,{useState, useEffect} from 'react'
import axios from 'axios';
// import './temas.css';

function Autores() {
  const [autores, setAutores] = useState([]);


  useEffect(() => async ()=>{
    setAutores(await getAutores());
  }, []);





  return (
    <div>
      <h1>Auores</h1>
        <div className='temas-container'>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                </tr>
            </thead>
            <tbody>
            {autores.map(autor => (
                <tr>
                    <th scope="row">{autor.id_autor}</th>
                    <td>{autor.nombre}</td>
                    <td>{autor.apellidos}</td>
                </tr>
            ))}
            </tbody>
        </table>

        </div>
    </div>
  )
}

export default Autores


var getAutores =async () => {
    const url = 'http://localhost/Autores';
    const results = await axios.get(url);
return results.data;
    

}