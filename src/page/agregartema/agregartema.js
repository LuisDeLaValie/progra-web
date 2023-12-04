import React,{useState} from 'react'
import axios from 'axios';

function Agregartema() {

    const [isError,setIsError] = useState(false);
    const [isLoading,setIsLoading] = useState(false);

  const [formData, setFormData] = useState({  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) =>  {
    e.preventDefault();

    try {
      setIsLoading(true);
      await addTemas(formData);
      setIsLoading(false);
      setIsError(false);
      setFormData({ });
      
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }

  };

  return (
    <form onSubmit={handleSubmit}>                
        <div>
            <label>
            nombre:
            <input name="nombre" value={formData.nombre} onChange={handleChange}></input>
            </label>
            {isError&& <span>Algo salio mal intente mas tarde</span>}
        </div>
        <button type="submit" disabled={isLoading}> {isLoading? "Enviando..":"Enviar" }</button>
    </form> 
  )
}

export default Agregartema


var addTemas =  async (formData) => {
    const url = 'http://localhost/temas';
    const results = await axios.post(url,formData);
}