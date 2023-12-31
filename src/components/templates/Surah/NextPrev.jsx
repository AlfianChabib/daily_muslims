import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useLastRead } from "../../../stores/Surah";

NextPrev.propTypes = {
  oneSurah: PropTypes.object,
};

export default function NextPrev({ oneSurah }) {
  const { lastRead } = useLastRead();

  function handleLastRead() {
    window.location.replace(`/surah/${lastRead.noSurah}#${lastRead.ayat}`);
  }

  return (
    <div
      className={`${
        oneSurah.ayat.length == 3 ? "absolute" : "sticky"
      } flex w-full bottom-0 bg-[#235D3A] justify-between z-40 p-3 gap-x-3`}
    >
      {oneSurah?.suratSebelumnya.nomor == null ? (
        <button
          title="Prev Surah"
          className="flex items-center gap-1 py-1 px-2 bg-gray-400 rounded-sm text-[#235D3A] text-xs font-medium"
        >
          <span>
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 10L2 6L6 2"
                stroke="#235D3A"
                strokeWidth="2"
                strokeLinecap="square"
              />
            </svg>
          </span>
          Prev Surah
        </button>
      ) : (
        <Link
          title="Prev Surah"
          to={`/surah/${oneSurah?.suratSebelumnya.nomor}`}
          className="flex items-center gap-1 py-1 px-2 bg-white rounded-sm text-[#235D3A] text-xs font-medium"
        >
          <span>
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 10L2 6L6 2"
                stroke="#235D3A"
                strokeWidth="2"
                strokeLinecap="square"
              />
            </svg>
          </span>
          Prev Surah
        </Link>
      )}
      {oneSurah?.nomor == Number(lastRead?.noSurah) ? (
        <button
          title="Last Read"
          className="bg-white font-medium py-1 px-2 rounded-sm text-[#235D3A] text-xs"
          onClick={handleLastRead}
        >
          Terakhir Dibaca
        </button>
      ) : null}

      {oneSurah?.suratSelanjutnya.nomor == null ? (
        <button
          title="Next Surah"
          className="flex items-center gap-1 py-1 px-2 bg-gray-400 rounded-sm text-[#235D3A] text-xs font-medium"
        >
          Next Surah
          <span>
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2L6 6L2 10"
                stroke="#235D3A"
                strokeWidth="2"
                strokeLinecap="square"
              />
            </svg>
          </span>
        </button>
      ) : (
        <Link
          title="Next Surah"
          to={`/surah/${oneSurah?.suratSelanjutnya.nomor}`}
          className="flex items-center gap-1 py-1 px-2 bg-white rounded-sm text-[#235D3A] text-xs font-medium"
        >
          Next Surah
          <span>
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2L6 6L2 10"
                stroke="#235D3A"
                strokeWidth="2"
                strokeLinecap="square"
              />
            </svg>
          </span>
        </Link>
      )}
    </div>
  );
}
