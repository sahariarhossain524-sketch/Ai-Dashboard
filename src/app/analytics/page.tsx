import { DashboardLayout } from "@/components/dashboard-layout";

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-sidebar-foreground mt-1">Deep dive into your AI performance metrics.</p>
        </div>
      </div>
      
      <div className="h-96 rounded-xl bg-card border border-border shadow-sm flex items-center justify-center text-sidebar-foreground">
        Detailed Analytics Charts will go here
      </div>
    </DashboardLayout>
  );
}
