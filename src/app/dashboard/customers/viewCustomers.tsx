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
          <Card key={customer.id} className="m-1 my-2 hover:cursor-pointer rounded-lg">
            <CardHeader className="py-5">
              <CardTitle className="text-2xl m-0">
                {customer.firstName} {customer.lastName}
              </CardTitle>
              <CardDescription>
                {customer.email}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </>
  )
}

