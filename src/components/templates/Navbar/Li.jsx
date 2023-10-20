import PropTypes from "prop-types";

Li.propTypes = {
  text: PropTypes.string,
  active: PropTypes.bool,
};

export default function Li(props) {
  const { text, active } = props;
  return (
    <li
      className={`${
        active ? "bg-[#397D54] text-gray-100" : ""
      } flex flex-col text-center w-full rounded-md py-1`}
    >
      {text}
    </li>
  );
}
