import {
  Frame,
  GalleryVerticalEnd,
  PieChart,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
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
          title: "Home",
          url: "#",
        },
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
      <SidebarRail />
    </Sidebar>
  );
}
