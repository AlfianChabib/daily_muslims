import { useNavbar } from "../../../stores/NavbarStore";
import Details from "./Details";
import DeveloperCard from "./DeveloperCard";
import Li from "./Li";
import GithubIcon from "./icon/GithubIcon";
import InstagramIcon from "./icon/InstagramIcon";
import LinkedIn from "./icon/LinkedIn";

export default function SideNavbar() {
  const { isOpen, setIsOpen } = useNavbar();

  return (
    <nav
      className={`h-[100vh] w-80 bg-[#ebebeb] fixed z-30 top-0 right-0 flex flex-col ${
        isOpen ? "animate-slide" : "hidden translate-x-[500px]"
      }`}
    >
      <div className="w-full h-[80px] bg-[#397D54] p-4 relative">
        <button
          className="absolute top-[5px] text-4xl cursor-pointer text-white left-[10px]"
          onClick={() => setIsOpen(false)}
        >
          &times;
        </button>
        <div className="border-r-2 border-gray-200 pr-2">
          <h1 className="text-right text-white font-bold text-2xl">
            Daily Muslims
          </h1>
          <p className="text-right text-white text-xs">
            Baca Al-Quran Kapanpun & Dimanapun
          </p>
        </div>
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
          <DeveloperCard
            devName={"Alfian Chabib"}
            devEmail={"alfianchabib109@gmail.com"}
          >
            <InstagramIcon href={"https://www.instagram.com/yannnisnobody/"} />
            <GithubIcon href={"https://github.com/AlfianChabib"} />
            <LinkedIn
              href={"https://www.linkedin.com/in/alfian-chabib-2a042117b/"}
            />
          </DeveloperCard>

          <DeveloperCard
            devName={"Ariel Rizki Muhtamad Bakri"}
            devEmail={"glennviktor5@gmail.com"}
          >
            <InstagramIcon href={"https://www.instagram.com/aaarrl.r/"} />
            <GithubIcon href={"https://github.com/Glenn-Rhee"} />
            <LinkedIn
              href={"https://www.linkedin.com/in/ariel-rizki-21b032287"}
            />
          </DeveloperCard>
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
