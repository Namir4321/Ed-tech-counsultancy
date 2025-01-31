import React from "react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Building2,
  Inbox,
  PhoneCall,
  School,
  UserRound,
  Users,
  Home,
} from "lucide-react";

const SideNavGroup = () => {
  const items = [
    { title: "Overview", url: "/dashboard", icon: Home },
    { title: "Users", url: "/dashboard/users", icon: Users },
    { title: "Submission", url: "/dashboard/submission", icon: Inbox },
    { title: "Manage Mentors", url: "/dashboard/mentors", icon: UserRound },
    {
      title: "Manage Institution",
      url: "/dashboard/institution",
      icon: School,
    },
    { title: "Manage Partners", url: "/dashboard/partners", icon: Building2 },
    { title: "Callback", url: "/dashboard/callback", icon: PhoneCall },
  ];

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-2xl font-bold text-black">
        Dashboard
      </SidebarGroupLabel>
      <SidebarGroupContent className="mt-6">
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title} className="mt-3">
              <SidebarMenuButton asChild>
                <a href={item.url} className="flex items-center gap-2">
                  <item.icon className="w-6 h-6" />
                  <span className="text-lg">{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default SideNavGroup;
