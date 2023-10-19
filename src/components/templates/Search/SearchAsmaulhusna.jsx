import PropTypes from "prop-types";

SearchAsmaulhusna.propTypes = {
  value: PropTypes.string,
  setSearchTerm: PropTypes.func,
};

export default function SearchAsmaulhusna({ value, setSearchTerm }) {
  console.log(value);
  return (
    <form>
      <div className="mx-2 bg-gray-300 py-1 rounded-xl my-2 flex items-center">
        <input
          type="text"
          value={value}
          onChange={(e) => setSearchTerm(e.target.value)}
          name="cari asmaul husna"
          placeholder="Cari Asmaul Husna"
          className="bg-transparent w-full  focus:outline-none rounded-lg py-2 px-3 mx-1 me-1 text-slate-800"
        />
      </div>
    </form>
  );
}
