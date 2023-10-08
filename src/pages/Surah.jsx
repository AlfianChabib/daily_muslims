import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMessage, useSurah } from "../stores/Surah";
import { getOneSurah } from "../utils/getDataQuran";
import NavbarTop from "../components/templates/Navbar/NavbarTop";

export default function Surah() {
  const { id } = useParams();
  const { oneSurah, setOneSurah } = useSurah();
  const { message, setMessage } = useMessage();

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

  console.log(oneSurah);

  // Catatan: udah berhasil dapetin data per surat nya, trus udah berhasil nanganin klo mislkn id yang dicari itu gaada. Tinggal dipke aja datanya
  return (
    <section>
      <NavbarTop text={"Surah " + oneSurah?.name.transliteration.id} />
      <div className="flex flex-col w-full px-4 pt-4">
        {oneSurah ? <p>{oneSurah.tafsir.id}</p> : <h1>{message}</h1>}
      </div>
    </section>
  );
}
