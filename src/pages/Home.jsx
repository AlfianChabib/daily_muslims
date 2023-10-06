import Start from "../components/Start";
import Navbar from "../components/templates/Navbar/Navbar";
import NavbarTop from "../components/templates/Navbar/NavbarTop";
import HomeIcon from "../components/templates/Navbar/icon/HomeIcon";
import SaveIcon from "../components/templates/Navbar/icon/SaveIcon";
import StarIcon from "../components/templates/Navbar/icon/StarIcon";
import { useStart } from "../stores/Start";

export default function Home() {
  const { start, toggleStart } = useStart();
  return (
    <>
      <NavbarTop text={"Daily Muslims"}/>
      <section>
        {start && <Start toggleStart={toggleStart} />}
        <h1>home Page</h1>
      </section>
      <Navbar>
        <HomeIcon active={true} />
        <StarIcon />
        <SaveIcon />
      </Navbar>
    </>
  );
}
