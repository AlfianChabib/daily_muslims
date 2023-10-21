import { useEffect, useState } from "react";
import NavbarTop from "../components/templates/Navbar/NavbarTop";
import SideNavbar from "../components/templates/Navbar/SideNavbar";
import { useLastRead, useMessage, useSurah } from "../stores/Surah";
import { getOneSurah } from "../utils/getDataQuran";
import SpinnerLoading from "../components/templates/Spinner/SpinnerLoading";
import NextPrev from "../components/templates/Surah/NextPrev";
import AyatCard from "../components/templates/Surah/AyatCard";
import HeaderSurah from "../components/templates/Surah/HeaderSurah";
import ErrorMsg from "../components/templates/ErrorMsg/ErrorMsg";

export default function LastRead() {
  const { lastRead } = useLastRead();
  const { oneSurah, setOneSurah } = useSurah();
  const { message, setMessage } = useMessage();
  const [tafsir, setTafsir] = useState(null);
  const [displayArti, setDisplayArti] = useState(false);
  const [isScroll, setIsScroll] = useState(true);
  const ayat = oneSurah?.ayat;
  const el = document.getElementById(lastRead?.ayat);
  const TAFSIR_URL = `https://equran.id/api/v2/tafsir/${Number(
    lastRead?.noSurah
  )}`;

  useEffect(() => {
    setOneSurah(null);
    if (!parseInt(lastRead.noSurah)) {
      return;
    }
    getOneSurah(lastRead.noSurah).then((res) => {
      if (res.code == 404) {
        setMessage("Surah you are looking for not found");
        return;
      } else if (res.status == "failed") {
        throw res;
      }
      setOneSurah(res.data);
    });
  }, [lastRead, setOneSurah, setMessage]);

  useEffect(() => {
    const getTafsir = () => {
      fetch(TAFSIR_URL)
        .then((res) => res.json())
        .then((data) => setTafsir(data.data));
    };
    return getTafsir;
  }, [setTafsir, oneSurah, TAFSIR_URL]);

  if (ayat) {
    if (el && isScroll) {
      document.querySelector("html").classList.remove("scroll-smooth");
      const lengthTop = el.offsetTop;
      window.scrollTo(0, lengthTop);
      setIsScroll(false);
    }
  }

  return oneSurah ? (
    <section>
      {message ? (
        <ErrorMsg>{message}</ErrorMsg>
      ) : (
        oneSurah && (
          <>
            <NavbarTop text={"Surah " + oneSurah?.namaLatin} />
            <SideNavbar />
            <div className="flex flex-col w-full px-4 mt-2 mb-12">
              <HeaderSurah
                data={oneSurah}
                setDisplayArti={setDisplayArti}
                displayArti={displayArti}
                deskripsi={tafsir?.deskripsi}
              />
              {ayat?.map((item, index) => (
                <AyatCard
                  key={index}
                  data={item}
                  displayArti={displayArti}
                  surat={oneSurah?.namaLatin}
                  numSurat={lastRead.noSurah}
                  tafsir={tafsir?.tafsir}
                />
              ))}
            </div>
          </>
        )
      )}
      <NextPrev oneSurah={oneSurah} />
    </section>
  ) : (
    <div className="flex w-[100vw] h-[100vh] justify-center items-center bg-white">
      <SpinnerLoading />
    </div>
  );
}
