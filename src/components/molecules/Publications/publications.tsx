import { gql, useQuery } from "@apollo/client"
import { Loading } from "../../atoms/loading"
import { Publication } from "../../atoms/publication"

const PUBLICATIONS_QUERY = gql`
    query GET_INFO_PUBLICATION{
        characters{
            results{
                name
                id
                image
            }
        }
    }
`

export const Publications =()=>{
    const {data, loading, error} = useQuery(PUBLICATIONS_QUERY)
    const info = data?.characters?.results

    return( 
       <div>
           {
               loading ? 
               <div className="mt-60">
                   <Loading />
               </div>
               :
                <div className='flex justify-center flex-col items-center'>
                    {info?.map((publication)=>(
                        <div key={publication?.id}>
                            <Publication image={publication?.image} userName={publication?.name}/>
                        </div>
                    ))}
                </div>
           }
       </div>
    )  
}