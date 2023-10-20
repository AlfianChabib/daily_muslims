import PropTypes from "prop-types";

Card.propTypes = {
  data: PropTypes.object,
  isFav: PropTypes.bool,
};

export default function Card(props) {
  const { data, isFav } = props;

  return (
    <>
      <div className="flex flex-col justify-between">
        <div className="flex items-center gap-1">
          <h2 className="text-white text-sm font-medium">
            {isFav ? data.titleSurah : data.namaLatin}
          </h2>
          <p className="text-white text-xs">({data.arti})</p>
        </div>
        <p className="text-xs text-[#C8EAD1]">
          {data.tempatTurun} | {isFav ? data.jmlhAyat : data.jumlahAyat} Ayat
        </p>
      </div>
      {isFav ? null : (
        <p className="arabic text-xl text-[#C8EAD1]">{data.nama}</p>
      )}
    </>
  );
}
