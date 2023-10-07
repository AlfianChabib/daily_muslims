import ListCard from "../components/ListCard";
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
    <section className="">
      {start && <Start toggleStart={toggleStart} />}
      <NavbarTop text={"Daily Muslims"} />
      <div className="flex flex-col px-4 mt-4">
        <ListCard />
      </div>
      <Navbar variant="sticky">
        <HomeIcon active={true} />
        <StarIcon />
        <SaveIcon />
      </Navbar>
    </section>
  );
}
