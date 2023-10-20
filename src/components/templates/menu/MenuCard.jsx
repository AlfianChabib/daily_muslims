import { Link } from "react-router-dom";
import PropTypes from "prop-types";

MenuCard.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
};

export default function MenuCard({ title, link }) {
  return (
    <Link
      title={title}
      to={link}
      className="border-2 border-[#235D3A] hover:bg-[#235D3A] active:bg-[#235D3A] active:text-white transition-colors hover:text-white rounded-lg text-[#235D3A] font-medium  text-center py-3"
    >
      {title}
    </Link>
  );
}
