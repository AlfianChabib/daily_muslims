import ListCard from "../components/ListCard";
import Start from "../components/Start";
import Navbar from "../components/templates/Navbar/Navbar";
import NavbarTop from "../components/templates/Navbar/NavbarTop";
import HomeIcon from "../components/templates/Navbar/icon/HomeIcon";
import StarIcon from "../components/templates/Navbar/icon/StarIcon";
import { useStart } from "../stores/Start";
import { useEffect } from "react";
import getAll from "../utils/getDataQuran";
import { useLocalStorage, useMessage, useSurah } from "../stores/Surah";
import MenuIcon from "../components/templates/Navbar/icon/MenuIcon";
import LastRead from "../components/LastRead";
import Search from "../components/Search";

export default function Home() {
  const { start, toggleStart } = useStart();
  const { surahs, setSurahs } = useSurah();
  const { message, setMessage } = useMessage();
  const { data, setData } = useLocalStorage();

  useEffect(() => {
    return () => {
      if (data) {
        setSurahs(data);
      } else {
        getAll()
          .then((res) => {
            setSurahs(res.data);
            setData(res.data);
          })
          .catch((err) => console.log(err));
      }
    };
  }, [setMessage, setSurahs, data, setData]);

  console.log(surahs);

  return (
    <section className="">
      {start && <Start toggleStart={toggleStart} />}
      <NavbarTop text={"Daily Muslims"} />

      <LastRead />
      <Search />
      <div className="flex flex-col px-4 mt-4">
        {!start &&
          surahs.map((data) => (
            <ListCard key={data.nomor} number={data.nomor} data={data} />
          ))}
      </div>

      <Navbar variant={surahs.length < 1 ? "fixed" : "sticky"}>
        <HomeIcon active={true} />
        <StarIcon />
        <MenuIcon />
      </Navbar>
    </section>
  );
}
