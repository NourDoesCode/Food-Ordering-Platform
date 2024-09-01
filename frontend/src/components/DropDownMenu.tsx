import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

function DropDownMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className=" h-10 w-10 hover:text-orange-500 transition duration-200 cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <span className="text-lg text-bold"> Welcome to Nour Eats!</span>
          </SheetTitle>
          <Separator />

          <SheetDescription className="flex">
            <Button className="flex-1 font-bold bg-orange-500">Log In</Button>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default DropDownMenu;
