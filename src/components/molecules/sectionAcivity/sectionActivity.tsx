import { BsHeart } from "react-icons/bs";
import { Suggestions } from "../../atoms/suggestions";
import { gql, useQuery } from '@apollo/client'


const SUGGESTIONS_QUERY=gql`
    query GET_INFO_PUBLICATION($filter:FilterCharacter){
        characters(filter:$filter){
            results{
                id
                image
                species
                name
            }
        }
    }
`

export const SectionActivity =()=>{
    const {data, loading, error} = useQuery(SUGGESTIONS_QUERY, {
        variables: {
            "filter": {
                "species": "alien"
            }
        }
    })

    const infoSuggestions = data?.characters?.results

    return(
        <div>
            <div className="flex justify-center flex-col items-center">
                <div className="z-50 bg-white md:hidden fixed top-0 left-0 right-0 flex justify-center items-center border border-slate-400 py-2 w-full">
                    <p className="font-medium text-slate-700">Avtividad</p> 
                </div>
                <div className="md:mt-14 mt-11 flex items-center justify-center flex-col border border-black p-3 w-15 h-15 rounded-full">
                    <BsHeart size={35} className="pt-1"/>
                </div>
                <div className="text-center">
                    <p className="mt-3 text-2xl">Actividad en tus publicaciones</p>
                    <p className="mt-3 px-10 text-sm">Aquí verás si alguien indica que le gusta una de tus publicaciones o la comenta.</p>
                    <button className="mt-3 font-bold text-cyan-400">Comparte tu primera foto</button>
                </div>
            </div>
            <div className="pl-4 pt-4 mb-4">
                <h4 className="font-medium">
                    Sugerencias para ti
                </h4>
            </div>

            <div className="">
                {
                    infoSuggestions?.map((item)=>(
                        <div  key={item?.id}>
                            <Suggestions image={item?.image} userName={item?.name} species={item?.species}/>
                        </div>))
                }
            </div>
            <div className="text-center mb-16 mt-1">
                <button className="text-sky-500 font-medium text-sm">Ver todas las sugerencias</button>
            </div>
        </div>
    )
}