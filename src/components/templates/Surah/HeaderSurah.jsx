import PropTypes from "prop-types";
import HeaderIcon from "./HeaderIcon";
import Bismillah from "./icon/Bismillah";
import { useStarSurah } from "../../../stores/Surah";

HeaderSurah.propTypes = {
  data: PropTypes.object,
  setDisplayArti: PropTypes.func,
  displayArti: PropTypes.bool,
};

export default function HeaderSurah(props) {
  const { data, displayArti, setDisplayArti } = props;
  const { setDataStarSurah } = useStarSurah();

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

  console.log(data);

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
          />
        </div>
      </div>
      <Bismillah />
    </div>
  );
}
