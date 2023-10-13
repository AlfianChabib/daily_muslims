import { Link } from "react-router-dom";
import PropTypes from "prop-types";

NextPrev.propTypes = {
  oneSurah: PropTypes.object,
};

export default function NextPrev({ oneSurah }) {
  return (
    <div
      className={`${
        oneSurah.ayat.length == 3 ? "absolute" : "sticky"
      } flex w-full bottom-0 bg-[#235D3A] justify-between p-3`}
    >
      {oneSurah?.suratSebelumnya.nomor == null ? (
        <button className="flex items-center gap-1 py-1 px-2 bg-gray-400 rounded-md text-[#235D3A] font-medium">
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
          to={`/surah/${oneSurah?.suratSebelumnya.nomor}`}
          className="flex items-center gap-1 py-1 px-2 bg-white rounded-md text-[#235D3A] font-medium"
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
      {oneSurah?.suratSelanjutnya.nomor == null ? (
        <button className="flex items-center gap-1 py-1 px-2 bg-gray-400 rounded-md text-[#235D3A] font-medium">
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
          to={`/surah/${oneSurah?.suratSelanjutnya.nomor}`}
          className="flex items-center gap-1 py-1 px-2 bg-white rounded-md text-[#235D3A] font-medium"
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
