import { Link } from "react-router-dom";
import NumberIcon from "./templates/Home/icon/NumberIcon";
import PropTypes from "prop-types";
import Card from "./templates/Home/Card";

ListCard.propTypes = {
  number: PropTypes.number,
};

export default function ListCard(props) {
  const { number } = props;

  return (
    <Link to="/favorit" className="flex pb-2 items-center">
      <div className="flex bg-[#397D54] w-12 h-12 relative rounded-lg justify-center items-center text-white">
        <NumberIcon />
        <p className="absolute">{number}</p>
      </div>
      <div className="flex bg-[#397D54] flex-1 ml-2 h-12 rounded-lg py-1 px-2 justify-between">
        <Card />
      </div>
    </Link>
  );
}
