import React from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const glowVariants = cva("absolute w-full", {
  variants: {
    variant: {
      top: "top-0",
      above: "-top-[128px]",
      bottom: "bottom-0",
      below: "-bottom-[128px]",
      center: "top-[50%]",
    },
  },
  defaultVariants: {
    variant: "top",
  },
});

function Glow({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof glowVariants>) {
  return (
    <div
      data-slot="glow"
      className={cn(glowVariants({ variant }), className)}
      {...props}
    >
      {/* Subtle Aqua Glow */}
      <div
        className={cn(
          "from-[#79CBD6]/15 to-transparent absolute left-1/2 h-[400px] w-[90%] -translate-x-1/2 scale-[3.5] rounded-full bg-radial from-10% to-70% opacity-40 sm:h-[600px]",
          variant === "center" && "-translate-y-1/2",
        )}
      />
      {/* Faint Navy Glow (grounding element) */}
      <div
        className={cn(
          "from-[#304269]/10 to-transparent absolute left-1/2 h-[300px] w-[70%] -translate-x-1/2 scale-[3] rounded-full bg-radial from-10% to-70% opacity-25 sm:h-[512px]",
          variant === "center" && "-translate-y-1/2",
        )}
      />
    </div>
  );
}



export default Glow;
