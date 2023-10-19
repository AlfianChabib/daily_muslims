import { useState } from "react";
import Navbar from "../../components/templates/Navbar/Navbar";
import NavbarTop from "../../components/templates/Navbar/NavbarTop";
import SideNavbar from "../../components/templates/Navbar/SideNavbar";
import HomeIcon from "../../components/templates/Navbar/icon/HomeIcon";
import MenuIcon from "../../components/templates/Navbar/icon/MenuIcon";
import StarIcon from "../../components/templates/Navbar/icon/StarIcon";
import doaHarianJson from "../../data/daily-doa.json";

export default function DoaHarian() {
  const [searchTerm, setSearchTerm] = useState("");

  const doaHarianList = doaHarianJson.data.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return (
    <section>
      <NavbarTop text={"Doa Harian"} />
      <SideNavbar />
      <div className="flex flex-col w-full px-4 mt-2 mb-12">
        <form>
          <div className="mx-2 bg-gray-300 py-1 rounded-xl my-2 flex items-center">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              name="cari doa harian"
              placeholder="Cari Doa Harian"
              className="bg-transparent w-full  focus:outline-none rounded-lg py-2 px-3 mx-1 me-1 text-slate-800"
            />
          </div>
        </form>
        {doaHarianList.map((data, index) => (
          <div
            className="mt-2 mb-4 bg-white rounded-md overflow-hidden drop-shadow-dm1"
            key={index}
          >
            <h3 className="text-lg mb-2 px-2  text-[#235D3A] font-medium bg-gray-200">
              {data.title}
            </h3>
            <div className="text-[#235D3A]">
              <p className="arabic px-2 leading-10 text-xl my-2 text-end">
                {data.arabic}
              </p>

              <p className="text-xs mt-2 px-2">{data.latin}</p>
              <p className="text-sm px-2 py-2 mt-2 bg-gray-200">
                {data.translation}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Navbar variant={doaHarianList.length < 2 ? "absolute" : "sticky"}>
        <HomeIcon />
        <StarIcon />
        <MenuIcon active={true} />
      </Navbar>
    </section>
  );
}
