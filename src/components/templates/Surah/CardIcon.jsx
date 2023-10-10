import PropTypes from "prop-types";
import { useState } from "react";

CardIcon.propTypes = {
  audio: PropTypes.string,
};

export default function CardIcon({ audio }) {
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const audioElement = document.getElementById(audio);
    if (audioElement.paused) {
      audioElement.play();
      setPlaying(true);
    } else {
      audioElement.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="flex gap-4">
      <button>
        <svg
          width="22"
          height="20"
          viewBox="0 0 22 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 1C0 0.447715 0.447715 0 1 0H7C8.32608 0 9.59785 0.526784 10.5355 1.46447C11.4732 2.40215 12 3.67392 12 5V19C12 19.5523 11.5523 20 11 20C10.4477 20 10 19.5523 10 19C10 18.4696 9.78929 17.9609 9.41421 17.5858C9.03914 17.2107 8.53043 17 8 17H1C0.447715 17 0 16.5523 0 16V1ZM10 15.5359V5C10 4.20435 9.68393 3.44129 9.12132 2.87868C8.55871 2.31607 7.79565 2 7 2H2V15H8C8.70823 15 9.39709 15.1878 10 15.5359Z"
            fill="#397D54"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.4645 1.46447C12.4022 0.526784 13.6739 0 15 0H21C21.5523 0 22 0.447715 22 1V16C22 16.5523 21.5523 17 21 17H14C13.4696 17 12.9609 17.2107 12.5858 17.5858C12.2107 17.9609 12 18.4696 12 19C12 19.5523 11.5523 20 11 20C10.4477 20 10 19.5523 10 19V5C10 3.67392 10.5268 2.40215 11.4645 1.46447ZM12 15.5359C12.6029 15.1878 13.2918 15 14 15H20V2H15C14.2044 2 13.4413 2.31607 12.8787 2.87868C12.3161 3.44129 12 4.20435 12 5V15.5359Z"
            fill="#397D54"
          />
        </svg>
      </button>
      <button onClick={() => togglePlay()}>
        {playing ? (
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.1376 6.66542L5.59758 0.509289C5.02725 0.173879 4.37991 -0.00182794 3.72132 1.43393e-05C3.06273 0.00185662 2.41634 0.181182 1.84783 0.519778C1.27931 0.858373 0.808908 1.34418 0.484405 1.92784C0.159901 2.51151 -0.0071445 3.17224 0.000234272 3.84293V16.1996C0.000234272 17.2076 0.39338 18.1742 1.09318 18.8869C1.79299 19.5996 2.74213 20 3.7318 20C4.38694 19.9989 5.03031 19.8226 5.59758 19.4888L16.1376 13.3327C16.704 12.9989 17.1742 12.5193 17.501 11.942C17.8279 11.3646 18 10.7099 18 10.0435C18 9.37709 17.8279 8.72239 17.501 8.14507C17.1742 7.56776 16.704 7.08814 16.1376 6.75432V6.66542Z"
              fill="#397D54"
            />
          </svg>
        ) : (
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.1376 6.66542L5.59759 0.509289C5.02725 0.173879 4.37991 -0.00182794 3.72132 1.43393e-05C3.06273 0.00185662 2.41634 0.181182 1.84783 0.519778C1.27931 0.858373 0.808908 1.34418 0.484405 1.92784C0.159901 2.51151 -0.0071445 3.17224 0.000234272 3.84293V16.1996C0.000234272 17.2076 0.39338 18.1742 1.09318 18.8869C1.79299 19.5996 2.74213 20 3.7318 20C4.38694 19.9989 5.03031 19.8226 5.59759 19.4888L16.1376 13.3327C16.704 12.9989 17.1742 12.5193 17.501 11.942C17.8279 11.3646 18 10.7099 18 10.0435C18 9.37709 17.8279 8.72239 17.501 8.14507C17.1742 7.56776 16.704 7.08814 16.1376 6.75432V6.66542ZM15.0465 11.3214L4.50648 17.5664C4.27025 17.7028 4.00334 17.7745 3.7318 17.7745C3.46026 17.7745 3.19336 17.7028 2.95712 17.5664C2.72155 17.4279 2.52593 17.2287 2.38995 16.9888C2.25396 16.7488 2.18239 16.4767 2.18244 16.1996V3.79849C2.18239 3.52146 2.25396 3.2493 2.38995 3.00937C2.52593 2.76944 2.72155 2.57021 2.95712 2.43169C3.19433 2.29741 3.46044 2.22488 3.7318 2.22056C4.00298 2.22623 4.26877 2.29867 4.50648 2.43169L15.0465 8.63227C15.2822 8.77073 15.4779 8.96994 15.614 9.20987C15.75 9.4498 15.8217 9.72199 15.8217 9.99906C15.8217 10.2761 15.75 10.5483 15.614 10.7883C15.4779 11.0282 15.2822 11.2274 15.0465 11.3659V11.3214Z"
              fill="#397D54"
            />
          </svg>
        )}
      </button>
      <button>
        <svg
          width="17"
          height="20"
          viewBox="0 0 17 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.1875 2C2.90571 2 2.63546 2.10536 2.4362 2.29289C2.23694 2.48043 2.125 2.73478 2.125 3V17.0568L7.88243 13.1863C8.25186 12.9379 8.74814 12.9379 9.11757 13.1863L14.875 17.0568V3C14.875 2.73478 14.7631 2.48043 14.5638 2.29289C14.3645 2.10536 14.0943 2 13.8125 2H3.1875ZM0.933597 0.878679C1.53137 0.31607 2.34212 0 3.1875 0H13.8125C14.6579 0 15.4686 0.31607 16.0664 0.878679C16.6642 1.44129 17 2.20435 17 3V19C17 19.3746 16.7776 19.7178 16.4237 19.8892C16.0698 20.0606 15.6438 20.0315 15.3199 19.8137L8.5 15.2289L1.68007 19.8137C1.3562 20.0315 0.930208 20.0606 0.57632 19.8892C0.222432 19.7178 0 19.3746 0 19V3C0 2.20435 0.335825 1.44129 0.933597 0.878679Z"
            fill="#397D54"
          />
        </svg>
      </button>
      <audio
        preload="none"
        src={audio}
        id={audio}
        onEnded={() => setPlaying(false)}
      />
    </div>
  );
}
