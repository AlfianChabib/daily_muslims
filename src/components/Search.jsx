export default function Search() {
  return (
    <form>
      <div className="relative w-[90%] bg-gray-300 mx-auto mt-2">
        <input type="text" placeholder="Cari Surat" className="bg-transparent focus:outline-none py-3 px-3" />
        <p className="absolute top-0 right-0">icon</p>
      </div>
    </form>
  );
}
