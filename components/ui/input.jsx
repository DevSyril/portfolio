import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, onChange, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      onChange={onChange}
      className={cn(
        "flex h-[40px] rounded border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none",
        className
      )}
      ref={ref}
      {...props}
      required />)
  );
})
Input.displayName = "Input"

export { Input }
