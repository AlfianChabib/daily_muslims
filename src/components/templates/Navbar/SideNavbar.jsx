import { useNavbar } from "../../../stores/NavbarStore";
import Details from "./Details";
import Li from "./Li";
// import { Instagram } from "../../../assets/navbar-icon/instagram.svg";

export default function SideNavbar() {
  const { isOpen, setIsOpen } = useNavbar();

  return (
    <nav
      className={`h-[100vh] w-[70%] bg-[#ebebeb] fixed z-30 top-0 right-0 flex flex-col ${
        isOpen ? "animate-slide" : "hidden translate-x-[500px]"
      }`}
    >
      <div className="w-full h-[100px] bg-[#397D54] p-4 relative">
        <button
          className="absolute top-[5px] text-5xl cursor-pointer text-white left-[10px]"
          onClick={() => setIsOpen(false)}
        >
          &times;
        </button>
        <h1 className="text-right text-white font-bold text-2xl">
          Daily Muslims
        </h1>
        <p className="text-right text-white text-xs">
          Baca Al-Quran Kapanpun & Dimanapun
        </p>
      </div>
      <div className="flex flex-col px-4 my-4">
        <Details option="Theme">
          <ul className="flex justify-around bg-gray-200 my-2 p-2 text-gray-800  rounded-md">
            <Li text={"Light"} active={true} />
            <Li text={"Dark"} />
          </ul>
        </Details>

        <Details option={"About"}>
          <div className="bg-gray-200 my-2 p-2 text-gray-800 rounded-md">
            <p className="text-justify text-sm">
              Daily Muslims di buat dengan tujuan agar kita sebagi umat Muslim
              bisa membaca Al-Quran dimanapun dan kapanpun.
              <br />
              <br />
              Website ini di buat untuk study kasus pembelajaran dengan
              menggunakan library ReactJs, Tailwindcss dan Zustand
            </p>
          </div>
        </Details>

        <Details option={"Contact Developer"}>
          <div className="flex flex-col bg-gray-200 my-2 p-2 text-gray-800 rounded-md">
            <h3 className="text-lg font-medium ">Alfian Chabib</h3>
            <p className="text-sm font-medium">alfianchabib109@gmail.com</p>
            <div className="flex w-full justify-end gap-4 mt-2">
              <a
                href="https://www.instagram.com/yannnisnobody/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 2C3.79086 2 2 3.79086 2 6V16C2 18.2091 3.79086 20 6 20H16C18.2091 20 20 18.2091 20 16V6C20 3.79086 18.2091 2 16 2H6ZM0 6C0 2.68629 2.68629 0 6 0H16C19.3137 0 22 2.68629 22 6V16C22 19.3137 19.3137 22 16 22H6C2.68629 22 0 19.3137 0 16V6Z"
                    fill="#235D3A"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.4833 7.98918C10.8591 7.89662 10.2216 8.00324 9.66151 8.29386C9.10141 8.58449 8.64721 9.04432 8.36351 9.60796C8.07982 10.1716 7.98107 10.8103 8.08132 11.4333C8.18157 12.0563 8.47571 12.6319 8.9219 13.0781C9.36809 13.5242 9.94361 13.8184 10.5666 13.9186C11.1896 14.0189 11.8283 13.9201 12.392 13.6364C12.9556 13.3527 13.4155 12.8985 13.7061 12.3384C13.9967 11.7783 14.1033 11.1409 14.0108 10.5167C13.9164 9.87999 13.6197 9.29054 13.1645 8.83541C12.7094 8.38028 12.12 8.08359 11.4833 7.98918ZM8.74037 6.51862C9.67386 6.03424 10.7363 5.85655 11.7766 6.01081C12.8378 6.16817 13.8202 6.66264 14.5788 7.4212C15.3373 8.17975 15.8318 9.16216 15.9891 10.2233C16.1434 11.2636 15.9657 12.3261 15.4813 13.2596C14.997 14.1931 14.2306 14.9501 13.2912 15.4229C12.3518 15.8957 11.2872 16.0603 10.2489 15.8932C9.21054 15.7261 8.25134 15.2359 7.50768 14.4923C6.76403 13.7486 6.2738 12.7894 6.10672 11.7511C5.93964 10.7128 6.10422 9.64818 6.57704 8.70878C7.04987 7.76938 7.80687 7.00299 8.74037 6.51862Z"
                    fill="#235D3A"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.5 5.5C15.5 4.94772 15.9477 4.5 16.5 4.5H16.51C17.0623 4.5 17.51 4.94772 17.51 5.5C17.51 6.05228 17.0623 6.5 16.51 6.5H16.5C15.9477 6.5 15.5 6.05228 15.5 5.5Z"
                    fill="#235D3A"
                  />
                </svg>
              </a>
              <a
                href="https://github.com/AlfianChabib"
                target="_blank"
                rel="noreferrer"
              >
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
              <a
                href="https://www.linkedin.com/in/alfian-chabib-2a042117b/"
                target="_blank"
                rel="noreferrer"
              >
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
            </div>
          </div>
          <div className="flex flex-col bg-gray-200 my-2 p-2 text-gray-800 rounded-md">
            <h3 className="text-lg font-medium ">Ariel Rizki Muhtamad Bakri</h3>
            <p className="text-sm font-medium">glennviktor5@gmail.com</p>
            <div className="flex w-full justify-end gap-4 mt-2">
              <a
                href="https://www.instagram.com/aaarrl.r/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 2C3.79086 2 2 3.79086 2 6V16C2 18.2091 3.79086 20 6 20H16C18.2091 20 20 18.2091 20 16V6C20 3.79086 18.2091 2 16 2H6ZM0 6C0 2.68629 2.68629 0 6 0H16C19.3137 0 22 2.68629 22 6V16C22 19.3137 19.3137 22 16 22H6C2.68629 22 0 19.3137 0 16V6Z"
                    fill="#235D3A"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.4833 7.98918C10.8591 7.89662 10.2216 8.00324 9.66151 8.29386C9.10141 8.58449 8.64721 9.04432 8.36351 9.60796C8.07982 10.1716 7.98107 10.8103 8.08132 11.4333C8.18157 12.0563 8.47571 12.6319 8.9219 13.0781C9.36809 13.5242 9.94361 13.8184 10.5666 13.9186C11.1896 14.0189 11.8283 13.9201 12.392 13.6364C12.9556 13.3527 13.4155 12.8985 13.7061 12.3384C13.9967 11.7783 14.1033 11.1409 14.0108 10.5167C13.9164 9.87999 13.6197 9.29054 13.1645 8.83541C12.7094 8.38028 12.12 8.08359 11.4833 7.98918ZM8.74037 6.51862C9.67386 6.03424 10.7363 5.85655 11.7766 6.01081C12.8378 6.16817 13.8202 6.66264 14.5788 7.4212C15.3373 8.17975 15.8318 9.16216 15.9891 10.2233C16.1434 11.2636 15.9657 12.3261 15.4813 13.2596C14.997 14.1931 14.2306 14.9501 13.2912 15.4229C12.3518 15.8957 11.2872 16.0603 10.2489 15.8932C9.21054 15.7261 8.25134 15.2359 7.50768 14.4923C6.76403 13.7486 6.2738 12.7894 6.10672 11.7511C5.93964 10.7128 6.10422 9.64818 6.57704 8.70878C7.04987 7.76938 7.80687 7.00299 8.74037 6.51862Z"
                    fill="#235D3A"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.5 5.5C15.5 4.94772 15.9477 4.5 16.5 4.5H16.51C17.0623 4.5 17.51 4.94772 17.51 5.5C17.51 6.05228 17.0623 6.5 16.51 6.5H16.5C15.9477 6.5 15.5 6.05228 15.5 5.5Z"
                    fill="#235D3A"
                  />
                </svg>
              </a>
              <a
                href="https://github.com/Glenn-Rhee"
                target="_blank"
                rel="noreferrer"
              >
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
              <a
                href="https://www.linkedin.com/in/ariel-rizki-21b032287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noreferrer"
              >
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
            </div>
          </div>
        </Details>

        <Details option={"Repository"}>
          <a
            href="https://github.com/AlfianChabib/daily_muslims"
            className="text-blue-950 underline"
            target="_blank"
            rel="noreferrer"
          >
            AlfianChabib/daily_muslims
          </a>
        </Details>
      </div>
    </nav>
  );
}
