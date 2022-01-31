import { gql, useQuery } from '@apollo/client'
import Image from 'next/image'
import { Loading } from '../loading'

const EXPLORE_QUERY = gql`
    query GET_INFO_PUBLICATION{
        characters{
            results{
                id
                image
            }
        }
    }   
`

export const ExploreBody =()=>{
    const {data, loading, error} = useQuery(EXPLORE_QUERY)
    const infoExplore = data?.characters?.results

    return(
        <div className='mb-20'>
            {
                loading ? 
                <div className='mt-14'>
                    <Loading />
                </div>
                :
                <div className="mt-14 grid grid-cols-3 p-1 mb-10">
                    {
                        infoExplore?.map((item)=>(
                            <div className='m-0.5' key={item?.id}>
                                <Image src={item?.image} height={1000} width={1000} />
                            </div>
                        ))
                    }
                </div>
            }
            <Loading />
        </div>
    )
}