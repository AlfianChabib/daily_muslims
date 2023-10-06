import Humberger from "./humberger/Humberger";
import PropTypes from "prop-types";

NavbarTop.propTypes = {
  text: PropTypes.string,
};

export default function NavbarTop(props) {
  const { text } = props;

  return (
    <nav className="flex items-center ms-3 gap-x-10 mt-2 py-2">
      <div className="flex gap-y-1 flex-col">
        <Humberger child={1} />
        <Humberger child={2} />
        <Humberger child={3} />
      </div>
      <h1 className="text-xl text-[#235D3A] font-semibold">{text}</h1>
    </nav>
  );
}
