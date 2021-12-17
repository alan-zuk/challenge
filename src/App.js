import './App.css';
import { Welcome } from './views/welcome/Welcome';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
