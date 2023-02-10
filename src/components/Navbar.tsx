import { RxHamburgerMenu } from "react-icons/rx";
import { MdCatchingPokemon } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

function Navbar() {
  const pages = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Pokedex", link: "/pokemon" },
  ];

  return (
    <>
      <div className="flex items-center justify-between w-full max-w-[1200px] py-8 px-8">
        <nav>
          <ul className="flex items-center gap-6">
            {pages.map((page) => (
              <li key={page.id}>
                <NavLink
                  to={page.link}
                  style={({ isActive }) => ({
                    color: isActive ? "#92DCE5" : "#F8F7F9",
                    fontWeight: isActive ? 500 : 400,
                  })}
                  className="text-lg"
                >
                  {page.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <MdCatchingPokemon size={30} />
      </div>

      <Outlet />
    </>
  );
}

export default Navbar;
