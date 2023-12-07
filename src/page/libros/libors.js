import React,{useState, useEffect} from 'react'
import axios from 'axios';

function Libors() {
    const [libros, setLibros] = useState([]);


    useEffect(() => async ()=>{
        setLibros(await getLibros());
    }, []);
  

  return (
    <div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">titulo</th> 
                    <th scope="col">edicion</th> 
                    <th scope="col">editorial</th> 
                    <th scope="col">tema</th> 
                </tr>
            </thead>
            <tbody>
            {libros.map(libro => (
                <tr>
                    <th scope="row">{libro.id_libro}</th>
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