import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section>
      <div className="w-[100vw] h-[100vh] flex justify-center items-center">
        <div>
          <h1 className="text-4xl font-bold text-[#235D3A] text-center">404</h1>
          <h5 className="text-xl my-2 font-semibold text-[#235D3A] text-center">
            Page not found.
          </h5>
          <Link
            to="/"
            className="flex justify-center bg-[#235D3A] text-white py-1 rounded-xl"
          >
            <button>Back to Home</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
