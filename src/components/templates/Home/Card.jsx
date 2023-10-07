export default function Card() {
  return (
    <>
      <div className="flex flex-col justify-between">
        <div className="flex items-center gap-1">
          <h2 className="text-white text-sm font-medium">Al-Fatihah</h2>
          <p className="text-white text-xs">(Pembukaan)</p>
        </div>
        <p className="text-xs text-[#C8EAD1]">Mekkah | 7 Ayat</p>
      </div>
      <p className="arabic text-2xl text-[#C8EAD1]">الفاتحة</p>
    </>
  );
}
