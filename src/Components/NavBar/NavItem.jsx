import { Link } from 'react-router-dom';
function NavItem({ route, text, up = true}) {
    const GoUp = () => {
        if (up) {
            window.scrollTo(0, 0);
        }
    }

    return (
        <>
            <Link className="text-neutral-500 hover:text-white text-xl sm:text-3xl" to={route} onClick={GoUp}>{text}</Link>
        </>
    )
}

export default NavItem