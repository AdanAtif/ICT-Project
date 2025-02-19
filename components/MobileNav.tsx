"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "./Logo";
import Nav from "./Nav";
import Socials from "./Socials";

import { AlignJustify } from "lucide-react";

const MobileNav = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <AlignJustify className="cursor-pointer" />
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col items-center justify-between h-full py-8">
            <div className={`flex flex-col items-center`}>
              <Logo />
              <Nav
                containerStyles="flex flex-col items-center gap-y-6"
                linkStyles="text-2xl"
              />

              <Socials containerStyles="flex gap-x-4" iconStyles="text-2xl" />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNav;
