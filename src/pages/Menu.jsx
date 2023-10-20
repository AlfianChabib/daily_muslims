import Navbar from "../components/templates/Navbar/Navbar";
import NavbarTop from "../components/templates/Navbar/NavbarTop";
import SideNavbar from "../components/templates/Navbar/SideNavbar";
import HomeIcon from "../components/templates/Navbar/icon/HomeIcon";
import MenuIcon from "../components/templates/Navbar/icon/MenuIcon";
import StarIcon from "../components/templates/Navbar/icon/StarIcon";
import MenuCard from "../components/templates/menu/MenuCard";

export default function Menu() {
  const menuCard = [
    {
      title: "Asmaul Husna",
      link: "/asmaulhusna",
    },
    {
      title: "Doa Harian",
      link: "/doaharian",
    },
    // {
    //   title: "Kisah Nabi",
    //   link: "/kisahnabi",
    // },
    {
      title: "Tahlil",
      link: "/tahlil",
    },
    // {
    //   title: "Istighosah",
    //   link: "/istighosah",
    // },
    {
      title: "Bacaan Sholat",
      link: "/bacaansholat",
    },
    {
      title: "Wirid",
      link: "/wirid",
    },
  ];

  return (
    <section>
      <SideNavbar />
      <NavbarTop text={"Menu"} />
      <div className="grid grid-cols-2 gap-4 px-4 mt-2">
        {menuCard.map((data, index) => (
          <MenuCard key={index} title={data.title} link={data.link} />
        ))}
      </div>
      <Navbar variant="absolute">
        <HomeIcon />
        <StarIcon />
        <MenuIcon active={true} />
      </Navbar>
    </section>
  );
}
