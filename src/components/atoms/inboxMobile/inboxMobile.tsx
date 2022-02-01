import Link from "next/link";
import { MdOutlineArrowBackIos, MdOutlineEditNote } from "react-icons/md";

export const InboxMobile =()=>{
    return(
        <div className="lg:hidden">
            <div className="flex justify-between px-4 py-2 border border-slate-300 bg-white">
                <div>
                    <Link href='/'>
                        <a>
                            <MdOutlineArrowBackIos size={25} color="#3f3f3f"/>
                        </a>
                    </Link>
                </div>
                <div >
                    <p className="font-medium">
                        Direct
                    </p>
                </div>
                <div>
                    <MdOutlineEditNote size={25} color="#3f3f3f"/>
                </div>
            </div>
            <div className="mt-44">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-2xl font-light mb-2">
                        No hay Mensajes
                    </p>
                    <button className="bg-sky-500 text-white rounded-sm px-2 py-1">Escribir un mensaje</button>
                </div>
            </div>
        </div>
    )
}