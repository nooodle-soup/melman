'use client'
import { SignInButton, useAuth, useClerk, useUser } from "@clerk/nextjs"
import { Button } from "~/components/ui/button";
import { Loader2 } from "lucide-react"
import Link from "next/link";
import { useRouter } from "next/navigation";

export const NavButtons = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();
  console.log("user:", user);
  const { signOut } = useClerk();
  const router = useRouter();

  return (

    !isLoaded
      ?
      (
        <Button className="px-6 py-3 bg-black text-white" disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
      )
      :
      (
        !isSignedIn
          ?
          <Button className="px-6 py-3 bg-black text-white" asChild>
            <SignInButton mode="modal" />
          </Button>
          :
          <>
            <DashboardButton />
            <Button onClick={() => signOut(() => router.push('/'))} className="px-6 py-3 bg-black text-white">
              Sign Out
            </Button>
          </>
      )
  )
}

export const DashboardButton = () => {

  return (
    <Button variant="ghost" asChild>
      <Link className="text-black mr-4" href="/dashboard/customers">
        Dashboard
      </Link>
    </Button>
  )
}
