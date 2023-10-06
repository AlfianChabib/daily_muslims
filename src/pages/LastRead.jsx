import Navbar from "../components/templates/Navbar/Navbar";
import NavbarTop from "../components/templates/Navbar/NavbarTop";
import HomeIcon from "../components/templates/Navbar/icon/HomeIcon";
import SaveIcon from "../components/templates/Navbar/icon/SaveIcon";
import StarIcon from "../components/templates/Navbar/icon/StarIcon";

export default function LastRead() {
  return (
    <>
      <NavbarTop text={"Terakhir Dibaca"} />
      <div>
        <h1>Last Read</h1>
        <Navbar>
          <HomeIcon />
          <StarIcon />
          <SaveIcon active={true} />
        </Navbar>
      </div>
    </>
  );
}
