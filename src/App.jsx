import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Page/MainPage/MainPage';
import ProjectsBody from "./Page/MainPage/ProjectsBody"
import CVBody from "./Page/MainPage/CVBody.jsx"
import ContactBody from "./Page/MainPage/ContactBody.jsx"
import ThreeJSPage from './Page/ThreePage/ThreeJSPage.jsx';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} >
            <Route path="" element={<ProjectsBody />} />
            <Route path="CV" element={<CVBody />} />
            <Route path="Contacts" element={<ContactBody />} />
          </Route >
          <Route path="/3JS" element={<ThreeJSPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
