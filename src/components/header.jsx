import Link from "next/link"
import { LogIn } from "lucide-react"
export const Header = () => {
    return(<div className="flex items-center h-[90px] border-b-[1px] shadow-md justify-between w-full z-10 bg-[#172554]">
    <div className="flex justify-end mx-4">
        <Link href={"/"} className= "flex gap-2 ">
           <LogIn /> Хэрэглэгчээр харах
        </Link>
    </div>
  </div>)
}