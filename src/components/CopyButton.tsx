"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Copy, Check } from "lucide-react";
import { ButtonHTMLAttributes, FC } from "react";
import { Button } from "@/ui/Button";
import { toast } from "@/ui/Toast";

interface CopyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  valueToCopy: string;
}

const CopyButton: FC<CopyButtonProps> = ({
  valueToCopy,
  className,
  ...props
}) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => setIsCopied(false), 5000);
  }, [isCopied]);
  return (
    <Button
      {...props}
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(valueToCopy);
        setIsCopied(true);
        toast({
          title: "Copied",
          message: "API key copied to clipboard",
          type: "success",
        });
      }}
      variant="ghost"
      className={cn("", className)}
    >
      {isCopied ? (
        <Check className="h-5 w-5 text-green-400" />
      ) : (
        <Copy className="h-5 w-5" />
      )}
    </Button>
  );
};

export default CopyButton;
