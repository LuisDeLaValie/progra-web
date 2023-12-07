import React,{useState, useEffect} from 'react'
import axios from 'axios';
import './temas.css';

function Temas() {
  const [temas, setTemas] = useState([]);


  useEffect(() => async ()=>{
    setTemas(await getTemas());
  }, []);





  return (
    <div>
      <h1>Temas</h1>
        <div className='temas-container'>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tema</th>
                </tr>
            </thead>
            <tbody>
            {temas.map(temas => (
                <tr>
                    <th scope="row">{temas.id_tema}</th>
                    <td>{temas.nombre}</td>
                </tr>
            ))}
            </tbody>
        </table>

        </div>
    </div>
  )
}

export default Temas


var getTemas =async () => {
    const url = 'http://localhost/temas';
    const results = await axios.get(url);
return results.data;
    

}