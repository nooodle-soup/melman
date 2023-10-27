"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import type { UseFormReturn } from "react-hook-form"
import * as z from "zod"

import { Button } from "~/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form"
import { Input } from "~/components/ui/input"

const formSchema = z.object({
  firstName: z.string()
    .min(2, {
      message: "First name must be at least 2 characters.",
    }),
  lastName: z.string(),
  email:    z.string().email()
})

type FormFields = z.infer<typeof formSchema>;

const formFields = [
  {
    name: "firstName",
    label: "First Name *",
    placeholder: "Melman",
    description: "Customer's First Name"
  },
  {
    name: "lastName",
    label: "Last Name",
    placeholder: "Stretch",
    description: "Customer's Last Name"
  },
  {
    name: "email",
    label: "E-mail",
    placeholder: "stretch@melman.org",
    description: "Customer's E-mail"
  }

]

export function AddCustomerForm() {
  const form: UseFormReturn<FormFields> = useForm<FormFields>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email:    ""
    },
  });

  function onSubmit(values: FormFields) {
    console.log(values)
  }

  function onClear() {
    form.reset();
  }

  return (
    <div className="px-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {formFields.map((element, index) => (
          <FormField
            key={index}
            control={form.control}
            name={element.name}
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel className="text-lg text-slate-200">{element.label}</FormLabel>
                <FormControl>
                  <Input className="text-lg" placeholder={element.placeholder} {...field} />
                </FormControl>
                <FormDescription className="text-md text-slate-300">
                  {element.description}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          ))}
          <div className="flex justify-start items-center">
            <Button className="text-lg mr-1" type="submit">Submit</Button>
            <Button className="text-lg" type="reset" onClick={onClear}>Clear</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
