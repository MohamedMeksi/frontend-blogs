import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/login';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
