import { Container } from 'react-bootstrap';
import './bootstrap.min.css'
import './App.css'
// import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
function App() {
  return (
    <div className="App ">
      <Router>
        
          <Header />
          <main className="main_screen py-3">
            <Container>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </Container>
          </main>
        
      </Router>
    </div>
  );
}

export default App;
