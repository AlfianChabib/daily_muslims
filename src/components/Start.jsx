import PropTypes from "prop-types";
import Header from "./templates/Header";

Start.propTypes = {
  toggleStart: PropTypes.func,
};

export default function Start(props) {
  const { toggleStart } = props;

  return (
    <div className="flex flex-col absolute z-50 w-full min-h-screen bg-bg-view bg-cover bg-center justify-between">
      <Header />
      <button
        onClick={toggleStart}
        className="w-36 h-10 text-white border rounded-full mx-auto mb-20 hover:bg-white hover:text-[#235D3A]"
      >
        Get Started <span>&gt;</span>
      </button>
    </div>
  );
}
