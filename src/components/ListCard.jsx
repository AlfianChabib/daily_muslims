import { Link } from "react-router-dom";

export default function ListCard() {
  return (
    <Link to="/favorit" className="flex pb-2 items-center">
      <div className="flex bg-[#397D54] w-12 h-12 relative rounded-lg justify-center items-center text-white">
        <span>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="6.15686"
              y="6.15686"
              width="27.2843"
              height="27.2843"
              rx="1.5"
              stroke="#D9D9D9"
            />
            <rect
              x="20"
              y="0.707107"
              width="27.2843"
              height="27.2843"
              rx="1.5"
              transform="rotate(45 20 0.707107)"
              stroke="#D9D9D9"
            />
          </svg>
        </span>
        <p className="absolute">1</p>
      </div>
      <div className="flex bg-[#397D54] flex-1 ml-2 h-12 rounded-lg py-1 px-2 justify-between">
        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-1">
            <h2 className="text-white text-sm font-medium">Al-Fatihah</h2>
            <p className="text-white text-xs">(Pembukaan)</p>
          </div>
          <p className="text-xs text-[#C8EAD1]">Mekkah | 7 Ayat</p>
        </div>
        <p className="arabic text-2xl text-[#C8EAD1]">الفاتحة</p>
      </div>
    </Link>
  );
}
