import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import SideNavGroup from "@/components/Sidebar/SideNavGroup";
import { FaRegCompass } from "react-icons/fa";
import { Button } from "../ui/button";

const SidebarNav = () => {
  return (
    <Sidebar side="left" collapsible="offcanvas | icon | none">
      <SidebarHeader className="">
        <div className="flex items-center space-x-2">
          <FaRegCompass className="text-muted-foreground text-6xl flex items-center" />
          <h2 className="text-2xl text-extrabold">CarrerGuides</h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SideNavGroup />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="flex justify-start items-center">
        <Button className="font-extrabold flex justify-start" variant="ghost" size="lg">Logout</Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default SidebarNav;
