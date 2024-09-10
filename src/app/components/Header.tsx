import { Menu } from "lucide-react"
import Link from "next/link"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  

function Header() {
  return (
    <header className="flex justify-between items-center p-2 bg-gray-800">
        {/* <div>
        <nav className="">
      <div className="">
        <div className="bg-gray-800 text-white p-3 items-center">
            <h1 className="font-extrabold bg-red-200 rounded-full text-gray-950 max-w-[7%] text-2xl text-center   ">MY LOGO</h1>
          <div className="  flex gap-x-4 justify-end  ">
          <Link href ="/" className="hover:text-orange-200 text-2xl">Home</Link>
            <Link href ="sevices" className="hover:text-orange-200 text-2xl">Services</Link>
            <Link href ="about" className="hover:text-orange-200  text-2xl">About</Link>

          </div>
            
          
        </div>
      </div>
    </nav>

    </div> */}
    <h1 className="text-4xl font-bold text-yellow-300">ZK.</h1>
    <nav className="">
    
    <Sheet>
  <SheetTrigger className="md:hidden"><Menu  /></SheetTrigger>
  <SheetContent className="bg-slate-600">
   
    <ul className="   ">
            <li className="hover:text-stone-200"><Link href="/">HOME</Link></li>
            <li className="hover:text-stone-200"><Link href="/about">ABOUT</Link></li>
            <li className="hover:text-stone-200"><Link href="/sevices">SEVICES</Link></li>
        </ul>
    
  </SheetContent>
</Sheet>
<ul className=" md:flex gap-x-4 hidden  ">
            <li className="hover:text-stone-200"><Link href="/">HOME</Link></li>
            <li className="hover:text-stone-200"><Link href="/about">ABOUT</Link></li>
            <li className="hover:text-stone-200"><Link href="/sevices">SEVICES</Link></li>
        </ul>
        
    </nav>
    
    </header>
  )
}

export default Header