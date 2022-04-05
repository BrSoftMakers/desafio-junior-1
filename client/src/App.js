
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/pages/Home.js';
import AboutUs from './components/pages/AboutsUs.js';
import Contact from './components/pages/Contact.js';
import Register from './components/pages/Register.js'
import Consult from './components/pages/Consult.js';
import Navbar from './components/Navbar.js';
import Edit from './components/pages/Edit.js';

function App() {
  return (
    /* Rotas da aplicação */ 
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/sobre-nos" element={<AboutUs />} />
        <Route path="/contatos" element={<Contact />} />
        <Route path="/agendar" element={<Register />} />

        <Route path="/consultar">
          <Route index element={<Consult/>} />
        </Route>

        <Route path="/editar">
          <Route path=":id" element={<Edit/>} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
