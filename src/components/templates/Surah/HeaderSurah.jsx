import PropTypes from "prop-types";
import HeaderIcon from "./HeaderIcon";
import Bismillah from "./icon/Bismillah";
import { useStarSurah } from "../../../stores/Surah";
import { useState } from "react";

HeaderSurah.propTypes = {
  data: PropTypes.object,
  setDisplayArti: PropTypes.func,
  displayArti: PropTypes.bool,
  deskripsi: PropTypes.string,
};

export default function HeaderSurah(props) {
  const { data, displayArti, setDisplayArti, deskripsi } = props;
  const { setDataStarSurah } = useStarSurah();
  const [displayDeskripsi, setDisplayDeskripsi] = useState(false);

  function handleStarSurah(setIsStared) {
    const dataSurah = {
      titleSurah: data?.namaLatin,
      arti: data?.arti,
      tempatTurun: data?.tempatTurun,
      jmlhAyat: data?.jumlahAyat,
      nomor: data?.nomor,
    };

    setDataStarSurah(dataSurah);
    setIsStared(true);
  }

  function toggleDisplayDeskripsi() {
    setDisplayDeskripsi(!displayDeskripsi);
  }

  return (
    <div className="bg-[#397D54] py-[10px] px-3 rounded-xl drop-shadow-dm">
      <div className="flex justify-between">
        <div className="flex flex-col text-white">
          <h2 className="text-2xl font-semibold mb-4">{data?.namaLatin}</h2>
          <div>
            <p className="font-normal text-sm">{data?.arti}</p>
            <p className="text-base">
              {data?.tempatTurun} <span>|</span> {data?.jumlahAyat} Ayat
            </p>
          </div>
        </div>
        <div className="flex flex-col text-white items-end justify-between">
          <p className="text-3xl arabic">{data?.nama}</p>
          <HeaderIcon
            setDisplayArti={setDisplayArti}
            displayArti={displayArti}
            handleStarSurah={handleStarSurah}
            surahTitle={data?.namaLatin}
            audioFull={data?.audioFull["03"]}
            displayDeskripsi={displayDeskripsi}
            toggleDisplayDeskripsi={toggleDisplayDeskripsi}
          />
        </div>
      </div>
      {data?.nomor == 1 || data?.nomor == 9 ? null : <Bismillah />}
      {displayDeskripsi ? (
        <div className="flex flex-col items-center text-white pt-2 mt-2 border-t">
          <h4 className="text-xl">Deskripsi</h4>
          <p
            className="text-sm whitespace-normal text-center"
            dangerouslySetInnerHTML={{ __html: deskripsi }}
          ></p>
        </div>
      ) : null}
    </div>
  );
}
