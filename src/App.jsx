import './App.css';
import MainPage from './Pages/MainPage';
import CVPage from './Pages/CVPage';
import ContactPage from './Pages/ContactPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/CV" element={<CVPage />} />
          <Route path="/Contacts" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
