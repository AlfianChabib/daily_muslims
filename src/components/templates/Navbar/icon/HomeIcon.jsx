import PropTypes from "prop-types";
import { Link } from "react-router-dom";

HomeIcon.propTypes = {
  active: PropTypes.bool,
};

export default function HomeIcon(props) {
  const { active } = props;

  return (
    <li>
      <Link title="Back to Home" to={"/"}>
        {active ? (
          <svg
            width="30"
            height="29"
            viewBox="0 0 30 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.1579 0.632069C13.6845 0.222414 14.3327 0 14.9999 0C15.667 0 16.3152 0.222414 16.8418 0.632069L29.4176 10.4119C30.547 11.2924 29.9231 13.0998 28.4951 13.0998H26.9996V25.0996C26.9996 25.8952 26.6835 26.6583 26.1209 27.2209C25.5583 27.7834 24.7953 28.0995 23.9997 28.0995H6.00003C5.2044 28.0995 4.44135 27.7834 3.87876 27.2209C3.31616 26.6583 3.0001 25.8952 3.0001 25.0996V13.0998H1.50463C0.0751541 13.0998 -0.545833 11.2909 0.582144 10.4134L13.1579 0.632069Z"
              fill="#C8EAD1"
            />
          </svg>
        ) : (
          <svg
            width="30"
            height="29"
            viewBox="0 0 30 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.1579 0.632069C13.6845 0.222414 14.3327 0 14.9999 0C15.667 0 16.3152 0.222414 16.8418 0.632069L29.4176 10.4119C30.547 11.2924 29.9231 13.0998 28.4951 13.0998H26.9996V25.0996C26.9996 25.8952 26.6835 26.6583 26.1209 27.2209C25.5583 27.7834 24.7953 28.0995 23.9997 28.0995H6.00003C5.2044 28.0995 4.44135 27.7834 3.87876 27.2209C3.31616 26.6583 3.0001 25.8952 3.0001 25.0996V13.0998H1.50463C0.0751541 13.0998 -0.545833 11.2909 0.582144 10.4134L13.1579 0.632069ZM5.43755 10.4374C5.78104 10.7149 6.00003 11.1394 6.00003 11.6148V25.0996H23.9997V11.6148C23.9997 11.1394 24.2187 10.7149 24.5622 10.4374L14.9999 3.00052L5.43755 10.4374Z"
              fill="#C8EAD1"
            />
          </svg>
        )}
      </Link>
    </li>
  );
}
