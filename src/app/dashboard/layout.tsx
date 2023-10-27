import { DashboardTabs } from "./DashboardTabs";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="px-32">
      <div className="mt-10 text-4xl py-10">
        Dashboard
      </div>
      <DashboardTabs/>
      <div className="h-[500px] bg-slate-200 border border-slate-600 rounded-r-md rounded-bl-md p-6">
        {children}
      </div>
    </div>
  );
}
