import { Button } from "./ui/button"
import Link from "next/link"
import { NavButtons } from "./NavButtons"

export const Navbar = () => {
  return (
    <div className="absolute top-0 
    px-3 py-3 w-screen 
    bg-white flex items-center justify-between
    text-black">
      <Button className="text-2xl border-black" variant="outline">
        <Link href="/">
          melman.
        </Link>
      </Button>
      <div className="flex">
        <NavButtons />
      </div>
    </div>
  )
}
