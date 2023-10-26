'use client'
import { api } from "~/trpc/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"

type CardProps = React.ComponentProps<typeof Card>;

export function CustomerList({ className, ...props }: CardProps) {
  const { data } = api.customer.getAll.useQuery();
  return (
    !data
      ?
      <div>Loading...</div>
      :
      <>
        {data?.map((customer) => (
          <div className="py-1.5 hover:cursor-pointer" key={customer.id}>
            <Card className=''>
              <CardHeader className="py-5">
                <CardTitle className="text-2xl m-0">{customer.name}</CardTitle>
                <CardDescription>
                  {customer.email}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        ))}
      </>
  )
}

