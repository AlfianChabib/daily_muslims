import PropTypes from "prop-types";

AyatTafsir.propTypes = {
  tafsir: PropTypes.array,
  ayat: PropTypes.number,
  setDisplayTafsir: PropTypes.func,
};

export default function AyatTafsir(props) {
  const { tafsir, ayat, setDisplayTafsir } = props;

  return (
    <div className="flex flex-col drop-shadow-2xl mt-2">
      <div className="rounded-lg border overflow-hidden">
        <div className="flex items-center justify-between text-white py-[6px] px-3 bg-[#397D54]">
          <p>Tafsir {ayat}</p>
          <button
            title="Close"
            className="text-[#397D54] bg-white w-7 h-7 text-center leading-none font-medium text-xl rounded-full"
            onClick={() => setDisplayTafsir(false)}
          >
            ×
          </button>
        </div>
        <div className="h-[30rem] bg-white py-[6px] px-3 overflow-y-scroll overflow-hidden">
          <p className="text-[#397D54] whitespace-pre-line font-medium text-sm">
            {tafsir[ayat - 1].teks}
          </p>
        </div>
      </div>
    </div>
  );
}
