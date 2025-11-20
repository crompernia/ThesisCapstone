
"use client"

import * as React from "react";
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
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useTransition } from "react";

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
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [loadingHref, setLoadingHref] = useState<string | null>(null);

  // Generate initials from the employee's name for the avatar fallback.
  const initials = employeeName
    .split(' ')
    .map((n: string) => n[0])
    .join('');

  // Navigation handler with loading state
  const handleNavigation = (href: string) => {
    if (pathname === href) return; // Already on the page
    setLoadingHref(href);
    startTransition(() => {
      router.push(href);
    });
  };

  // Reset loading state when pathname changes
  React.useEffect(() => {
    setLoadingHref(null);
  }, [pathname]);

  // Logout handler
  async function handleLogout() {
    setIsLoggingOut(true);
    // Use NextAuth signOut to properly clear the session
    await signOut({
      callbackUrl: "/",
      redirect: true
    });
  }

  if (isLoggingOut) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
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
           <DropdownMenuItem
             onClick={() => handleNavigation('/dashboard/profile')}
             disabled={loadingHref !== null}
           >
             {loadingHref === '/dashboard/profile' ? (
               <>
                 <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                 Loading...
               </>
             ) : (
               'Profile'
             )}
           </DropdownMenuItem>
           <DropdownMenuItem
             onClick={() => handleNavigation('/dashboard/settings')}
             disabled={loadingHref !== null}
           >
             {loadingHref === '/dashboard/settings' ? (
               <>
                 <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                 Loading...
               </>
             ) : (
               'Settings'
             )}
           </DropdownMenuItem>
           <DropdownMenuItem onClick={handleLogout} disabled={loadingHref !== null}>
             Logout
           </DropdownMenuItem>
         </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
