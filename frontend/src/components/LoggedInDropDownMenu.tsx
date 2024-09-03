import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function LoggedInDropDownMenu() {
  const { user } = useAuth0();
  const { logout } = useAuth0();
  return (
    <DropdownMenu>
      {/*profile logo + username */}
      <DropdownMenuTrigger className="flex items-center gap-2 text-md font-bold hover:text-orange-500 transition duration-200">
        <CircleUserRound className="text-orange-500" />
        {user?.email}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col items-center ">
        <DropdownMenuLabel>
          <Link
            to="/"
            className="text-md font-bold hover:text-orange-500 transition duration-200"
          >
            Manage Restaurant
          </Link>
        </DropdownMenuLabel>

        <DropdownMenuItem>
          <Link
            className="text-md font-bold hover:text-orange-500 transition duration-200 "
            to="/user-profile"
          >
            User Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button
            onClick={() => logout()}
            className="font-bold bg-orange-500 hover:bg-orange-700 transition duration-200"
          >
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
