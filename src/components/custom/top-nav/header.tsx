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
import { Icon3dCubeSphereOff } from "@tabler/icons-react";

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
          <Icon3dCubeSphereOff />
        </div>
        <div className="flex gap-2">

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              {session?.user ? (
                <Avatar className="h-8 w-8">
                  <AvatarImage src={session.user?.image?.toString()} alt="" />
                  <AvatarFallback>{session.user.name}</AvatarFallback>
                </Avatar>
              ) : (
                <div className="h-8 w-8 rounded-full bg-secondary"></div>
              )}
            </DropdownMenuTrigger>
            {session?.user ? (
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
            ) : (
              <DropdownMenuContent>
                <DropdownMenuLabel></DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <ModeToggle />
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/login">Login</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            )}
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

export default Header;
