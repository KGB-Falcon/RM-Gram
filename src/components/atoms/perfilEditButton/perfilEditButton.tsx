import Image from 'next/image'
import { BsGearWide } from 'react-icons/bs'
import zinogre from '../../../resources/Zinogre.jpg'

export const PerfilEditButton =()=>{
    return(
        <div className="mt-14 flex justify-center mb-4 ">
                <div className="w-28">
                    <Image src={zinogre} width={77} height={77} className="rounded-full"/>
                </div>
                <div className="w-40 flex flex-col items-center">
                    <h2 className="text-3xl font-light">UserName</h2>
                    <button className="font-medium border border-slate-400 rounded-sm w-full text-sm py-1 text-slate-600">
                        Editar perfil
                    </button>
                </div>
        </div>
    )
}