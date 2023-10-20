import Navbar from "../../components/templates/Navbar/Navbar";
import NavbarTop from "../../components/templates/Navbar/NavbarTop";
import SideNavbar from "../../components/templates/Navbar/SideNavbar";
import HomeIcon from "../../components/templates/Navbar/icon/HomeIcon";
import MenuIcon from "../../components/templates/Navbar/icon/MenuIcon";
import StarIcon from "../../components/templates/Navbar/icon/StarIcon";
import bacaanShoatJson from "../../data/bacaan-sholat/sholat-lengkap.json";

export default function BacaanSholat() {
  const niatSholat = bacaanShoatJson["niat-sholat"];
  const doaBacaanSholat = bacaanShoatJson["doa-bacaan-sholat"];
  return (
    <section>
      <NavbarTop text={"Bacaan Sholat"} />
      <SideNavbar />
      <div className="flex flex-col w-full px-4 mt-2 mb-1">
        <h2 className="text-lg mb-4 px-2 py-2 text-center rounded-md text-white font-medium bg-[#235D3A]">
          Niat Sholat 5 Waktu
        </h2>
        {niatSholat.map((data, index) => (
          <div
            key={index}
            className="mb-4 bg-white text-[#235D3A] rounded-md overflow-hidden drop-shadow-dm1"
          >
            <h4 className="text-lg mb-2 px-2 font-medium bg-gray-200">
              {data.title}
            </h4>
            <p className="text-right arabic text-xl leading-10 px-2">
              {data.arabic}
            </p>
            <p className="text-sm px-2 py-2 mt-2 bg-gray-200">{data.latin}</p>
          </div>
        ))}
        <h2 className="text-lg mb-4 px-2 py-2 text-center rounded-md text-white font-medium bg-[#235D3A]">
          Bacaan Shoat
        </h2>
        {doaBacaanSholat.map((data, index) => (
          <div
            key={index}
            className="mb-4 bg-white text-[#235D3A] rounded-md overflow-hidden drop-shadow-dm1"
          >
            <h4 className="text-lg mb-2 px-2 font-medium bg-gray-200">
              {data.title}
            </h4>
            <p className="text-right arabic text-xl leading-10 px-2">
              {data.arabic}
            </p>
            {data.id === 5 && (
              <p className="text-right arabic text-xl leading-10 px-2">
                سَمِعَ اللهُ لِمَنْ حَمِدَهُ
              </p>
            )}
            {data.id === 11 && (
              <p className="text-right arabic text-xl leading-10 px-2">
                السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ
              </p>
            )}
            <p className="text-sm px-2 py-2 mt-2 bg-gray-200">{data.latin}</p>
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
