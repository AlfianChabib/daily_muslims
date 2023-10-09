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
      <NavbarTop text={"Surah " + oneSurah?.namaLatin} />
      <div className="flex flex-col w-full px-4 pt-4">
        <div className="flex bg-[#397D54] py-[10px] px-3 rounded-xl justify-between">
          <div className="flex flex-col text-white">
            <h2 className="text-2xl font-semibold mb-4">
              {oneSurah?.namaLatin}
            </h2>
            <div>
              <p className="font-normal text-sm">{oneSurah?.arti}</p>
              <p className="text-base">
                {oneSurah?.tempatTurun} <span>|</span> {oneSurah?.jumlahAyat}{" "}
                Ayat
              </p>
            </div>
          </div>
          <div className="text-white text-2xl arabic">
            <p>{oneSurah?.nama}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
