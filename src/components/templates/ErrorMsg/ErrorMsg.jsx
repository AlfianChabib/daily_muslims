import PropTypes from "prop-types";

ErrorMsg.propTypes = {
  children: PropTypes.node,
};

export default function ErrorMsg(props) {
  const { children } = props;
  return (
    <div className="w-full h-[80vh] flex justify-center items-center px-8">
      <h1 className="text-2xl font-bold text-red-600 text-center">
        {children}
      </h1>
    </div>
  );
}
