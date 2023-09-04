import { cva } from "class-variance-authority";
import React from "react";
import { cn } from "../../../../@/lib/utils";

const statusVariants = cva(
  "rounded-full h-fit w-fit px-3 py-1 flex justify-center whitespace-nowrap",
  {
    variants: {
      variant: {
        first: "bg-yellow-100 text-yellow-700",
        second: "bg-purple-100 text-purple-700",
        third: "bg-blue-100 text-blue-700",
        fourth: "bg-amber-100 text-amber-700",
        done: "bg-green-100 text-green-700",
        failed: "bg-red-100 text-red-700",
      },
    },
    defaultVariants: {
      variant: "first",
    },
  }
);

type StatusItemProps = {
  className?: string;
  variant?: "first" | "second" | "third" | "fourth" | "done" | "failed";
  status: string;
};

export default function StatusItem({
  className,
  variant,
  ...props
}: StatusItemProps) {
  return (
    <div className={cn(statusVariants({ variant, className }))}>
      {props.status}
    </div>
  );
}
