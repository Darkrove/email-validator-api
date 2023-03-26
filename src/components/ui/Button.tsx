import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, FC, forwardRef } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 disabled:opacity-50 dark:ring-stone-400 disabled:pointer-events-none dark:focus:ring-offset-stone-900",
  {
    variants: {
      variant: {
        default:
          "bg-stone-900 text-white hover:bg-stone-800 dark:bg-stone-200 dark:text-stone-900 dark:hover:bg-stone-100",
        outline:
          "bg-stone-900 text-white hover:bg-stone-800 dark:bg-stone-200 dark:text-stone-900 dark:hover:bg-stone-100 border border-stone-200 dark:border-stone-700",
        subtle:
          "bg-stone-100 text-stone-900 hover:bg-stone-200 dark:bg-stone-700 dark:text-stone-100",
        ghost:
          "bg-transparent hover:bg-stone-100 dark:hover:bg-stone-800 dark:text-stone-400 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-stone-900 dark:text-stone-100 hover:bg-transparent dark:hover:bg-transparent",
        destructive: "text-white hover:bg-red-600 dark:hover:bg-red-600",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, isLoading, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
