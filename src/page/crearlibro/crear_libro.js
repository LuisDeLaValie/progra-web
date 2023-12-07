import React, { useState } from 'react'
import SelectData from '../../componentes/select/SelectData'
import axios from 'axios';

function CrearLibro() {


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
          console.log(formData);
          await addlibro(formData);
          setIsLoading(false);
          setIsError(false);
        //   setFormData({ });
          
        } catch (error) {
          setIsError(true);
          setIsLoading(false);
        }
    
      };

  return (
  <div className='form-container'>
    <form className="row g-3" onSubmit={handleSubmit}>
      <div className="col-md-6">
        <label for="inputEmail4" className="form-label">Titulo</label>
        <input name="titulo" className="form-control" value={formData.nombre} onChange={handleChange}/>
      </div>
      <div className="col-md-6">
        <label for="inputPassword4" className="form-label">Edicios</label>
        <input name="edicion" className="form-control" value={formData.nombre} onChange={handleChange}/>
      </div>
      <div className="col-md-12">
        <label for="inputState" className="form-label">Autor</label>
        <SelectData listado={"autores"} name="fk_id_autor"  onChange={handleChange}></SelectData>
      </div>
      <div className="col-md-12">
        <label for="inputState" className="form-label">Editorial</label>
        <SelectData listado={"editorial"} name="fk_id_editorial"  onChange={handleChange}></SelectData>
      </div>
      <div className="col-md-12">
        <label for="inputState" className="form-label">Tema</label>
        <SelectData listado={"temas"} name="fk_id_tema"  onChange={handleChange}></SelectData>
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary" disabled={isLoading}> {isLoading? "Enviando..":"Enviar" }</button>
      </div>
    </form>
  </div>
  )
}

export default CrearLibro


var addlibro =  async (formData) => {
    const url = 'http://localhost/libros';
    const results = await axios.post(url,formData);
}