"use client";

import { FC } from "react";
import SimpleBar from "simplebar-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import Code from "@/ui/Code";
import { go, nodejs, python, curl } from "@/helpers/documentation-code";

import "simplebar-react/dist/simplebar.min.css";

const DocumentationTabs: FC = ({}) => {
  return (
    <Tabs defaultValue="nodejs" className="max-w-2xl w-full">
      <TabsList>
        <TabsTrigger value="nodejs">Node.js</TabsTrigger>
        <TabsTrigger value="python">Python</TabsTrigger>
        <TabsTrigger value="curl">Curl</TabsTrigger>
      </TabsList>
      <TabsContent value="nodejs">
        <SimpleBar>
          <Code code={nodejs} show animated language="javascript" />
        </SimpleBar>
      </TabsContent>
      <TabsContent value="python">
        <SimpleBar>
          <Code code={python} show animated language="python" />
        </SimpleBar>
      </TabsContent>
      <TabsContent value="curl">
        <SimpleBar>
          <Code code={curl} show animated language="bash" />
        </SimpleBar>
      </TabsContent>
    </Tabs>
  );
};

export default DocumentationTabs;
