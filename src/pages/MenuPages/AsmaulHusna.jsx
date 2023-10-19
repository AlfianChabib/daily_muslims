import { useState } from "react";
import NavbarTop from "../../components/templates/Navbar/NavbarTop";
import asmaulHusnaJson from "../../data/asmaul-husna.json";
import SearchAsmaulhusna from "../../components/templates/Search/SearchAsmaulhusna";
import Navbar from "../../components/templates/Navbar/Navbar";
import HomeIcon from "../../components/templates/Navbar/icon/HomeIcon";
import StarIcon from "../../components/templates/Navbar/icon/StarIcon";
import MenuIcon from "../../components/templates/Navbar/icon/MenuIcon";
import SideNavbar from "../../components/templates/Navbar/SideNavbar";

export default function AsmaulHusna() {
  const [searchTerm, setSearchTerm] = useState("");

  const asmaulHusnaList = asmaulHusnaJson.data.filter((item) => {
    return item.latin.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <section>
      <NavbarTop text={"Asmaul Husna"} />
      <SideNavbar />
      <div className="flex flex-col w-full px-4 mt-2 mb-12">
        <SearchAsmaulhusna value={searchTerm} setSearchTerm={setSearchTerm} />
        {asmaulHusnaList.map((data, index) => (
          <div
            className="px-2 mt-2 bg-[#235D3A] py-2 text-white rounded-lg"
            key={index}
          >
            <div className="flex w-full justify-between">
              <h3 className="text-lg font-semibold">{data.latin}</h3>
              <p className=" text-2xl">{data.arabic}</p>
            </div>
            <p className="text-sm mt-2">{data.translation_id}</p>
          </div>
        ))}
      </div>
      <Navbar variant={asmaulHusnaList.length < 6 ? "absolute" : "sticky"}>
        <HomeIcon />
        <StarIcon />
        <MenuIcon active={true} />
      </Navbar>
    </section>
  );
}
