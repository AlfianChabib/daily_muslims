import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMessage, useSurah } from "../stores/Surah";
import { getOneSurah } from "../utils/getDataQuran";
import NavbarTop from "../components/templates/Navbar/NavbarTop";
import HeaderSurah from "../components/templates/Surah/HeaderSurah";
import AyatCard from "../components/templates/Surah/AyatCard";

export default function Surah() {
  const { id } = useParams();
  const { oneSurah, setOneSurah } = useSurah();
  const { message, setMessage } = useMessage();
  const [displayArti, setDisplayArti] = useState(false);
  const ayat = oneSurah?.ayat;

  useEffect(() => {
    getOneSurah(id)
      .then((res) => {
        if (res.code == 404) {
          setMessage("Surah you are looking for not found");
          return;
        }

        setOneSurah(res.data);
      })
      .catch((err) => console.log(err));
  }, [id, setMessage, setOneSurah]);

  // console.log(oneSurah?.ayat);
  console.log(displayArti);

  // Catatan: udah berhasil dapetin data per surat nya, trus udah berhasil nanganin klo mislkn id yang dicari itu gaada. Tinggal dipke aja datanya

  return (
    <section>
      <NavbarTop text={"Surah " + oneSurah?.namaLatin} />
      <div className="flex flex-col w-full px-4 pt-4 mb-12">
        <HeaderSurah
          data={oneSurah}
          setDisplayArti={setDisplayArti}
          displayArti={displayArti}
        />
        {ayat?.map((item, index) => {
          return <AyatCard key={index} data={item} displayArti={displayArti} />;
        })}
      </div>
    </section>
  );
}
