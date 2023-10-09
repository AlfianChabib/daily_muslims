import PropTypes from "prop-types";

Search.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  children: PropTypes.node,
};

export default function Search(props) {
  const { value, setValue, children } = props;

  return (
    <form>
      <div className="relative w-[90%] bg-gray-300 mx-auto mt-2 py-1 rounded-xl my-4 flex items-center gap-x-2">
        <input
          type="text"
          placeholder="Cari Surat"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          className="bg-transparent w-[90%] focus:outline-[#397D54] focus:outline-none rounded-lg py-2 px-3 mx-1 me-1 text-slate-800"
        />
        {children}
      </div>
    </form>
  );
}
