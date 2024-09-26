import React from "react";
import { ModeToggle } from "../../ui/mode-toggle";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SignOut from "../top-nav/sign-out";
import { auth } from "@/server/auth/auth";
import { IconActivity } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

async function Header() {
  const session = await auth();

  return (
    <header className="sticky top-0 w-full bg-transparent px-4 py-2 drop-shadow backdrop-blur">
      <div className="relative flex items-center justify-between">
        <div className="flex">
          <Link className="text-xl font-bold" href="/">
            Nexty
          </Link>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 transform text-start text-3xl">
          <IconActivity />
        </div>
        <div className="flex gap-2">
          {session?.user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="h-8 w-8">
                  <AvatarImage src={session.user?.image?.toString()} alt="" />
                  <AvatarFallback>{session.user.name}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>{session.user.name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <ModeToggle />
                </DropdownMenuItem>
                <DropdownMenuItem>{session.user.email}</DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <SignOut />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
