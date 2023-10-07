import PropTypes from "prop-types";

Card.propTypes = {
  data: PropTypes.object,
};

export default function Card(props) {
  const { data } = props;

  return (
    <>
      <div className="flex flex-col justify-between">
        <div className="flex items-center gap-1">
          <h2 className="text-white text-sm font-medium">
            {data.name.transliteration.id}
          </h2>
          <p className="text-white text-xs">({data.name.translation.id})</p>
        </div>
        <p className="text-xs text-[#C8EAD1]">
          {data.revelation.id} | {data.numberOfVerses} Ayat
        </p>
      </div>
      <p className="arabic text-xl text-[#C8EAD1]">{data.name.short}</p>
    </>
  );
}
