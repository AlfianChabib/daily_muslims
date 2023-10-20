import PropTypes from "prop-types";

DeveloperCard.propTypes = {
  children: PropTypes.node,
  devName: PropTypes.string,
  devEmail: PropTypes.string,
};

export default function DeveloperCard(props) {
  const { children, devName, devEmail } = props;

  return (
    <div className="flex flex-col bg-gray-200 my-2 p-2 text-gray-800 rounded-md">
      <h3 className="text-lg font-medium ">{devName}</h3>
      <p className="text-sm font-medium">{devEmail}</p>
      <div className="flex w-full justify-end gap-4 mt-2">{children}</div>
    </div>
  );
}