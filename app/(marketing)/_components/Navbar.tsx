"use client"

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export const Navbar = () => {
    const scrolled = useScrollTop();

    return ( 
        <div className={cn(
            "z-50 bg-background fixed top-0 flex items-center w-full p-6 pb-4 pt-4", scrolled && "border-b shadow-m"
        )}>
            <Logo />
            <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
                Login
            </div>
        </div>
     );
}