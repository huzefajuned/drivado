import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import Companies from "./Companies";
import Users from "./Users";

const Tab = () => {
  return (
    <Tabs
      defaultValue="Users"
      className="w-full h-[90%]  border-2  p-2 rounded-2xl items-center flex flex-col justify-between gap-10 "
    >
      <TabsList>
        <TabsTrigger value="Users">Users </TabsTrigger>
        <TabsTrigger value="Companies">Companies </TabsTrigger>
      </TabsList>
      <TabsContent value="Users" className="w-full flex-1   overflow-scroll">
        <Users />
      </TabsContent>
      <TabsContent
        value="Companies"
        className="w-full flex-1   overflow-scroll"
      >
        <Companies />
      </TabsContent>
    </Tabs>
  );
};

export default Tab;
