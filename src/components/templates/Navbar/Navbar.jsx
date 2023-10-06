import PropTypes from "prop-types";

Navbar.propTypes = {
  children: PropTypes.node,
};

export default function Navbar(props) {
  const { children } = props;
  return (
    <nav className="bg-[#235D3A] w-[80%] mx-auto fixed bottom-5 left-0 right-0">
      <ul
        className="flex justify-evenly py-3 rounded-xl items-center gap-y-4"
        style={{ borderRadius: "24px" }}
      >
        {children}
      </ul>
    </nav>
  );
}
