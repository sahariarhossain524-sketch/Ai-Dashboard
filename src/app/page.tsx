import { DashboardLayout } from "@/components/dashboard-layout";
import { KpiCards } from "@/components/dashboard/kpi-cards";
import { MainChart } from "@/components/dashboard/main-chart";
import { RecentActivity } from "@/components/dashboard/recent-activity";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
          <p className="text-sidebar-foreground mt-1">Welcome back, Sahariar. Here's what's happening with your AI models today.</p>
        </div>
      </div>
      
      <KpiCards />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <MainChart />
        <RecentActivity />
      </div>
    </DashboardLayout>
  );
}
