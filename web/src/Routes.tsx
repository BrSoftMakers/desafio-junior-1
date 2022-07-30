import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';

export function AuthRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}