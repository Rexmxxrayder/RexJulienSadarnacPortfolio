import NavItem from './NavItem';
import NavDropdownItem from './NavDropdownItem';
function NavBar() {
  const dropdown = [
    ["#TimeBreacherContent", "Img/Content/TimeBreachers/Starchain-Gazer-logo.png"],
    ["#OutOfThreeContent", "Img/Content/OutOfThree/OutOfThreeLogo.png"],
    ["#PumpkidContent", "Img/Content/Pumpkid/PumpkidLogo.png"],
    ["#SharkTapContent", "Img/Content/SharkTap/SharkTapLogo.png"]
  ];

  return (
    <>
      <div className="NavBar sticky top-0 w-full h-20">
        <div className='h-full flex justify-evenly items-center'>
          <NavDropdownItem route="/" text="Projets" dropdown={dropdown} />
          <NavItem route="/CV" text="CV" />
          <NavItem route="/Contacts" text="Contacts" />
          <NavItem route="/3JS" text="3JS" />
        </div>
      </div>
    </>
  )
}

export default NavBar