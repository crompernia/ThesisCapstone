
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
import { useRouter } from "next/navigation";

/**
 * Renders a user navigation dropdown menu.
 * Displays the user's avatar, name, email, and provides links to profile, settings, and logout.
 * @param {{ employeeName: string; employeeEmail: string }} props - The props for the component.
 * @returns {JSX.Element} The user navigation component.
 */
export function UserNav({ employeeName, employeeEmail }) {
  const router = useRouter();

  // Generate initials from the employee's name for the avatar fallback.
  const initials = employeeName
    .split(' ')
    .map((n) => n[0])
    .join('');

  // Logout handler
  function handleLogout() {
    // Clear authentication (e.g. tokens, session, cookies)
    localStorage.removeItem('authToken'); // Adjust to your auth strategy

    // Redirect to login or home page
    router.push('/');
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-9 w-9">
            <AvatarImage src={`https://i.pravatar.cc/150?u=${employeeEmail}`} alt={employeeName} />
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
