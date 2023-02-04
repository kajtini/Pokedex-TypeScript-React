import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <div className="flex items-center justify-between w-full max-w-[1200px] py-8 px-7">
      <RxHamburgerMenu size={25} />
      <p className="text-xl sm:text-3xl">Pokedex</p>
      <FaUserCircle size={25} />
    </div>
  );
}

export default Navbar;
