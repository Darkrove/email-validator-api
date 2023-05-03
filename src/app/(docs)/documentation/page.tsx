import { FC } from "react";
import type { Metadata } from "next";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import DocumentationTabs from "@/components/DocumentationTabs";

export const metadata: Metadata = {
  title: "Email Validator API | Documentation",
  description: "Free and open-source email validator API",
};

const page: FC = ({}) => {
  return (
    <div className="container max-w-7xl mx-auto">
      <div className="flex flex-col items-center gap-6">
        <LargeHeading>Making a request</LargeHeading>
        <Paragraph>api/v1/validate</Paragraph>

        <DocumentationTabs />
      </div>
    </div>
  );
};

export default page;
