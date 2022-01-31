import { AiOutlineHome, AiOutlineHeart } from "react-icons/ai";
import { BsPlusSquare } from "react-icons/bs";
import { CgProfile, CgSearch } from "react-icons/cg";
import Link from 'next/link'

export const NavigationApp =()=>{
    return(
        <div className="md:hidden">
                <div className="h-14 border border-zinc-300 fixed top-0 left-0 right-0 z-50 mt-104 py-3 bg-white">
                        <div className="flex justify-evenly items-center">
                            <Link href='/'><a><div><AiOutlineHome size={25}/></div></a></Link>
                            <Link href='/explore/explore'><a><div><CgSearch size={25} /></div></a></Link>
                            <Link href=''><a><div><BsPlusSquare size={25} /></div></a></Link>
                            <Link href='/activity/activity'><a><div><AiOutlineHeart size={25}/></div></a></Link>
                            <Link href='/profile/profile'><a><div><CgProfile size={25}/></div></a></Link>
                        </div>
                </div>
        </div>
    )
}