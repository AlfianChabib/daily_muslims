import PropTypes from "prop-types";

GithubIcon.propTypes = {
  href: PropTypes.string,
};

export default function GithubIcon(props) {
  const { href } = props;

  return (
    <a title="GitHub" href={href} target="_blank" rel="noreferrer">
      <svg
        width="22"
        height="24"
        viewBox="0 0 22 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 19.0268C3 20.5268 3 16.5268 1 16.0268M15 22.0268V18.1568C15.0375 17.68 14.9731 17.2006 14.811 16.7506C14.6489 16.3006 14.3929 15.8902 14.06 15.5468C17.2 15.1968 20.5 14.0068 20.5 8.54679C20.4997 7.15062 19.9627 5.80799 19 4.79679C19.4559 3.5753 19.4236 2.22514 18.91 1.02679C18.91 1.02679 17.73 0.676793 15 2.50679C12.708 1.88561 10.292 1.88561 8 2.50679C5.27 0.676793 4.09 1.02679 4.09 1.02679C3.57638 2.22514 3.54414 3.5753 4 4.79679C3.03013 5.81549 2.49252 7.17026 2.5 8.57679C2.5 13.9968 5.8 15.1868 8.94 15.5768C8.611 15.9168 8.35726 16.3222 8.19531 16.7667C8.03335 17.2112 7.96681 17.6849 8 18.1568V22.0268"
          stroke="#235D3A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
