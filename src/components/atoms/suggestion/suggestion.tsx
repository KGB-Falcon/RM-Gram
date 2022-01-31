import Image from "next/image"
import { SuggestionPropsTypes } from "./types"

export const Suggestion =({image, userName, species}:SuggestionPropsTypes)=>{
    return(
        <div className="flex justify-between items-center px-4 mb-2">
            <div className="flex flex-col items-center p-1 ">
                <Image src={image} width={44} height={44} layout="fixed" className="rounded-full"/>
            </div>
            <div className="w-full">
                <p className="font-medium text-sm">{userName}.{species}</p>
                <p className="text-sm text-slate-500">{userName}</p>
            </div>
            <div>
                <button className="bg-sky-500 px-2 py-0.5 font-medium text-white rounded-sm">Seguir</button>
            </div>
        </div>
    )
}