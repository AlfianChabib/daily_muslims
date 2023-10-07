import PropTypes from "prop-types";

Navbar.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
};

export default function Navbar(props) {
  const { children, variant } = props;

  return (
    <nav
      className={`flex flex-col w-full mx-auto p-4 ${variant} bottom-0 left-0 right-0`}
    >
      <ul className="flex justify-evenly bg-[#235D3A] rounded-xl py-3 items-center gap-y-4">
        {children}
      </ul>
    </nav>
  );
}
