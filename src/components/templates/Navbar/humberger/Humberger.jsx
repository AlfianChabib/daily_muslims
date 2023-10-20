import PropTypes from "prop-types";

Humberger.propTypes = {
  child: PropTypes.number,
};

export default function Humberger(props) {
  const { child } = props;

  return (
    <span
      className={`h-[2px] bg-[#235D3A] my-1 ${
        child === 2 ? "w-[13px]" : "w-[20px]"
      }`}
    ></span>
  );
}
