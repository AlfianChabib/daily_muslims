import PropTypes from "prop-types";

Details.propTypes = {
  children: PropTypes.node,
  option: PropTypes.string,
};

export default function Details(props) {
  const { children, option } = props;

  return (
    <details className="w-full bg-white p-2 shadow-lg shadow-black/10 cursor-pointer px-4 mb-2">
      <summary className="text-[#397D54] text-xl font-semibold list-none">
        <span className="flex items-center gap-x-2 justify-between">
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.70711 6.70711C6.31658 7.09763 5.68342 7.09763 5.29289 6.70711L0.292894 1.70711C-0.097631 1.31658 -0.0976309 0.683416 0.292894 0.292892C0.683418 -0.097632 1.31658 -0.0976319 1.70711 0.292893L6 4.58579L10.2929 0.292893C10.6834 -0.0976311 11.3166 -0.097631 11.7071 0.292893C12.0976 0.683417 12.0976 1.31658 11.7071 1.70711L6.70711 6.70711Z"
              fill="#235D3A"
            />
          </svg>
          <p>{option}</p>
        </span>
      </summary>
      {children}
    </details>
  );
}
