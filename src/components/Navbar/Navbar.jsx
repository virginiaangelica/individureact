import { useId } from "react";
import { useUser } from "../../context/UserContext";
import { Link } from "react-router-dom";

export default function Navbar({ onSearchChange }) {
  const inputId = useId();
  const { isLoggedIn, login, logout } = useUser();

  const handleSearchInput = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <nav
      className="grid grid-cols-3 justify-between px-24 py-4 items-center"
      style={{
        backgroundImage:
          'url("https://batikfractal.com/wp-content/uploads/2020/04/Enggang-Ngibing-Seri-Warna-1-Kain-1400x716.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <ul>
        <li className="flex items-center justify-start">
          <span
            className="text-transparent bg-gradient-to-r from-gray-800 via-gray-600 to-yellow-500 bg-clip-text font-serif text-3xl font-bold"
            style={{
              textShadow:
                "1px 1px 3px rgba(0, 0, 0, 0.5), 0 0 25px rgba(255, 255, 255, 0.7)",
            }}
          >
            VIETE GALLERY
          </span>
        </li>
      </ul>

      <ul className="flex justify-center items-center">
        <li className="w-full relative">
          <input
            type="text"
            className="text-black active:text-black focus:text-black px-4 py-2 w-full rounded-lg bg-gray-200 pl-10"
            name="search"
            id={inputId}
            placeholder="Cari produk yang anda inginkan"
            onChange={handleSearchInput}
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 111.414-1.414l4.35 4.35z"
              />
            </svg>
          </div>
        </li>
      </ul>

      {!isLoggedIn ? (
        <ul className="flex gap-2 justify-end">
          <li className="text-black font-bold hover:text-gray-800 active:text-black">
            <button onClick={login}>Sign in</button>
          </li>
          <li>
            <Link
              className="text-black font-bold hover:text-gray-800 active:text-black"
              to="/signup"
            >
              Sign up
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="flex justify-end gap-2">
          <li>
            <button
              onClick={logout}
              className="text-black font-bold hover:text-gray-800 active:text-black"
            >
              Sign out
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
