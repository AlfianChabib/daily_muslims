import PropTypes from "prop-types";

BodyCard.propTypes = {
  children: PropTypes.node,
};

export default function BodyCard(props) {
  const { children } = props;
  return (
    <div className="flex bg-[#397D54] flex-1 ml-2 h-16 rounded-lg py-1 px-2 justify-between">
      {children}
    </div>
  );
}
