import PropTypes from "prop-types";

LastRead.propTypes = {
  data: PropTypes.object,
};

export default function LastRead(props) {
  const { data } = props;

  function handleRedirect() {
    window.location.replace(`/surah/${data.noSurah}#${data.ayat}`);
  }

  return (
    <div className="w-[90%] mx-auto bg-[#397D54] p-3 rounded-2xl mt-2">
      <p className="text-white font-light">Terakhir Dibaca</p>
      <div className="flex justify-between items-center mt-2">
        <div>
          <h2 className="text-white font-bold text-xl">{data.surah}</h2>
          <p className="text-white font-light text-sm">Ayat : {data.ayat}</p>
        </div>
        <button
          className="bg-white text-[#397D54] py-1 rounded-xl w-[115px] transition-colors cursor-pointer hover:bg-gray-300"
          onClick={handleRedirect}
        >
          Lanjutkan
        </button>
      </div>
    </div>
  );
}
