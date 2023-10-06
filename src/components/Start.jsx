import PropTypes from "prop-types";

Start.PropTypes = {
  toggleStart: PropTypes.func,
};

export default function Start(props) {
  const { toggleStart } = props;

  return (
    <section className="absolute">
      <div className="flex flex-col w-full min-h-screen bg-bg-view bg-cover bg-center justify-between">
        <div className="flex flex-col text-center items-center mt-24 text-[#235D3A]">
          <h1 className="text-3xl font-semibold ">Daily Muslims</h1>
          <p className="flex flex-col text-lg leading-5 pt-4 px-16">
            Baca Al-Qur’an{""}
            <span>Kapanpun & Dimanapun</span>
          </p>
        </div>
        <button
          onClick={toggleStart}
          className="w-36 h-10 text-white border rounded-full mx-auto mb-20 hover:bg-white hover:text-[#235D3A]"
        >
          Get Started <span>&gt;</span>
        </button>
      </div>
    </section>
  );
}
