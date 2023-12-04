import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Inicio from './page/inicio/Inicio'
import Temas from './page/temas/Temas'
import Autores from './page/autores/Autores'
import NotFound from './page/not fount/NotFound';
import NavBar from './componentes/nav bar/NavBAr';
import Agregartema from './page/agregartema/agregartema';

function App(props) {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={ <Inicio/> }/>
        <Route path='/temas' element={ <Temas/> }/>
        <Route path='/autores' element={ <Autores/> }/>
        <Route path='/agregartema' element={ <Agregartema/> }/>
        
        <Route path='/*' element={ <NotFound/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
