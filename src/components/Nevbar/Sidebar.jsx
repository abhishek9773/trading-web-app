import { HomeIcon } from "@radix-ui/react-icons";
import React from "react";
import { Button } from "../ui/button";
import { SheetClose } from "../ui/sheet";

const menu = [
  { name: "Home", path: "/", icon: <HomeIcon className="h-6 w-6" /> },
  { name: "Home", path: "/", icon: <HomeIcon className="h-6 w-6" /> },
  { name: "Home", path: "/", icon: <HomeIcon className="h-6 w-6" /> },
  { name: "Home", path: "/", icon: <HomeIcon className="h-6 w-6" /> },
];
const Sidebar = () => {
  return (
    <div className="mt-10 space-y-5">
      <div>
        <SheetClose className="w-full">
          <Button
            variant="outline"
            className="flex items-center gap-5 py-6 w-full"
          >
            <span className="w-6">
              <HomeIcon />
            </span>
            <p>Home</p>
          </Button>
        </SheetClose>
      </div>
    </div>
  );
};

export default Sidebar;
