import PropTypes from "prop-types";

HeaderCard.propTypes = {
  children: PropTypes.node,
};

export default function HeaderCard(props) {
  const { children } = props;
  return (
    <div className="flex bg-[#397D54] w-12 h-12 relative rounded-lg justify-center items-center text-white">
      {children}
    </div>
  );
}
