import PropTypes from "prop-types";
import { Link } from "react-router-dom";

LastRead.propTypes = {
  data: PropTypes.object,
};

export default function LastRead(props) {
  const { data } = props;

  return (
    <div className="mx-4 bg-[#397D54] p-3 rounded-xl my-2">
      <p className="text-white font-light">Terakhir Dibaca</p>
      <div className="flex justify-between items-center mt-2">
        <div>
          <h2 className="text-white font-bold text-xl">{data.surah}</h2>
          <p className="text-white font-light text-sm">Ayat : {data.ayat}</p>
        </div>
        {/* <a
          title="Lanjutkan"
          href={`/surah/${data.noSurah}#${data.ayat}`}
          className="bg-white text-center text-[#397D54] py-1 rounded-md w-[115px] transition-colors cursor-pointer hover:bg-gray-300"
        >
          Lanjutkan
        </a> */}
        <Link
          to={"/lastRead"}
          className="bg-white text-center text-[#397D54] py-1 rounded-md w-[115px] transition-colors cursor-pointer hover:bg-gray-300"
        >
          Lanjutkan
        </Link>
      </div>
    </div>
  );
}
