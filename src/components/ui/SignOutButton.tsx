"use client";

import { FC, useState } from "react";
import { Button } from "@/ui/Button";
import { signOut } from "next-auth/react";
import { toast } from "@/ui/Toast";
import { Loader2 } from "lucide-react";

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signUserOut = async () => {
    setIsLoading(true);
    try {
      await signOut();
    } catch (error) {
      toast({
        title: "Error signing out",
        message: "Please try again later",
        type: "error",
      });
    }
  };
  return (
    <div onClick={signUserOut}>
      {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Sign out
    </div>
  );
};

export default SignOutButton;
