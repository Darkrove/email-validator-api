"use client";

import { Button } from "@/components/ui/Button";
import Paragraph from "@/components/ui/Paragraph";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
      <Paragraph>Something went wrong while loading this page.</Paragraph>
      <Button
        size="lg"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  );
}
