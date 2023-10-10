import PropTypes from "prop-types";
import CardIcon from "./icon/CardIcon";
import { useState } from "react";
import { useLastRead } from "../../../stores/Surah";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

AyatCard.propTypes = {
  data: PropTypes.object,
  displayArti: PropTypes.bool,
  surat: PropTypes.string,
  numSurat: PropTypes.string,
};

export default function AyatCard(props) {
  // const { id } = useParams();
  const { data, displayArti, surat, numSurat } = props;
  const [isLastRead, setIsLastRead] = useState(false);
  const { lastRead, setLastRead } = useLastRead();
  const ayat = data.nomorAyat;

  // useEffect(() => {
  //   if (window.location.href.includes("#")) {
  //     const hash = window.location.hash.substring(1);
  //     if (hash && hash.match(/^\d+$/)) {
  //       console.log(hash);
  //       const url = `/surah/${numSurat}#${hash}`;
  //       window.location.replace(url);
  //     }
  //   }
  // }, []);
  
  // document.addEventListener("DOMContentLoaded", function () {
  //   const hash = window.location.hash.substring(1);
  //   if (hash && hash.match(/^\d+$/)) {
  //     console.log(hash);
  //     const url = `/surah/${numSurat}#${hash}`;
  //     window.location.replace(url);
  //   }
  // });

  // useEffect(() => {
  //   if (window.location.href.includes("#")) {
  //     const hash = window.location.hash.substring(1);
  //     if (hash && hash.match(/^\d+$/)) {
  //       window.location.replace(`/surah/${id}${hash}`);
  //     }
  //   }
  // }, [id]);

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

  return (
    <div
      className="flex flex-col mt-3 bg-white drop-shadow-dm1 rounded-md overflow-hidden"
      id={`${data?.nomorAyat}`}
    >
      <div className="flex justify-between py-[6px] px-3 bg-gray-200">
        <p className="text-[#397D54] font-medium text-sm">{data?.nomorAyat}</p>
        <CardIcon handleLastRead={handleSetLastRead} isLastRead={isLastRead} />
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
      ) : null}
    </div>
  );
}
