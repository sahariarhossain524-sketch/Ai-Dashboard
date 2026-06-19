import { Users, CreditCard, Activity, ArrowUpRight, ArrowDownRight } from "lucide-react";

export function KpiCards() {
  const kpis = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      isPositive: true,
      icon: <CreditCard className="w-5 h-5 text-primary" />,
    },
    {
      title: "Active Users",
      value: "2,350",
      change: "+15.2%",
      isPositive: true,
      icon: <Users className="w-5 h-5 text-primary" />,
    },
    {
      title: "API Calls / min",
      value: "12,234",
      change: "-4.5%",
      isPositive: false,
      icon: <Activity className="w-5 h-5 text-primary" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {kpis.map((kpi, index) => (
        <div key={index} className="p-6 rounded-xl bg-card border border-border shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-sidebar-foreground">{kpi.title}</h3>
            <div className="p-2 bg-primary/10 rounded-lg">{kpi.icon}</div>
          </div>
          <div className="mt-4">
            <p className="text-3xl font-bold text-foreground">{kpi.value}</p>
            <div className="flex items-center gap-1 mt-1 text-sm">
              {kpi.isPositive ? (
                <ArrowUpRight className="w-4 h-4 text-emerald-500" />
              ) : (
                <ArrowDownRight className="w-4 h-4 text-red-500" />
              )}
              <span className={kpi.isPositive ? "text-emerald-500 font-medium" : "text-red-500 font-medium"}>
                {kpi.change}
              </span>
              <span className="text-sidebar-foreground ml-1">from last month</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
