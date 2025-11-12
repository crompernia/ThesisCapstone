import { Roboto } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster";
// import '@/lib/db'; // Force DB initialization - moved to client components only
import { SidebarTrigger} from '@/components/ui/sidebar';
import { SessionProvider } from '@/components/session-provider';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
});

export const metadata = {
  title: 'Employee Dashboard',
  description: 'A comprehensive dashboard for employees and HR management.',
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-body antialiased', roboto.variable)}>
        <SessionProvider>
          {children}
        </SessionProvider>
        <Toaster />
      </body>
    </html>
  );
}
