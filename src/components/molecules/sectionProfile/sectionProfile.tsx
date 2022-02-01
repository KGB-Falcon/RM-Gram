import Image from "next/image"
import { BsGearWide } from "react-icons/bs"
import { IoPersonAddOutline } from "react-icons/io5"
import { AiOutlineAppstore } from "react-icons/ai"
import { BsBookmark } from "react-icons/bs"
import { BsPersonSquare } from "react-icons/bs"
import { IoSquareOutline } from "react-icons/io5"
import { gql, useQuery } from "@apollo/client"
import { Loading } from "../../atoms/loading"
import { PerfilEditButton } from "../../atoms/perfilEditButton"

const PROFILE_QUERY = gql`
    query GET_INFO_PUBLICATIONS_OF_USER{
        characters{
            results{
                id
                image
            }
        }
    }   
`


export const SectionProfile =()=>{
    const {data, loading, error} = useQuery(PROFILE_QUERY)
    const infoProfile = data?.characters?.results

    return(
        <div>
            <div className="md:hidden bg-white z-50 fixed top-0 left-0 right-0 flex justify-between px-4 py-2 border border-slate-300" >
                <div><BsGearWide size={25}/></div>
                <div>
                    UserName
                </div>
                <div><IoPersonAddOutline size={25}/></div>
            </div>

            <PerfilEditButton />

            <div className="font-medium pl-5 pb-5 border border-t-transparent border-b-slate-300 md:text-center lg:text-center">
                <p>UserName</p>
            </div>
            <div className="flex justify-between p-4 border border-t-transparent border-b-slate-300">
                <div className="text-center">
                    <p className="text-sm font-medium">23</p>
                    <p className="text-sm text-slate-500">Publicaciones</p>
                </div>
                <div className="text-center">
                    <p className="text-sm font-medium">23</p>
                    <p className="text-sm text-slate-500">Seguidores</p>
                </div>
                <div className="text-center">
                    <p className="text-sm font-medium">23</p>
                    <p className="text-sm text-slate-500">Seguidos</p>
                </div>
            </div>
            <div className="flex justify-between px-8 py-3 border border-t-transparent border-b-slate-300">
                <div><AiOutlineAppstore size={25} color="#3f3f3f"/></div>
                <div><IoSquareOutline size={25} color="#3f3f3f"/></div>
                <div><BsBookmark size={25} color="#3f3f3f" /></div>
                <div><BsPersonSquare size={25} color="#3f3f3f" /></div>
            </div>
            <div>
                {
                    loading ? 
                    <div className="mt-14">
                        <Loading />
                    </div>
                    :
                    <div className="p-1 grid grid-cols-3 mb-10">
                        {
                            infoProfile?.map((item)=>(
                                <div className="m-1" key={item?.id}>
                                    <Image src={item?.image} height={1000} width={1000}/>
                                </div>
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    )
}