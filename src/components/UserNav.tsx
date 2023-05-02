import {
  CreditCard,
  LogOut,
  LayoutDashboard,
  Settings,
  User,
} from "lucide-react";
import SignOutButton from "@/ui/SignOutButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/ui/Avatar";
import { Button } from "@/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/ui/DropdownMenu";
import Link from "next/link";

interface NextAuthSession {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
  accessToken?: string | null;
  expires?: string;
}

type Props = {
  session: NextAuthSession;
};

export function UserNav({ session }: Props) {
  const fallback = session?.user.name
    ?.split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative w-9 h-9 rounded-full">
          <Avatar className="w-9 h-9">
            <AvatarImage src={session?.user.image ?? ""} alt="@shadcn" />
            <AvatarFallback className="text-white">{fallback}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {session.user.name}
            </p>
            <p className="text-xs leading-none text-zinc-400">
              {session.user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <Link href="/dashboard">
              <span>Dashboard</span>
            </Link>
            <DropdownMenuShortcut>⇧⌘D</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <SignOutButton />
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
