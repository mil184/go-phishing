import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Question from './pages/Question';
import Navbar from './components/Navbar';
import End from './pages/End';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions/:id" element={<Question />} />
          <Route path="/end" element={<End/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
