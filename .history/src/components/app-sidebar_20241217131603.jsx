import {
  Frame,
  GalleryVerticalEnd,
  PieChart,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Chester Luke A. Maligaso",
    email: "maligaso.chesterlukea@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Kukaass Dev",
      logo: GalleryVerticalEnd,
      plan: "Developer",
    },
  ],
  navMain: [
    {
      title: "My Profile",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Eduational Background",
          url: "#",
        },
        {
          title: "About",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "School Projects",
      url: "#",
      icon: Frame,
    },
    {
      name: "Freelancing",
      url: "#",
      icon: PieChart,
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
