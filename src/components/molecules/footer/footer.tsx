import { AiOutlineSmile } from "react-icons/ai";

export const Footer =()=>{
    return(
        <div className="w-full px-10 bg-white h-28 mt-102 hidden sm:block ">
            <div className='flex flex-wrap justify-evenly'>
                <p className="text-xs text-slate-500 py-1 px-2">Meta</p>
                <p className="text-xs text-slate-500 py-1 px-2">Informacion</p>
                <p className="text-xs text-slate-500 py-1 px-2">Blog</p>
                <p className="text-xs text-slate-500 py-1 px-2">Empleo</p>
                <p className="text-xs text-slate-500 py-1 px-2">Ayuda</p>
                <p className="text-xs text-slate-500 py-1 px-2">Api</p>
                <p className="text-xs text-slate-500 py-1 px-2">Privacidad</p>
                <p className="text-xs text-slate-500 py-1 px-2">Condiciones</p>
                <p className="text-xs text-slate-500 py-1 px-2">Cuentas destacadas</p>
                <p className="text-xs text-slate-500 py-1 px-2">Hashtag</p>
                <p className="text-xs text-slate-500 py-1 px-2">Ubicaciones</p>
                <p className="text-xs text-slate-500 py-1 px-2">Instagram Lite</p>
                <div className="flex items-center">
                    <AiOutlineSmile color="grey"/> 
                    <p className="text-xs text-slate-500 py-1 px-2">
                        2022 RM-gram from Falcon
                    </p>
                </div>
            </div>
        </div>
    )
}