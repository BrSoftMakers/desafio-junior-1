// CSS
import { GlobalStyles } from "./styles/global-styles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
// Component
import Navbar from "./components/Navbar";
// Router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// Page s
import Home from "./pages/Home";
import Pets from "./pages/Pets";
import EditPet from "./pages/EditPet/index";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/pets/edit/:id" element={<EditPet />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <GlobalStyles />
      </ThemeProvider>
    </Router>
  );
}

export default App;
