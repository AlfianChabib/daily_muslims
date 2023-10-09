import PropTypes from "prop-types";

SearchIcon.propTypes = {
  isSearching: PropTypes.bool,
};

export default function SearchIcon(props) {
  const { isSearching } = props;

  return (
    <button>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="me-4"
      >
        <path
          d="M17 17L12.95 12.95M12.95 12.95C13.6 12.3 14.1157 11.5282 14.4675 10.6789C14.8193 9.8296 15.0004 8.91931 15.0004 8.00001C15.0004 7.08071 14.8193 6.17041 14.4675 5.32109C14.1157 4.47176 13.6 3.70005 12.95 3.05001C12.3 2.39996 11.5282 1.88432 10.6789 1.53252C9.8296 1.18072 8.9193 0.999649 8 0.999649C7.0807 0.999649 6.1704 1.18072 5.32108 1.53252C4.47176 1.88432 3.70004 2.39996 3.05 3.05001C1.73718 4.36283 0.999641 6.1434 0.999641 8.00001C0.999641 9.85662 1.73718 11.6372 3.05 12.95C4.36282 14.2628 6.14339 15.0004 8 15.0004C9.85661 15.0004 11.6372 14.2628 12.95 12.95Z"
          stroke={isSearching ? "#397D54" : "#888888"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
