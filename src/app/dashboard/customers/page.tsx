import { Separator } from "~/components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/components/ui/tabs"
import Link from "next/link";
import { CustomerList } from "./viewCustomers";
import { AddCustomerForm } from "./addCustomer";

export default function CustomerPage() {

  return (
    <Tabs defaultValue="view" className="flex h-full">
        <div className="w-1/4">
          <TabsList className="grid grid-cols-1 w-full h-max">
            <TabsTrigger className="text-lg py-3 w-full" value="view">
              View
            </TabsTrigger>
            <TabsTrigger className="text-lg py-3 w-full" value="add">
              Add
            </TabsTrigger>
          </TabsList>
        </div>
        <Separator className="mx-5 bg-slate-600" orientation="vertical"/>
        <div className="w-3/4 
        p-2 bg-slate-600 border border-slate-600 
        rounded-2xl">
          <TabsContent value="view">
            <CustomerList />
          </TabsContent>
          <TabsContent value="add">
            <AddCustomerForm />
          </TabsContent>
        </div>
    </Tabs>
  );
}
