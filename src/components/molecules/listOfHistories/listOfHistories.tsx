import { gql, useQuery } from '@apollo/client'
import {Histories} from '../../atoms/histories'
import { Loading } from '../../atoms/loading'

const HISTORIES_QUERY = gql`
    query GET_INFO_HISTORIES($filter:FilterCharacter, $page:Int){
    characters(filter:$filter, page:$page){
        results{
            name
            id
            image
            }
        }
    }

`

export const ListOfHistories =()=>{
    const {data, loading, error} = useQuery(HISTORIES_QUERY,{
        variables:{
            "filter": {
                "species":  "human"
            },
            "page": 2
            
        }
    })

    const info = data?.characters?.results

    return(
        <div>
            {
                loading ? 
                null
                :
                <div className='flex justify-center'>
                    <div className='w-full sm:w-156 sm:mt-4 sm:mb-4'>
                        <ul className='flex justify-start mt-12 overflow-auto w-full px-2 py-1 border border-zinc-300  bg-white'>
                            {
                                info?.map(history=>
                                <li key={history?.id} className='p-2'>
                                    <Histories cover={history?.image} userName={history?.name}/>
                                </li>)
                            }
                        </ul>
                    </div>
                </div>
            }
        </div>
    )
} 