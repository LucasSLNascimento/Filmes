import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Planos from './pages/planos';
import Sobre from './pages/sobre';
import Detalhes from './pages/detalhes';
import Title from './components/Title/index';

function App() {
  return (
    <Router>
      <div className='container'>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <div class='navbar-nav'>
            <ul class="navbar-nav">
              <li><Link className='nav-item nav-link' to='/'>Home</Link></li>
            </ul>
            <Link className='nav-item nav-link' to='/planos'>Planos</Link>
            <Link className='nav-item nav-link' to='/sobre/Lucas'>Sobre</Link>
            </div>
          </div>
        </nav>
        <Title />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='planos' element={<Planos />} />
        <Route path='sobre/:name' element={<Sobre />} />
        <Route path='detalhes/:filme' element={<Detalhes />} />
        <Route path='*' element={<h1>Página Não Encontrada!</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
