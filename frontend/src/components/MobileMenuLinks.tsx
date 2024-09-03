import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

export default function MobileMenuLinks() {
  const { logout } = useAuth0();
  return (
    <div className="flex flex-col gap-5 items-center">
      <Link
        to="/user-profile"
        className="bg-white font-bold hover:text-orange-500 transition duration-200 text-lg"
      >
        User Profile
      </Link>
      <Button
        onClick={() => logout()}
        className="font-bold bg-orange-500 hover:bg-orange-700 w-full"
      >
        Log Out
      </Button>
    </div>
  );
}
