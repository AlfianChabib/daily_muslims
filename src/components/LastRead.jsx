export default function LastRead() {
  return (
    <div className="w-[90%] mx-auto bg-[#397D54] p-3 rounded-2xl mt-2">
      <p className="text-white font-light">Terakhir Dibaca</p>
      <div className="flex justify-between items-center mt-2">
        <div>
          <h2 className="text-white font-bold text-xl">QS. Al-Baqarah</h2>
          <p className="text-white font-light text-sm">Ayat : 40</p>
        </div>
        <button className="bg-white text-[#397D54] py-1 rounded-xl w-[115px] transition-colors cursor-pointer hover:bg-gray-300">
          Lanjutkan
        </button>
      </div>
    </div>
  );
}
