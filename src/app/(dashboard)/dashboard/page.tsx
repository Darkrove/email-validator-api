import type { Metadata } from "next";
import { FC } from "react";

interface pageProps {}

export const metadata: Metadata = {
  title: "Text Analysis API | Dashboard",
  description: "Free and open-source text analysis API",
};

const page: FC<pageProps> = ({}) => {
  return <div>page</div>;
};

export default page;
