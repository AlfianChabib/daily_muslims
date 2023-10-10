import PropTypes from "prop-types";
import { useEffect } from "react";

Search.propTypes = {
  data: PropTypes.array,
  setSearch: PropTypes.func,
  setFilteredList: PropTypes.func,
  filteredList: PropTypes.string,
  children: PropTypes.element,
};

export default function Search(props) {
  const { data, setSearch, setFilteredList, filteredList, children } = props;

  useEffect(() => {
    if (filteredList === "") {
      setSearch(data);
    } else if (filteredList !== "") {
      setSearch(
        data.filter((item) =>
          item.namaLatin
            .toLowerCase()
            .split("'")
            .join("")
            .includes(filteredList.toLowerCase())
        )
      );
    }
  }, [data, filteredList, setSearch]);

  return (
    <form>
      <div className="relative mx-4 bg-gray-300 mt-2 py-1 rounded-xl my-4 flex items-center gap-x-2">
        <input
          type="text"
          placeholder="Cari Surat"
          onChange={(e) => setFilteredList(e.target.value)}
          className="bg-transparent w-[90%] focus:outline-[#397D54] focus:outline-none rounded-lg py-2 px-3 mx-1 me-1 text-slate-800"
        />
        {children}
      </div>
    </form>
  );
}
