import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import SidebarNav from "@/components/Sidebar/SidebarNav";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <SidebarNav />
      <div className="py-2 px-1 ">
        <SidebarTrigger className="md:hidden" />
      </div>
      <main className="w-full">
        <div className="w-full px-1 py-1">
          <h1 className="scroll-m-20 text-3xl  font-bold tracking-tight lg:text-4xl">
            Dashboard
          </h1>
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
