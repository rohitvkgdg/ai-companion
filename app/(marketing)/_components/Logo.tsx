import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from  "@/lib/utils";

const font = Poppins({
    subsets: ["latin"],
    weight: ["400","600"],
});

export const Logo = () => {
    return (
        <div className="hidden md:flex items-center gap-x-2">
            <Image className="dark:hidden" src="/logo.svg" alt="Logo" width={40} height={40} />
            <Image className="hidden dark:flex" src="/logo-dark.png" alt="Logo" width={40} height={40} />
            <p className={cn("font-semibold", font.className)}>Notion</p>
        </div>
    )
}