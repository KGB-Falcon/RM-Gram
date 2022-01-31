import { AiOutlineHome, AiOutlineHeart } from "react-icons/ai";
import { BsPlusSquare, BsCompass } from "react-icons/bs";
import { CgProfile} from "react-icons/cg";
import { IoPaperPlaneOutline } from "react-icons/io5";
import Link from 'next/link'

export const NavbarHomeMedium =()=>{
    return(
        <div className="hidden md:block z-50 border border-zinc-300 fixed top-0 left-0 right-0 py-2 px-4 bg-white">
            <div className="flex justify-between items-center w-full">
                <div className="mr-20">
                    <Link href='/'><h1 className="font-lobster text-2xl pr-2">RM-gram</h1></Link>
                </div>
                <div >
                    <input className="bg-zinc-200 py-1 w-60 px-4 rounded-lg" type="text" placeholder="Buscar"/>
                </div>
                <div className="flex justify-evenly w-60">
                    <Link href='/'><a><div><AiOutlineHome size={25}/></div></a></Link>
                    <Link href='/direct/inbox'><a><div><IoPaperPlaneOutline size={25} /></div></a></Link>
                    <div><BsPlusSquare size={25} /></div>
                    <Link href='/explore/explore'><a><div><BsCompass size={25}/></div></a></Link>
                    <Link href='/activity/activity'><a><div><AiOutlineHeart size={25}/></div></a></Link>
                    <Link href='/profile/profile'><a><div><CgProfile size={25}/></div></a></Link>
                </div>
            </div>
        </div>
    )
}