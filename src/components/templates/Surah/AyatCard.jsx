import PropTypes from "prop-types";
import CardIcon from "./icon/CardIcon";
import { useState } from "react";
import { useLastRead } from "../../../stores/Surah";
import { useEffect } from "react";
import AyatTafsir from "./AyatTafsir";

AyatCard.propTypes = {
  data: PropTypes.object,
  displayArti: PropTypes.bool,
  surat: PropTypes.string,
  numSurat: PropTypes.string,
  tafsir: PropTypes.array,
};

export default function AyatCard(props) {
  const { data, displayArti, surat, numSurat, tafsir } = props;
  const audio = data?.audio["03"];
  const [isLastRead, setIsLastRead] = useState(false);
  const [displayTafsir, setDisplayTafsir] = useState(false);
  const { lastRead, setLastRead } = useLastRead();
  const ayat = data.nomorAyat;

  useEffect(() => {
    if (lastRead) {
      if (lastRead.surah == surat && lastRead.ayat == ayat) {
        setIsLastRead(true);
      } else {
        setIsLastRead(false);
      }
    }
  }, [ayat, lastRead, surat, isLastRead]);

  function handleSetLastRead() {
    if (isLastRead) {
      return;
    }

    setIsLastRead(true);
    setLastRead({ surah: surat, ayat, noSurah: numSurat });
  }

  function tafsirClick() {
    setDisplayTafsir(true);
  }

  return (
    <div className="pt-16 -mt-16" id={`${data?.nomorAyat}`}>
      <div className="flex flex-col mt-2 bg-white drop-shadow-dm1 rounded-md overflow-hidden">
        <div className="flex justify-between py-[6px] px-3 bg-gray-200">
          <p className="text-[#397D54] font-medium text-sm">
            {data?.nomorAyat}
          </p>
          <CardIcon
            audio={audio}
            handleLastRead={handleSetLastRead}
            isLastRead={isLastRead}
            ayat={ayat}
            tafsir={tafsir}
            tafsirClick={tafsirClick}
          />
        </div>
        <div className="flex flex-col justify-between gap-4 py-[10px] px-3 text-[#397D54]">
          <p className="text-end text-xl leading-10 arabic">{data?.teksArab}</p>
          <p className="text-xs">{data?.teksLatin}</p>
        </div>
        {displayArti ? (
          <div className="py-[6px] px-3 bg-gray-200">
            <p className="text-xs text-[#397D54]">
              <span>Arti :</span> {data?.teksIndonesia}
            </p>
          </div>
        ) : null}{" "}
        {displayTafsir ? (
          <AyatTafsir
            ayat={ayat}
            tafsir={tafsir}
            setDisplayTafsir={setDisplayTafsir}
          />
        ) : null}
      </div>
    </div>
  );
}
