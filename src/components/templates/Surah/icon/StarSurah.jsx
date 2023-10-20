import PropTypes from "prop-types";

StarSurah.propTypes = {
  isStared: PropTypes.bool,
};

export default function StarSurah(props) {
  const { isStared } = props;

  return isStared ? (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="15" cy="15" r="15" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 5C15.346 5 15.662 5.19531 15.8152 5.50381L18.413 10.7366L24.2224 11.5809C24.5647 11.6306 24.8489 11.8692 24.9557 12.1965C25.0624 12.5237 24.973 12.8828 24.7252 13.1228L20.5223 17.193L21.5142 22.9433C21.5727 23.2824 21.4324 23.6252 21.1525 23.8274C20.8725 24.0296 20.5013 24.0563 20.195 23.8961L15 21.1797L9.80497 23.8961C9.49868 24.0563 9.12751 24.0296 8.84753 23.8274C8.56755 23.6252 8.42733 23.2824 8.48583 22.9433L9.47772 17.1931L5.27481 13.1228C5.02698 12.8828 4.93764 12.5237 5.04435 12.1965C5.15105 11.8692 5.43531 11.6306 5.77764 11.5809L11.587 10.7366L14.1848 5.50381C14.338 5.19531 14.654 5 15 5ZM15 7.94604L13.0061 11.9624C12.8738 12.2289 12.6182 12.4137 12.3224 12.4567L7.86221 13.1049L11.0889 16.2297C11.3033 16.4374 11.4012 16.7367 11.3506 17.0301L10.5893 21.4435L14.5769 19.3584C14.8418 19.2199 15.1582 19.2199 15.4231 19.3584L19.4107 21.4435L18.6494 17.0301C18.5988 16.7367 18.6967 16.4374 18.9111 16.2297L22.1378 13.1049L17.6776 12.4567C17.3818 12.4137 17.1262 12.2289 16.9939 11.9624L15 7.94604Z"
        fill="#397D54"
      />
    </svg>
  ) : (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="15" cy="15" r="14.5" stroke="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 5C15.346 5 15.662 5.19531 15.8152 5.50381L18.413 10.7366L24.2224 11.5809C24.5647 11.6306 24.8489 11.8692 24.9557 12.1965C25.0624 12.5237 24.973 12.8828 24.7252 13.1228L20.5223 17.193L21.5142 22.9433C21.5727 23.2824 21.4324 23.6252 21.1525 23.8274C20.8725 24.0296 20.5013 24.0563 20.195 23.8961L15 21.1797L9.80497 23.8961C9.49868 24.0563 9.12751 24.0296 8.84753 23.8274C8.56755 23.6252 8.42733 23.2824 8.48583 22.9433L9.47772 17.1931L5.27481 13.1228C5.02698 12.8828 4.93764 12.5237 5.04435 12.1965C5.15105 11.8692 5.43531 11.6306 5.77764 11.5809L11.587 10.7366L14.1848 5.50381C14.338 5.19531 14.654 5 15 5ZM15 7.94604L13.0061 11.9624C12.8738 12.2289 12.6182 12.4137 12.3224 12.4567L7.86221 13.1049L11.0889 16.2297C11.3033 16.4374 11.4012 16.7367 11.3506 17.0301L10.5893 21.4435L14.5769 19.3584C14.8418 19.2199 15.1582 19.2199 15.4231 19.3584L19.4107 21.4435L18.6494 17.0301C18.5988 16.7367 18.6967 16.4374 18.9111 16.2297L22.1378 13.1049L17.6776 12.4567C17.3818 12.4137 17.1262 12.2289 16.9939 11.9624L15 7.94604Z"
        fill="white"
      />
    </svg>
  );
}
