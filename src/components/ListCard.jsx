import { Link } from "react-router-dom";
import NumberIcon from "./templates/Home/icon/NumberIcon";
import PropTypes from "prop-types";
import Card from "./templates/Home/Card";
import BodyCard from "./templates/Card/BodyCard";
import HeaderCard from "./templates/Card/HeaderCard";

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
      className="flex pb-2 items-center focus:outline-none "
    >
      <HeaderCard>
        <NumberIcon />
        <p className="absolute">{oneSurah ? 1 : number}</p>
      </HeaderCard>
      <BodyCard>
        {oneSurah ? <Card data={data[0]} /> : <Card data={data} />}
      </BodyCard>
    </Link>
  );
}
