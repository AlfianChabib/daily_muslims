import ListCard from "../components/ListCard";
import Start from "../components/Start";
import Navbar from "../components/templates/Navbar/Navbar";
import NavbarTop from "../components/templates/Navbar/NavbarTop";
import HomeIcon from "../components/templates/Navbar/icon/HomeIcon";
import SaveIcon from "../components/templates/Navbar/icon/SaveIcon";
import StarIcon from "../components/templates/Navbar/icon/StarIcon";
import { useStart } from "../stores/Start";
import { useEffect } from "react";
import getAll from "../utils/getDataQuran";
import { useMessage, useSurah } from "../stores/Surah";

export default function Home() {
  const { start, toggleStart } = useStart();
  const { surahs, setSurahs } = useSurah();
  const { message, setMessage } = useMessage();

  useEffect(() => {
    return () => {
      getAll()
        .then((res) => setSurahs(res.data))
        .catch((err) => console.log(err));
    };
  }, [setMessage, setSurahs]);

  return (
    <section className="">
      {start && <Start toggleStart={toggleStart} />}
      <NavbarTop text={"Daily Muslims"} />
      <div className="flex flex-col px-4 mt-4">
        {surahs.map((data) => (
          <ListCard key={data.number} number={data.number} data={data} />
        ))}
      </div>

      <Navbar variant={surahs.length < 1 ? "fixed" : "sticky"}>
        <HomeIcon active={true} />
        <StarIcon />
        <SaveIcon />
      </Navbar>
    </section>
  );
}
