import { Link } from "react-router-dom";
import HeaderCard from "../Card/HeaderCard";
import BodyCard from "../Card/BodyCard";
import NumberIcon from "../Home/icon/NumberIcon";
import Card from "../Home/Card";
import PropTypes from "prop-types";

ListCardFavorite.propTypes = {
  data: PropTypes.object,
};

export default function ListCardFavorite(props) {
  const { data } = props;

  return (
    <Link>
      <HeaderCard>
        <NumberIcon />
        <p className="absolute">1</p>
      </HeaderCard>
      <BodyCard>
        <Card data={data} isFav={true} />
      </BodyCard>
    </Link>
  );
}
