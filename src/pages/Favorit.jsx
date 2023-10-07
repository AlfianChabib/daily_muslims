import Navbar from "../components/templates/Navbar/Navbar";
import NavbarTop from "../components/templates/Navbar/NavbarTop";
import HomeIcon from "../components/templates/Navbar/icon/HomeIcon";
import SaveIcon from "../components/templates/Navbar/icon/SaveIcon";
import StarIcon from "../components/templates/Navbar/icon/StarIcon";

export default function Favorit() {
  return (
    <section>
      <NavbarTop text={"Surah Favorit"} />
      <div>
        <h1>Favorit</h1>
      </div>
      <Navbar variant="absolute">
        <HomeIcon />
        <StarIcon active={true} />
        <SaveIcon />
      </Navbar>
    </section>
  );
}
