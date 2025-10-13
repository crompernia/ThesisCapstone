import { Roboto } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster";
import '@/lib/db'; // Force DB initialization
import { SidebarTrigger} from '@/components/ui/sidebar';

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
        {children}
        <Toaster />
      </body>
    </html>
  );
}
