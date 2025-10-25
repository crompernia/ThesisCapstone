/**
 * @fileoverview Defines the Logo component.
 * This component displays the company's logo as an SVG.
 */
import { cn } from "@/lib/utils";

/**
 * Renders the Chumplace company logo.
 * @param {object} props - The component props.
 * @param {string} [props.className] - Optional CSS classes for styling.
 * @returns {JSX.Element} The rendered logo component.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-transparent flex items-center justify-center",
        className
      )}
    >
      <svg
        className="w-auto h-full"
        viewBox="0 0 200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer green oval */}
        <path d="M100 120C171.228 120 200 93.1371 200 60C200 26.8629 171.228 0 100 0C28.7715 0 0 26.8629 0 60C0 93.1371 28.7715 120 100 120Z" fill="#84C441"/>
        {/* Inner dark green oval */}
        <path d="M100 110C160.751 110 185 85.3757 185 55C185 24.6243 160.751 0 100 0C39.2487 0 15 24.6243 15 55C15 85.3757 39.2487 110 100 110Z" fill="#006A35"/>

        {/* "CHUM" text */}
        <text x="28" y="70" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="30" fill="white">CHUM</text>
        {/* "PLACE" text */}
        <text x="110" y="70" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="30" fill="#F4C13D">PLACE</text>

        {/* Boba tea icon */}
        <g transform="translate(140, 20) scale(0.7)">
            {/* Cup shape */}
            <path d="M15 5 H 45 L 40 55 C 40 60 35 65 30 65 C 25 65 20 60 20 55 L 15 5 Z" fill="#F4C13D" fillOpacity="0.3"/>
            <path d="M15 5 H 45 L 40 55 C 40 60 35 65 30 65 C 25 65 20 60 20 55 L 15 5 Z" stroke="white" strokeWidth="2" fill="none"/>

            {/* Boba pearls */}
            <circle cx="30" cy="30" r="3" fill="#006A35"/>
            <circle cx="25" cy="40" r="3" fill="#006A35"/>
            <circle cx="35" cy="40" r="3" fill="#006A35"/>
            <circle cx="30" cy="50" r="3" fill="#006A35"/>

            {/* Straw */}
            <path d="M42 15 C 52 15 52 0 47 0" stroke="white" strokeWidth="2" fill="none"/>
        </g>
      </svg>
    </div>
  );
}
