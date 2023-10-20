import Navbar from "../../components/templates/Navbar/Navbar";
import NavbarTop from "../../components/templates/Navbar/NavbarTop";
import SideNavbar from "../../components/templates/Navbar/SideNavbar";
import HomeIcon from "../../components/templates/Navbar/icon/HomeIcon";
import MenuIcon from "../../components/templates/Navbar/icon/MenuIcon";
import StarIcon from "../../components/templates/Navbar/icon/StarIcon";
import wiridJson from "../../data/wirid.json";

export default function Wirid() {
  return (
    <section>
      <NavbarTop text={"Wirid"} />
      <SideNavbar />
      <div className="flex flex-col w-full px-4 mt-2 mb-1">
        {wiridJson.data.map((data, index) => (
          <div
            key={index}
            className="flex px-2 mb-2 bg-[#235D3A] py-2 text-white rounded-lg justify-between drop-shadow-dm1"
          >
            <p className="w-1/2">{data.times} x</p>
            <p className="arabic text-lg leading-10 text-right">
              {data.arabic}
            </p>
          </div>
        ))}
      </div>
      <Navbar variant="sticky">
        <HomeIcon />
        <StarIcon />
        <MenuIcon active={true} />
      </Navbar>
    </section>
  );
}
