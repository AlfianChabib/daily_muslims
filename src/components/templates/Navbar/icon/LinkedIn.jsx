import PropTypes from "prop-types";

LinkedIn.propTypes = {
  href: PropTypes.string,
};

export default function LinkedIn(props) {
  const { href } = props;

  return (
    <a href={href} target="_blank" rel="noreferrer">
      <svg
        width="22"
        height="21"
        viewBox="0 0 22 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 8C13.6739 8 12.4021 8.52678 11.4645 9.46447C10.5268 10.4021 10 11.6739 10 13V19H12V13C12 12.2043 12.3161 11.4413 12.8787 10.8787C13.4413 10.3161 14.2043 10 15 10C15.7957 10 16.5587 10.3161 17.1213 10.8787C17.6839 11.4413 18 12.2043 18 13V19H20V13C20 11.6739 19.4732 10.4021 18.5355 9.46447C17.5979 8.52678 16.3261 8 15 8ZM10.0503 8.05025C11.363 6.7375 13.1435 6 15 6C16.8565 6 18.637 6.7375 19.9497 8.05025C21.2625 9.36301 22 11.1435 22 13V20C22 20.5523 21.5523 21 21 21H17C16.4477 21 16 20.5523 16 20V13C16 12.7348 15.8946 12.4804 15.7071 12.2929C15.5196 12.1054 15.2652 12 15 12C14.7348 12 14.4804 12.1054 14.2929 12.2929C14.1054 12.4804 14 12.7348 14 13V20C14 20.5523 13.5523 21 13 21H9C8.44772 21 8 20.5523 8 20V13C8 11.1435 8.7375 9.36301 10.0503 8.05025Z"
          fill="#235D3A"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 8C0 7.44772 0.447715 7 1 7H5C5.55228 7 6 7.44772 6 8V20C6 20.5523 5.55228 21 5 21H1C0.447715 21 0 20.5523 0 20V8ZM2 9V19H4V9H2Z"
          fill="#235D3A"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 2C2.44772 2 2 2.44772 2 3C2 3.55228 2.44772 4 3 4C3.55228 4 4 3.55228 4 3C4 2.44772 3.55228 2 3 2ZM0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3Z"
          fill="#235D3A"
        />
      </svg>
    </a>
  );
}