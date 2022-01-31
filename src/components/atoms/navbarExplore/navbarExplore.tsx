import { useState } from "react"
import { CgSearch } from "react-icons/cg"

export const NavbarExplore =()=>{
    const [state, setState] = useState<boolean>(false)

    const handleClick =()=>{
        setState(!state)
    }

    return(
        <div className="md:hidden z-50 border border-zinc-300 fixed top-0 left-0 right-0 py-2 px-4 bg-white">
            
               {
                state === false ? 
                    <div className="flex items-center border justify-center rounded-lg py-1" onClick={handleClick}> 
                        <div className="pr-1 pt-0.5"><CgSearch size={14} color="gray"/></div>
                        <p className="text-sm text-slate-500">Buscar</p>
                    </div>
                    :
                    <div className="flex">
                        <div className="flex items-center border pl-3 rounded-lg py-1 mr-5">
                            <div className="pr-1 pt-0.5"><CgSearch size={14} color="gray"/></div>
                            <input className="text-sm outline-none w-48" type="text" placeholder="Buscar"/>
                        </div>
                        <button onClick={handleClick} className="text-sm font-medium">Cancel</button>
                    </div>
               }
            
        </div>
    )
}