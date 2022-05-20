import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from "./components/navbar";
import About from "./components/about";
import Contact from "./components/contact";
import Portfolio from "./components/portfolio";
import Home from './pages/home';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/about" element={About}/>
            <Route path="/portfolio" element={Portfolio}/>
            <Route path="/contact" element={Contact}/>
          </Routes>
        </Router>
        <Home />
      </div>
    </ThemeProvider>

  );
}

export default App;
