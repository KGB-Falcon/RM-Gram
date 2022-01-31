import Link from "next/link"
import { FiCamera } from "react-icons/fi"
import { IoPaperPlaneOutline } from "react-icons/io5"

export const NavbarHome =()=>{
    return(
        <div className="md:hidden z-50 border border-zinc-300 fixed top-0 left-0 right-0 py-2 px-5 bg-white">
            <div className="flex justify-between items-center">
                <div><FiCamera size={25}/></div>
                <div>
                    <Link href='/'><h1 className="font-lobster text-2xl pr-2">RM-gram</h1></Link>
                </div>
                <Link href='/direct/inbox'><a><div><IoPaperPlaneOutline size={25} /></div></a></Link>
            </div>
        </div>
    )
}