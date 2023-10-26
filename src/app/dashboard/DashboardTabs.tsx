'use client'
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { usePathname } from "next/navigation";

export function DashboardTabs() {
  const currentPath = usePathname().split('/')[2];

  return (
      <div>
        <Button variant={
          currentPath == "customers"
            ?
            "defaultSquare"
            :
            "secondarySquare"
        } className="text-lg py-6" asChild>
          <Link href="/dashboard/customers">
            Customers
          </Link>
        </Button>
        <Button variant={
          currentPath == "appointments"
            ?
            "defaultSquare"
            :
            "secondarySquare"
        } className="py-6 text-lg" asChild>
          <Link href="/dashboard/appointments">
            Appointments
          </Link>
        </Button>
      </div>
  );
}
