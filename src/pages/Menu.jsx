import Navbar from "../components/templates/Navbar/Navbar";
import NavbarTop from "../components/templates/Navbar/NavbarTop";
import HomeIcon from "../components/templates/Navbar/icon/HomeIcon";
import MenuIcon from "../components/templates/Navbar/icon/MenuIcon";
import StarIcon from "../components/templates/Navbar/icon/StarIcon";

export default function Menu() {
  return (
    <section>
      <NavbarTop text={"Semua Menu"} />
      <div className="flex flex-col px-4">
        <h1>Semua Menu</h1>
      </div>
      <Navbar variant="absolute">
        <HomeIcon />
        <StarIcon />
        <MenuIcon active={true} />
      </Navbar>
    </section>
  );
}
