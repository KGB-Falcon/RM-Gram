import Link from 'next/link'
import Image from 'next/image'
import { HistoryPropsTypes } from './types'

export const Histories = ({cover, userName}:HistoryPropsTypes) => {
    return(
            <Link href='/'>
                <a>
                    <div className='flex flex-col justify-center items-center '>
                        <Image src={cover} width={66} height={66} layout='fixed' priority className='rounded-full'/>
                    <div className='text-xs p-1 text-center w-20'>
                        <p className='truncate'>
                            {userName}
                            </p>
                        </div>
                    </div>
                </a>
             </Link>
    )
}