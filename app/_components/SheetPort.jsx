import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-center items-center gap-4">
      <SheetHeader>
        
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <SheetClose asChild>
        <Link className={"text-emerald-300 hover:text-emerald-500 active:text-emerald-300"} href={"/"}>
          Hakkımda
        </Link>
        </SheetClose>
        <SheetClose asChild>
        <Link className={"text-emerald-300 hover:text-emerald-500 active:text-emerald-300"} href={"/projects"}>
          Projeler
        </Link>
        </SheetClose>
        <SheetClose asChild>
        <Link className={"text-emerald-300 hover:text-emerald-500 active:text-emerald-300"} href={"/blogs"}>
          Blog
        </Link>
        </SheetClose>
        <SheetClose asChild>
        <Link className={"text-emerald-300 hover:text-emerald-500 active:text-emerald-300"} href={"/contact"}>
          İletişim
        </Link>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
