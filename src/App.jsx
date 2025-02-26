import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/login';
import About from './Pages/About';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/About" element={<About />} />

      </Routes>
    </Router>
  );
}

export default App;
