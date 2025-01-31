import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import SidebarNav from "@/components/Sidebar/SidebarNav";
import Category from "@/components/Home/Category";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="flex justify-center items-center">
        <Category />
      </div>
      {children}
    </main>
  );
}
