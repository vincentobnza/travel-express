import { Link, NavLink } from "react-router-dom";
import NavbarBackground from "../assets/navbar-background.jpg";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50">
      <div className="relative flex h-16 w-full items-center justify-between bg-green-800 px-2 md:px-12">
        {/* background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(${NavbarBackground})`,
          }}
        />
        {/* logo */}
        <Link to="/" className="z-5 flex items-center gap-4 text-white">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2878/2878877.png"
            alt="Logo"
            className="mr-2 h-10 w-10"
          />
          <div className="flex flex-col gap-2 font-bold">
            <h1>
              CENAMARK <br />
              SHIPPING LINES
            </h1>
          </div>
        </Link>

        <ul className="z-5 flex items-center">
          {list.map((item, index) => (
            <li key={index} className="mx-4 inline-block text-sm">
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-white"
                    : "text-gray-200 hover:text-white hover:underline"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const list = [
  {
    name: "Terms and Conditions",
    link: "terms-and-conditions",
  },
  {
    name: "About Us",
    link: "about-us",
  },
  {
    name: "Contact Us",
    link: "contact-us",
  },
];
