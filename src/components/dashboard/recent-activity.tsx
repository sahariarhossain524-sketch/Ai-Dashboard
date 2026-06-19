export function RecentActivity() {
  const activities = [
    { id: 1, user: "John Doe", action: "Upgraded Plan", time: "2h ago", status: "Completed" },
    { id: 2, user: "Sarah Smith", action: "Model Trained", time: "4h ago", status: "Processing" },
    { id: 3, user: "Acme Corp", action: "API Limit Reached", time: "5h ago", status: "Failed" },
    { id: 4, user: "TechNova", action: "New Payment", time: "1d ago", status: "Completed" },
    { id: 5, user: "Alice Johnson", action: "Invite Sent", time: "1d ago", status: "Pending" },
  ];

  return (
    <div className="p-6 rounded-xl bg-card border border-border shadow-sm flex flex-col h-[400px]">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">Recent Activity</h3>
        <p className="text-sm text-sidebar-foreground">Latest transactions and events</p>
      </div>
      
      <div className="flex-1 overflow-y-auto pr-2 -mr-2">
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-sidebar-foreground/5 transition-colors border border-transparent hover:border-border">
              <div>
                <p className="font-medium text-sm text-foreground">{activity.user}</p>
                <p className="text-xs text-sidebar-foreground mt-0.5">{activity.action}</p>
              </div>
              <div className="text-right">
                <span className={`inline-block px-2.5 py-1 text-xs font-medium rounded-full mb-1
                  ${activity.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-500' : 
                    activity.status === 'Processing' ? 'bg-blue-500/10 text-blue-500' : 
                    activity.status === 'Failed' ? 'bg-red-500/10 text-red-500' : 
                    'bg-amber-500/10 text-amber-500'}`}
                >
                  {activity.status}
                </span>
                <p className="text-xs text-sidebar-foreground block">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
