import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../assets/logos/logo.svg";

export default function MainHeaderInterface() {
  const location = useLocation();
  const tabs = [
    { to: "/destinations", text: "Hospedate" },
    { to: "/contact", text: "Contactate" },
    { to: "/about", text: "Conócenos" },
    { to: "/administration", text: "Administración" },
  ];

  return (
    <header className="px-4 py-4 lg:px-24 bg-[#ff7d34] backdrop-blur flex items-center justify-between">
      <span className="material-icons lg:hidden text-3xl text-white">menu</span>
      <NavLink to="/" className="flex w-1/2 lg:w-[12%] lg:justify-start">
        <img src={Logo} alt="Logo" />
      </NavLink>
      <nav>
        <ul className="hidden lg:flex items-center">
          {tabs.map((tab, index) => {
            const isLastTab = tabs.length - 1;
            return (
              <div className="flex items-center" key={index}>
                <NavLink
                  to={tab.to}
                  className={`uppercase ${
                    location.pathname === tab.to
                      ? "font-bold text-[#555555] after:content-[''] after:float-left after:bg-[#555555] after:w-full after:h-1.5 after:rounded-full after:mt-1"
                      : "text-white hover:font-bold hover:text-[#555555]"
                  }`}
                >
                  {tab.text}
                </NavLink>
                <span
                  className={`${
                    !(isLastTab === index)
                      ? "block mx-9 w-2 h-8 bg-white rounded-full"
                      : ""
                  }`}
                ></span>
              </div>
            );
          })}
        </ul>
      </nav>
      <div className="flex items-center">
        <span className="material-icons text-5xl text-[#ffb68c] lg:mr-2">
          account_circle
        </span>
        <button className="hidden lg:block border-2 rounded-full border-[#03cf74] hover:border-white font-semibold text-white bg-[#03cf74] p-2">
          Iniciar sesión
        </button>
      </div>
    </header>
  );
}
