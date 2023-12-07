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
    <div className='form-container'>
      <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">nombre</label>
              <input name="nombre" className="form-control" value={formData.nombre} onChange={handleChange}></input>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary" disabled={isLoading}> {isLoading? "Enviando..":"Enviar" }</button>
            </div>
          </form>
    </div>
  )
}

export default Agregartema


var addTemas =  async (formData) => {
    const url = 'http://localhost/temas';
    const results = await axios.post(url,formData);
}