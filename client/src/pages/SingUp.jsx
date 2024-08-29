import { Link } from "react-router-dom";

export default function SingUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sing Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          id="username"
          className="border p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          className="border p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="border p-3 rounded-lg"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Sing up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p className="">Have in account?</p>
        <Link to="/sing-in">
          <span className="text-blue-700">Sing in</span>
        </Link>
      </div>
    </div>
  );
}
