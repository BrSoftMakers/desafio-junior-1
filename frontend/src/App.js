import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import GlobalStyle from "./styled";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer />
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
