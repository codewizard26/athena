import * as React from "react"

import { cn } from "@/lib/utils"


const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-16 w-full p-4 sm:w-96 outline-none bg-black border-b border-gray-300 px-3 py-2 text-md ",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
