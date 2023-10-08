import Humberger from "./humberger/Humberger";
import PropTypes from "prop-types";

NavbarTop.propTypes = {
  text: PropTypes.string,
};

export default function NavbarTop(props) {
  const { text } = props;

  return (
    <nav className="flex absolute w-full top-0 bg-white z-10 items-center ps-4 gap-x-10 py-3">
      <div className="flex gap-y-1 flex-col">
        <Humberger child={1} />
        <Humberger child={2} />
        <Humberger child={3} />
      </div>
      <h1 className="text-xl text-[#235D3A] font-semibold">{text}</h1>
    </nav>
  );
}
