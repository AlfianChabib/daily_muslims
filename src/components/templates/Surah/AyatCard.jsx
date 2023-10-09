import PropTypes from "prop-types";
import CardIcon from "./CardIcon";

AyatCard.propTypes = {
  data: PropTypes.object,
  displayArti: PropTypes.bool,
};

export default function AyatCard({ data, displayArti }) {
  return (
    <div className="flex flex-col mt-3 bg-white drop-shadow-dm1 rounded-md overflow-hidden">
      <div className="flex justify-between py-[6px] px-3 bg-gray-200">
        <p className="text-[#397D54] font-medium text-sm">{data?.nomorAyat}</p>
        <CardIcon />
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
