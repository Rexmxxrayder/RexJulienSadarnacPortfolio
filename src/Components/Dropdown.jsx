import "./Dropdown.css"
import React, { useState, useRef, useEffect } from 'react';
function Dropdown({ title }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdown = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(prevState => !prevState);
    }



    return (
        <>
            <div className="px-20 dropdown" onPointerLeave={() => setIsOpen(false)}>
                <button>
                    <div className="relative flex items-center" onClick={toggleDropdown}>
                        <span className="text-white text-3xl">{title}</span>
                        <img className="pl-2 h-4 absolute top-4 left-[90px]" src="Img/Content/Miscellaneous/Arrow_Down.png"></img>
                    </div>
                </button>
                {isOpen && (
                    <div ref={dropdown} className="dropdown-content">
                        <div className="h-[30px]">

                        </div>
                        <a href="#TimeBreacherContent">
                            <img className="" src="Img/Content/TimeBreachers/Starchain-Gazer-logo.png" onClick={toggleDropdown}></img>
                        </a>
                        <a href="#OutOfThreeContent">
                            <img className="" src="Img/Content/OutOfThree/OutOfThreeLogo.png" onClick={toggleDropdown}></img>
                        </a>
                        <a href="#PumpkidContent">
                            <img className="" src="Img/Content/Pumpkid/PumpkidLogo.png" onClick={toggleDropdown}></img>
                        </a>
                        <a href="#SharkTapContent">
                            <img className="" src="Img/Content/SharkTap/SharkTapLogo.png" onClick={toggleDropdown}></img>
                        </a>
                    </div>
                )}
            </div>
        </>
    )
}

export default Dropdown