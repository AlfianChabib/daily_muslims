import { Link } from "react-router-dom";
import HeaderCard from "../Card/HeaderCard";
import BodyCard from "../Card/BodyCard";
import NumberIcon from "../Home/icon/NumberIcon";
import Card from "../Home/Card";
import PropTypes from "prop-types";

ListCardFavorite.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
};

export default function ListCardFavorite(props) {
  const { data, index } = props;

  return (
    <Link
      title="link to surah"
      to={"/surah/" + data.nomor}
      className="flex pb-2 items-center focus:outline-none"
    >
      <HeaderCard>
        <NumberIcon />
        <p className="absolute">{index + 1}</p>
      </HeaderCard>
      <BodyCard>
        <Card data={data} isFav={true} />
      </BodyCard>
    </Link>
  );
}
