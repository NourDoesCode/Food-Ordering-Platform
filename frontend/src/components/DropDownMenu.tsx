import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CircleUserRound, Menu } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileMenuLinks from "./MobileMenuLinks";

function DropDownMenu() {
  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className=" h-10 w-10 hover:text-orange-500 transition duration-200 cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            {isAuthenticated ? (
              <span className="flex items-center gap-2 font-bold text-orange-500">
                <CircleUserRound />
                {user?.email}
              </span>
            ) : (
              <span className="text-lg text-bold"> Welcome to Nour Eats!</span>
            )}
          </SheetTitle>
          <Separator />

          <SheetDescription className="flex flex-col gap-5 ">
            {isAuthenticated ? (
              <MobileMenuLinks />
            ) : (
              <Button
                onClick={async () => await loginWithRedirect()}
                className="flex-1 font-bold bg-orange-500 hover:bg-orange-700"
              >
                Log In
              </Button>
            )}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default DropDownMenu;
