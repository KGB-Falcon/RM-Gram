import { gql, useQuery } from '@apollo/client'
import { Loading } from '../loading'
import { Suggestion } from '../suggestion'

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

export const Suggestions =()=>{
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
            {
                loading ?
                <div className='m-14'>
                    <Loading />
                </div>
                :
                infoSuggestions?.map((item)=>(
                    <div  key={item?.id}>
                        <Suggestion image={item?.image} userName={item?.name} species={item?.species}/>
                    </div>))
            }
            {
                loading ? 
                null
                :
                <div className="text-center mb-16 mt-1">
                    <button className="text-sky-500 font-medium text-sm">Ver todas las sugerencias</button>
                </div> 
            }
        </div>
    )
}