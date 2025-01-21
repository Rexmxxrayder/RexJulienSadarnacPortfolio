import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from "../../Components/Footer.jsx"
import NavBar from "../../Components/NavBar/NavBar.jsx"
function MainPage() {
    return (
        <>
            <NavBar />
            <div className="PageBody">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default MainPage