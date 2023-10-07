import PropTypes from "prop-types";

Navbar.propTypes = {
  children: PropTypes.node,
};

export default function Navbar(props) {
  const { children } = props;
  return (
    <nav className="bg-[#235D3A] w-[80%] rounded-xl mx-auto fixed bottom-5 left-0 right-0">
      <ul
        className="flex justify-evenly py-3 items-center gap-y-4"
      >
        {children}
      </ul>
    </nav>
  );
}
