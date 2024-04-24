import { Link } from "react-router-dom";
import logo from "../assets/anik.png";

const Header = () => {
  return (
    <header className="bg-black text-white">
      <div className="flex py-4 px-3 justify-between">
        <div className="flex items-end gap-x-1">
          <img src={logo} alt="Anik" width={47} height={37} />
          <Link to="/">
            <h1 className="flex justify-normal text-lg p-3 italic font-bold">
              Ani-k Makeup
            </h1>
          </Link>
        </div>
      </div>
      <Menu />
    </header>
  );
};

const Menu = () => {
  return (
    <nav className="flex items-center justify-between w-9/12 mx-auto pb-2 text-white">
      <Link to="/productos">Productos</Link>
      <Link to="/info">Info</Link>
    </nav>
  );
};

export default Header;
