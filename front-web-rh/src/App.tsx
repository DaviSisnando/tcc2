import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListEmployee from 'pages/ListEmployee';
import Register from 'pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListEmployee />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
