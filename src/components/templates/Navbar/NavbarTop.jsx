import { Link } from "react-router-dom";
import Humberger from "./humberger/Humberger";
import PropTypes from "prop-types";

NavbarTop.propTypes = {
  text: PropTypes.string,
  isPageHome: PropTypes.bool,
};

export default function NavbarTop(props) {
  const { text, isPageHome } = props;

  const pageHome = " w-full mx-auto right-0 left-0 justify-between px-6";
  const nonPageHome = "w-full justify-around";

  return (
    <nav
      className={`flex sticky top-0 bg-white -mt-10 z-10 items-center py-3 ${
        isPageHome ? pageHome : nonPageHome
      }`}
    >
      {isPageHome ? null : (
        <Link
          to={"/"}
          className="text-[#235D3A] hover:underline active:underline"
        >
          Home
        </Link>
      )}
      <h1 className="text-lg text-[#235D3A] font-semibold">{text}</h1>
      <div className="flex gap-y-1 flex-col">
        <Humberger child={1} />
        <Humberger child={2} />
        <Humberger child={3} />
      </div>
    </nav>
  );
}
