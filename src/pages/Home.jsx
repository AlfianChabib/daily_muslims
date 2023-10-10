import ListCard from "../components/ListCard";
import Start from "../components/Start";
import Navbar from "../components/templates/Navbar/Navbar";
import NavbarTop from "../components/templates/Navbar/NavbarTop";
import HomeIcon from "../components/templates/Navbar/icon/HomeIcon";
import StarIcon from "../components/templates/Navbar/icon/StarIcon";
import { useStart } from "../stores/Start";
import { useEffect } from "react";
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

export default function Home() {
  const { start, toggleStart } = useStart();
  const {
    surahs,
    setSurahs,
    searchVal,
    setSearchVal,
    oneSurah,
    setOneSurah,
    isSearching,
    setIsSearching,
  } = useSurah();
  const { message, setMessage } = useMessage();
  const { data, setData } = useLocalStorage();
  const { lastRead } = useLastRead();

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
          .catch((err) => {
            if (err.code == 500) {
              setMessage(err.message);
            }
          });
      }
    };
  }, [setMessage, setSurahs, data, setData]);

  useEffect(() => {
    if (searchVal != "") {
      setIsSearching(true);
      const value = searchVal.trim().toLowerCase().split("'").join("");
      const oneSurah = surahs.filter(
        (s) => s.namaLatin.toLowerCase().split("'").join("") == value
      );

      if (oneSurah.length > 0) {
        setOneSurah(oneSurah);
      } else {
        setOneSurah(null);
      }
    } else {
      setOneSurah(null);
      setIsSearching(false);
    }
  }, [searchVal, setOneSurah, surahs, setSurahs, setIsSearching]);

  return message ? (
    <ErrorMsg>{message}</ErrorMsg>
  ) : (
    <>
      {start && <Start toggleStart={toggleStart} />}
      <section className="">
        <NavbarTop text={"Daily Muslims"} />

        {lastRead && <LastRead data={lastRead} />}

        <Search value={searchVal} setValue={setSearchVal}>
          <SearchIcon isSearching={isSearching} />
        </Search>

        <div className="flex flex-col px-4 mt-4">
          {isSearching
            ? oneSurah && (
                <ListCard
                  number={oneSurah[0].nomor}
                  data={oneSurah}
                  oneSurah={true}
                />
              )
            : !start &&
              surahs.map((data) => (
                <ListCard key={data.nomor} number={data.nomor} data={data} />
              ))}
        </div>

        <Navbar variant={surahs.length < 1 || isSearching ? "fixed" : "sticky"}>
          <HomeIcon active={true} />
          <StarIcon />
          <MenuIcon />
        </Navbar>
      </section>
    </>
  );
}
