import { useNavbar } from "../../../stores/NavbarStore";
import Details from "./Details";
import Li from "./Li";

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
      <div className="w-[80%] mx-auto mt-4">
        <Details option="Theme">
          <ul className="mt-2">
            <Li text={"Light"} />
            <Li text={"Dark"} />
          </ul>
        </Details>

        <Details option={"About"}>
          <p className="text-right mt-2">Lorem ipsum dolor sit amet.</p>
        </Details>

        <Details option={"Developer"}>
          <p className="text-right mt-2">Lorem ipsum dolor sit amet.</p>
        </Details>

        <Details option={"Repository"}>
          <p className="text-right mt-2">Lorem ipsum dolor sit amet.</p>
        </Details>
      </div>
    </nav>
  );
}
