import { useLocation } from 'react-router-dom';
import { useState, useRef } from 'react';
import NavItem from './NavItem';
function NavDropdownItem({ route, text, dropdown }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const location = useLocation();

    const toggleDropdown = () => {
        setIsOpen(prevState => !prevState);
    }


    const dropdownContent = () => {
        return dropdown.map((value) => {
            return (
                <a href={value[0]} key={value[1]}>
                    <img className="" src={value[1]} onClick={toggleDropdown}></img>
                </a>
            );
        });
    }

    return (
        <>
            {location.pathname === route && (
                <div className='relative' onPointerLeave={() => setIsOpen(false)}>
                    <div className='NavGray flex items-center' onClick={toggleDropdown}>
                        <NavItem text={text} up={false}/>
                        <img className={"h-2 sm:h-4 realtive top-4 right-[0px] sm:right-[0px]" + (isOpen ? " rotate-180 pr-2" : " pl-2")} src="Img/Content/Miscellaneous/Arrow_Down.png"></img>
                    </div>
                    {isOpen && (
                        <div ref={dropdownRef} className="dropdown-content">
                            <div className="h-[30px]"></div>
                            {dropdownContent()}
                        </div>
                    )}
                </div>
            )}
            {location.pathname !== route && (
                <NavItem route={route} text={text} />
            )}

        </>
    )
}

export default NavDropdownItem