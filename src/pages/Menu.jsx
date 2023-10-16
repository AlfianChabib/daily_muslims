import Navbar from "../components/templates/Navbar/Navbar";
import NavbarTop from "../components/templates/Navbar/NavbarTop";
import SideNavbar from "../components/templates/Navbar/SideNavbar";
import HomeIcon from "../components/templates/Navbar/icon/HomeIcon";
import MenuIcon from "../components/templates/Navbar/icon/MenuIcon";
import StarIcon from "../components/templates/Navbar/icon/StarIcon";

export default function Menu() {
  return (
    <section>
      <SideNavbar />
      <NavbarTop text={"Menu"} />
      <div className="flex flex-col px-4">
        <h1>Menu</h1>
      </div>
      <Navbar variant="absolute">
        <HomeIcon />
        <StarIcon />
        <MenuIcon active={true} />
      </Navbar>
    </section>
  );
}
