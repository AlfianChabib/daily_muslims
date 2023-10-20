import Navbar from "../../components/templates/Navbar/Navbar";
import NavbarTop from "../../components/templates/Navbar/NavbarTop";
import SideNavbar from "../../components/templates/Navbar/SideNavbar";
import HomeIcon from "../../components/templates/Navbar/icon/HomeIcon";
import MenuIcon from "../../components/templates/Navbar/icon/MenuIcon";
import StarIcon from "../../components/templates/Navbar/icon/StarIcon";
import kisahNabiJson from "../../data/kisah-nabi.json";

export default function KisahNabi() {
  console.log(kisahNabiJson.data);
  return (
    <section>
      <NavbarTop text={"Kisah Nabi"} />
      <SideNavbar />
      <div className="flex flex-col w-full px-4 mt-2 mb-12"></div>
      <Navbar variant="absolute">
        <HomeIcon />
        <StarIcon />
        <MenuIcon active={true} />
      </Navbar>
    </section>
  );
}
