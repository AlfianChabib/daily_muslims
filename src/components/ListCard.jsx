import { Link } from "react-router-dom";
import NumberIcon from "./templates/Home/icon/NumberIcon";
import PropTypes from "prop-types";
import Card from "./templates/Home/Card";

ListCard.propTypes = {
  number: PropTypes.number,
  data: PropTypes.any,
  oneSurah: PropTypes.bool,
};

export default function ListCard(props) {
  const { number, data, oneSurah } = props;

  return (
    <Link
      to={"/surah/" + number}
      className="flex pb-2 items-center focus:outline-none focus:outline-slate-400"
    >
      <div className="flex bg-[#397D54] w-12 h-12 relative rounded-lg justify-center items-center text-white">
        <NumberIcon />
        <p className="absolute">{number}</p>
      </div>
      <div className="flex bg-[#397D54] flex-1 ml-2 h-12 rounded-lg py-1 px-2 justify-between">
        {oneSurah ? <Card data={data[0]} /> : <Card data={data} />}
      </div>
    </Link>
  );
}
