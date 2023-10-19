import { useState } from "react";
import Navbar from "../../components/templates/Navbar/Navbar";
import NavbarTop from "../../components/templates/Navbar/NavbarTop";
import SideNavbar from "../../components/templates/Navbar/SideNavbar";
import HomeIcon from "../../components/templates/Navbar/icon/HomeIcon";
import MenuIcon from "../../components/templates/Navbar/icon/MenuIcon";
import StarIcon from "../../components/templates/Navbar/icon/StarIcon";
import tahlilJson from "../../data/tahlil.json";

export default function Tahlil() {
  const [displayArti, setDisplayArti] = useState(false);

  const handleDisplayArti = () => {
    setDisplayArti(!displayArti);
  };

  return (
    <section>
      <NavbarTop text={"Tahlil"} />
      <SideNavbar />
      <div className="flex flex-col w-full px-4 mt-2 mb-12">
        <div className="bg-[#235D3A] text-white rounded-xl overflow-hidden mb-2 drop-shadow-dm1">
          <div className="flex border-b mb-2 px-2 py-2 items-center justify-between">
            <h2 className="text-lg  font-medium bg-[#235D3A]">Keterangan :</h2>
            <button title="Arti" onClick={handleDisplayArti}>
              {!displayArti ? (
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="15" cy="15" r="14.5" stroke="white" />
                  <path
                    d="M9.35294 18.2632V19.8421C9.35301 20.2403 9.50257 20.6238 9.77164 20.9157C10.0407 21.2076 10.4094 21.3864 10.8039 21.4163L10.9216 21.4211H13.2745V23H10.9216C10.0895 23 9.29154 22.6673 8.70319 22.0751C8.11484 21.4829 7.78431 20.6796 7.78431 19.8421V18.2632H9.35294ZM19.549 14.3158L23 23H21.3098L20.3678 20.6316H17.16L16.2196 23H14.5302L17.9804 14.3158H19.549ZM18.7647 16.5934L17.7867 19.0526H19.7412L18.7647 16.5934ZM11.7059 8V9.57895H14.8431V15.1053H11.7059V17.4737H10.1373V15.1053H7V9.57895H10.1373V8H11.7059ZM18.7647 8.78947C19.5968 8.78947 20.3947 9.12218 20.9831 9.7144C21.5714 10.3066 21.902 11.1098 21.902 11.9474V13.5263H20.3333V11.9474C20.3333 11.5286 20.1681 11.127 19.8739 10.8309C19.5797 10.5348 19.1807 10.3684 18.7647 10.3684H16.4118V8.78947H18.7647ZM10.1373 11.1579H8.56863V13.5263H10.1373V11.1579ZM13.2745 11.1579H11.7059V13.5263H13.2745V11.1579Z"
                    fill="white"
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
                  <circle cx="15" cy="15" r="15" fill="white" />
                  <path
                    d="M9.35294 18.2632V19.8421C9.35301 20.2403 9.50257 20.6238 9.77164 20.9157C10.0407 21.2076 10.4094 21.3864 10.8039 21.4163L10.9216 21.4211H13.2745V23H10.9216C10.0895 23 9.29154 22.6673 8.70319 22.0751C8.11484 21.4829 7.78431 20.6796 7.78431 19.8421V18.2632H9.35294ZM19.549 14.3158L23 23H21.3098L20.3678 20.6316H17.16L16.2196 23H14.5302L17.9804 14.3158H19.549ZM18.7647 16.5934L17.7867 19.0526H19.7412L18.7647 16.5934ZM11.7059 8V9.57895H14.8431V15.1053H11.7059V17.4737H10.1373V15.1053H7V9.57895H10.1373V8H11.7059ZM18.7647 8.78947C19.5968 8.78947 20.3947 9.12218 20.9831 9.7144C21.5714 10.3066 21.902 11.1098 21.902 11.9474V13.5263H20.3333V11.9474C20.3333 11.5286 20.1681 11.127 19.8739 10.8309C19.5797 10.5348 19.1807 10.3684 18.7647 10.3684H16.4118V8.78947H18.7647ZM10.1373 11.1579H8.56863V13.5263H10.1373V11.1579ZM13.2745 11.1579H11.7059V13.5263H13.2745V11.1579Z"
                    fill="#397D54"
                  />
                </svg>
              )}
            </button>
          </div>
          <p className="text-sm px-2 pb-2">
            Tahlil (Arab: التهليل at-Tahliil) adalah bacaan kalimat tauhid,
            yaitu kalimat Lā ilāha illa l-Lāh (لا إله إلا الله, Tiada tuhan
            selain Allah). Kalimat tahlil ini bagian dari kalimat syahadat, yang
            merupakan asas dari lima rukun Islam, juga sebagai inti dan seluruh
            landasan ajaran Islam.
          </p>
        </div>
        {tahlilJson.data.map((data, index) => (
          <div
            className="mt-2 mb-2 bg-white text-[#235D3A] rounded-md overflow-hidden drop-shadow-dm1"
            key={index}
          >
            <h3 className="text-lg mb-2 px-2 font-medium bg-gray-200">
              {data.title}
            </h3>
            <div className="flex flex-col w-full justify-between">
              <p className="arabic px-2 leading-10 text-xl text-end">
                {data.arabic}
              </p>
            </div>
            {displayArti && (
              <p className="text-sm px-2 py-2 mt-2 bg-gray-200">
                {data.translation}
              </p>
            )}
          </div>
        ))}
      </div>
      <Navbar variant="sticky">
        <HomeIcon />
        <StarIcon />
        <MenuIcon active={true} />
      </Navbar>
    </section>
  );
}
