import { DashboardLayout } from "@/components/dashboard-layout";

export default function CustomersPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Customers</h1>
          <p className="text-sidebar-foreground mt-1">Manage your users and API consumers.</p>
        </div>
      </div>
      
      <div className="h-96 rounded-xl bg-card border border-border shadow-sm flex items-center justify-center text-sidebar-foreground">
        Customers Data Table will go here
      </div>
    </DashboardLayout>
  );
}
