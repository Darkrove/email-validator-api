import LargeHeading from "@/components/ui/LargeHeading";
import type { Metadata } from "next";
import { FC } from "react";

interface pageProps {}

export const metadata: Metadata = {
  title: "Text Analysis API | Dashboard",
  description: "Free and open-source text analysis API",
};

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <LargeHeading>Hello Sajjad Shaikh</LargeHeading>
    </div>
  );
};

export default page;
