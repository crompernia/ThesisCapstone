
"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { signOut } from "next-auth/react";

interface UserNavProps {
  employeeName: string;
  employeeEmail: string;
  employeePhoto?: string;
}

/**
 * Renders a user navigation dropdown menu.
 * Displays the user's avatar, name, email, and provides links to profile, settings, and logout.
 */
export function UserNav({ employeeName, employeeEmail, employeePhoto }: UserNavProps) {
  // Generate initials from the employee's name for the avatar fallback.
  const initials = employeeName
    .split(' ')
    .map((n: string) => n[0])
    .join('');

  // Logout handler
  async function handleLogout() {
    // Use NextAuth signOut to properly clear the session
    await signOut({
      callbackUrl: "/",
      redirect: true
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-9 w-9">
            <AvatarImage src={employeePhoto || "/default-avatar.png"} alt={employeeName} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{employeeName}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {employeeEmail}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleLogout}>
            Logout
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
