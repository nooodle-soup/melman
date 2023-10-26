import { DashboardTabs } from "./DashboardTabs";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="px-32">
      <div className="text-4xl py-10">
        Dashboard
      </div>
      <DashboardTabs/>
      <div className="bg-slate-200 border border-slate-600 rounded-r-md rounded-bl-md p-6">
        {children}
      </div>
    </div>
  );
}
