import { NavLink, Outlet } from "react-router-dom";
import NavbarBackground from "../assets/navbar-background.jpg";

export default function PassengerLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-800 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

const Navbar = () => {
  const list = [
    {
      name: "Terms and Conditions",
      link: "/terms-and-conditions",
    },
    {
      name: "About Us",
      link: "/about-us",
    },
    {
      name: "Contact Us",
      link: "/contact-us",
    },
  ];
  return (
    <div className="w-full bg-green-800 h-16 flex items-center justify-between px-2 md:px-12 relative">
      {/* background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 "
        style={{
          backgroundImage: `url(${NavbarBackground})`,
        }}
      />
      {/* logo */}
      <div className="flex items-center gap-4 text-white z-5">
        <img
          src="https://cdn-icons-png.flaticon.com/128/2878/2878877.png"
          alt="Logo"
          className="h-10 w-10 mr-2"
        />
        <div className="flex flex-col gap-2 font-bold">
          <h1>
            CENAMARK <br />
            SHIPPING LINES
          </h1>
        </div>
      </div>

      <ul className="flex items-center z-5">
        {list.map((item, index) => (
          <li key={index} className="inline-block mx-4">
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold"
                  : "text-gray-200 hover:text-white hover:underline"
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-8">
      <p>
        &copy; {new Date().getFullYear()} CENAMARK SHIPPING LINES. All rights
        reserved.
      </p>
    </footer>
  );
};
