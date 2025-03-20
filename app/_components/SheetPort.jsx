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
          <Link href="/">
            <Button variant="link1">Hakkımda</Button>
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <Link href="/projects">
            <Button variant="link1">Projeler</Button>
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <Link href="/blogs">
            <Button variant="link1">Blog</Button>
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <Link href="/contact">
            <Button variant="link1">İletişim</Button>
          </Link>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
