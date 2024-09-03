import { useState } from "react";
import { Link } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
  const [isDropdowOpen, setIsDropdowOpen] = useState(false);
  const { loginWithRedirect } = useAuth0();
  return (
    <header className="border-b-2  border-b-orange-500 ">
      {/*Website name */}
      <div className="flex justify-between container mx-auto py-6 items-center  px-5">
        <Link
          className="text-orange-500 text-3xl font-bold  tracking-tight"
          to="/"
        >
          NOUREats.com
        </Link>
        {/*Login button */}
        <button
          onClick={async () => await loginWithRedirect()}
          className="hidden md:block text-md font-bold hover:text-orange-500 transition duration-200"
        >
          Log In
        </button>
        {/*Hamburger menu for mobile */}
        <div className="md:hidden">
          <DropDownMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
//border-4 border-red-600
