import { Link } from "react-router-dom";
import Navbar from "../components/templates/Navbar/Navbar";
import NavbarTop from "../components/templates/Navbar/NavbarTop";
import HomeIcon from "../components/templates/Navbar/icon/HomeIcon";
import MenuIcon from "../components/templates/Navbar/icon/MenuIcon";
import StarIcon from "../components/templates/Navbar/icon/StarIcon";
import { useStarSurah } from "../stores/Surah";
import ListCardFavorite from "../components/templates/Favorit/ListCardFavorite";

export default function Favorit() {
  const { dataStarSurah } = useStarSurah();

  return (
    <section>
      <NavbarTop text={"Surah Favorit"} />
      {dataStarSurah.length > 0 ? (
        <div className="flex flex-col px-4 mt-4">
          {dataStarSurah.map((data, index) => (
            <ListCardFavorite key={index} data={data} index={index} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col px-4 items-center justify-center">
          <h2 className="flex flex-col items-center font-medium text-[#235D3A] text-lg mb-4">
            Anda Belum Menambahkan <span>Surah ke Favorit</span>
          </h2>
          <Link
            to={"/"}
            className="flex justify-center bg-[#235D3A] text-white py-1 px-4  rounded-xl"
          >
            Back to Home
          </Link>
        </div>
      )}
      <Navbar variant="absolute">
        <HomeIcon />
        <StarIcon active={true} />
        <MenuIcon />
      </Navbar>
    </section>
  );
}
