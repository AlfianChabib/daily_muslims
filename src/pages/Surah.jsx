import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMessage, useSurah } from "../stores/Surah";
import { getOneSurah } from "../utils/getDataQuran";
import NavbarTop from "../components/templates/Navbar/NavbarTop";
import HeaderSurah from "../components/templates/Surah/HeaderSurah";
import AyatCard from "../components/templates/Surah/AyatCard";
import ErrorMsg from "../components/templates/ErrorMsg/ErrorMsg";
import SpinnerLoading from "../components/templates/Spinner/SpinnerLoading";
import NextPrev from "../components/templates/Surah/NextPrev";
import SideNavbar from "../components/templates/Navbar/SideNavbar";

export default function Surah() {
  const { id } = useParams();
  const { oneSurah, setOneSurah } = useSurah();
  const { message, setMessage } = useMessage();
  const [displayArti, setDisplayArti] = useState(false);
  const [isScroll, setIsScroll] = useState(true);
  const [tafsir, setTafsir] = useState(null);
  const ayat = oneSurah?.ayat;
  let idCard = window.location.href;
  idCard = idCard.includes("#") && idCard.split("#")[1];
  const el = document.getElementById(idCard);

  if (el && isScroll) {
    document.querySelector("html").classList.remove("scroll-smooth");
    const lengthTop = el.offsetTop;
    window.scrollTo(0, lengthTop);
    setIsScroll(false);
  }

  useEffect(() => {
    setOneSurah(null);

    if (!parseInt(id)) {
      setMessage("Surah you are looking for not found");
      return;
    }
    getOneSurah(id)
      .then((res) => {
        if (res.code == 404) {
          setMessage("Surah you are looking for not found");
          return;
        }

        if (res.status == "failed") {
          throw res;
        }

        setOneSurah(res.data);
      })
      .catch(() => setMessage("Unstable Network"));
  }, [id, setMessage, setOneSurah]);

  const TAFSIR_URL = `https://equran.id/api/v2/tafsir/${id}`;
  useEffect(() => {
    const getTafsir = () => {
      fetch(TAFSIR_URL)
        .then((res) => res.json())
        .then((data) => setTafsir(data.data));
    };
    return getTafsir;
  }, [setTafsir, oneSurah, TAFSIR_URL]);

  return oneSurah ? (
    <section>
      {message ? (
        <ErrorMsg>{message}</ErrorMsg>
      ) : (
        oneSurah && (
          <>
            <NavbarTop text={"Surah " + oneSurah?.namaLatin} />
            <SideNavbar />
            <div className="flex flex-col w-full px-4 mt-4 mb-12">
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
                  numSurat={id}
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
