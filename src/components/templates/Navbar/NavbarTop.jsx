import { Link } from "react-router-dom";
import Humberger from "./humberger/Humberger";
import PropTypes from "prop-types";
import { useNavbar } from "../../../stores/NavbarStore";

NavbarTop.propTypes = {
  text: PropTypes.string,
  isPageHome: PropTypes.bool,
};

export default function NavbarTop(props) {
  const { text, isPageHome } = props;
  const { setIsOpen } = useNavbar();

  const pageHome = " w-full mx-auto right-0 left-0 justify-between px-6";
  const nonPageHome = "w-full justify-between px-6";

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
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.366116 10.8839C-0.122039 10.3957 -0.122039 9.60427 0.366116 9.11612L9.11612 0.366117C9.60427 -0.12204 10.3957 -0.12204 10.8839 0.366117C11.372 0.85427 11.372 1.64573 10.8839 2.13388L4.26777 8.75L18.75 8.75C19.4404 8.75 20 9.30964 20 10C20 10.6904 19.4404 11.25 18.75 11.25L4.26777 11.25L10.8839 17.8661C11.372 18.3543 11.372 19.1457 10.8839 19.6339C10.3957 20.122 9.60427 20.122 9.11612 19.6339L0.366116 10.8839Z"
              fill="#235D3A"
            />
          </svg>
        </Link>
      )}
      <h1 className="text-lg text-[#235D3A] font-semibold">{text}</h1>
      <div
        className="flex  flex-col cursor-pointer"
        onClick={() => {
          setIsOpen(true);
        }}
        role="button"
      >
        <Humberger child={1} />
        <Humberger child={2} />
        <Humberger child={3} />
      </div>
    </nav>
  );
}
