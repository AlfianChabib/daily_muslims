import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMessage, useSurah } from "../stores/Surah";
import { getOneSurah } from "../utils/getDataQuran";

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

        setOneSurah(res);
      })
      .catch((err) => console.log(err));
  }, [id, setMessage, setOneSurah]);

  // Catatan: udah berhasil dapetin data per surat nya, trus udah berhasil nanganin klo mislkn id yang dicari itu gaada. Tinggal dipke aja datanya
  return (
    <div>
      {oneSurah ? <p>{oneSurah.data.tafsir.id}</p> : <h1>{message}</h1>}
    </div>
  );
}
