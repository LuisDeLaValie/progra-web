import React,{useState, useEffect} from 'react'
import axios from 'axios';

function Libors() {
    const [libros, setLibros] = useState([]);


    useEffect(() => async ()=>{
        setLibros(await getLibros());
    }, []);
  

  return (
    <div>
        <table>
            <thead>
                <tr>
                 <th>titulo</th> 
                 <th>edicion</th> 
                 <th>editorial</th> 
                 <th>tema</th> 
                </tr>
            </thead>   
            <tbody>
            {libros.map(libro => (
                <tr key={libro.id_libro}>
                    <td>{libro.titulo}</td> 
                    <td>{libro.edicion}</td> 
                    <td>{libro.editorial}</td> 
                    <td>{libro.tema}</td> 
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}

export default Libors


var getLibros =async () => {
    const url = 'http://localhost/libros';
    const results = await axios.get(url);
return results.data;
}