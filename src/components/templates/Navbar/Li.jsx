import PropTypes from "prop-types";

Li.propTypes = {
  text: PropTypes.string,
};

export default function Li(props) {
  const { text } = props;
  return (
    <li className="hover:underline active:underline text-right">{text}</li>
  );
}
