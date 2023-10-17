import ListCard from "../components/ListCard";
import Start from "../components/Start";
import Navbar from "../components/templates/Navbar/Navbar";
import NavbarTop from "../components/templates/Navbar/NavbarTop";
import HomeIcon from "../components/templates/Navbar/icon/HomeIcon";
import StarIcon from "../components/templates/Navbar/icon/StarIcon";
import { useStart } from "../stores/Start";
import { useEffect, useState } from "react";
import getAll from "../utils/getDataQuran";
import {
  useLastRead,
  useLocalStorage,
  useMessage,
  useSurah,
} from "../stores/Surah";
import MenuIcon from "../components/templates/Navbar/icon/MenuIcon";
import LastRead from "../components/LastRead";
import Search from "../components/templates/Search/Search";
import SearchIcon from "../components/templates/Search/SearchIcon";
import ErrorMsg from "../components/templates/ErrorMsg/ErrorMsg";
import SpinnerLoading from "../components/templates/Spinner/SpinnerLoading";
import SideNavbar from "../components/templates/Navbar/SideNavbar";

export default function Home() {
  const { start, toggleStart } = useStart();
  const { surahs, setSurahs } = useSurah();
  const { message, setMessage } = useMessage();
  const { data, setData } = useLocalStorage();
  const { lastRead } = useLastRead();
  const [search, setSearch] = useState([]);
  const [filteredList, setFilteredList] = useState("");

  useEffect(() => {
    return () => {
      if (data) {
        setSurahs(data);
        setSearch(data);
      } else {
        getAll()
          .then((res) => {
            setSurahs(res.data);
            setData(res.data);
            setSearch(res.data);
          })
          .catch((err) => {
            if (err.code == 500) {
              setMessage(err.message);
            }
          });
      }
    };
  }, [setMessage, setSurahs, data, setData]);

  return message ? (
    <ErrorMsg>{message}</ErrorMsg>
  ) : (
    <>
      {start && <Start toggleStart={toggleStart} />}
      <SideNavbar />
      <section>
        <NavbarTop text={"Daily Muslims"} isPageHome={true} />

        {lastRead && <LastRead data={lastRead} />}

        <Search
          data={data}
          setSearch={setSearch}
          setFilteredList={setFilteredList}
          filteredList={filteredList}
        >
          <SearchIcon />
        </Search>

        {search.length == 0 ? (
          <SpinnerLoading />
        ) : (
          <div className="flex flex-col px-4 mt-4">
            {!start &&
              search.map((data) => (
                <ListCard key={data.nomor} number={data.nomor} data={data} />
              ))}
          </div>
        )}

        <Navbar
          variant={surahs.length < 1 || search.length < 8 ? "fixed" : "sticky"}
        >
          <HomeIcon active={true} />
          <StarIcon />
          <MenuIcon />
        </Navbar>
      </section>
    </>
  );
}
