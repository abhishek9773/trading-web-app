import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { AvatarIcon, DragHandleHorizontalIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { Avatar } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <div>
      <div className="">
        <div className="px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky top-9 left-0 right-0 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Sheet>
              <SheetTrigger>
                <Button
                  variant="gost"
                  size="icon"
                  className="rounded-full h-11 w-11"
                >
                  <DragHandleHorizontalIcon className="h-5 w-7"></DragHandleHorizontalIcon>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-72 border-r-0 flex flex-col justify-center"
              >
                <SheetHeader>
                  <SheetTitle>
                    <div className="text-3xl flex justify-center items-center gap-1">
                      <Avatar>
                        <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFFgEhZjI1pp-0hoQGMWTacAZ3ZeO0RJfbqA&s" />
                      </Avatar>
                      <div>
                        <span className="font-bold text-orange-700">
                          Abhishek
                        </span>
                        <spen>Tread</spen>
                      </div>
                    </div>
                  </SheetTitle>
                  <SheetDescription>
                    <Sidebar />
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <div></div>
          <div></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
