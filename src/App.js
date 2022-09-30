import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Events from './pages/Events';
import CreateEvent from './pages/CreateEvent';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/event" element={<Events />} />
      </Routes>
    </div>
  );
}

export default App;
