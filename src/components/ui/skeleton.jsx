/**
 * @fileoverview Defines the Skeleton component.
 * A skeleton is a placeholder component that is used to indicate that content is loading.
 * It typically shows a simplified preview of the content that is being loaded.
 */
import { cn } from "@/lib/utils"

/** The Skeleton component. */
function Skeleton({
  className,
  ...props
}) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
