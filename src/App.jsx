import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import CVPage from './Pages/CVPage';
import ContactPage from './Pages/ContactPage';
import ThreeJSPage from './Pages/ThreeJSPage';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/CV" element={<CVPage />} />
          <Route path="/Contacts" element={<ContactPage />} />
          {/* <Route path="/3JS" element={<ThreeJSPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
