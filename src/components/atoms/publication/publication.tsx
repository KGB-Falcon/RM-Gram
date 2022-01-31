import Image from 'next/Image'
import { IoEllipsisHorizontal } from "react-icons/io5";
import { AiOutlineHeart, AiOutlineSmile } from "react-icons/ai";
import { IoPaperPlaneOutline, IoChatbubbleOutline } from "react-icons/io5";
import {BsBookmark} from 'react-icons/bs'
import { PublicationPropsTypes } from './types';

export const Publication =({image, userName}:PublicationPropsTypes)=>{
    return(
        <div>
            <div className='sm:w-156 bg-white pb-4 max-w-full sm:border sm:border-slate-300'>
                <div className='flex items-center justify-between bg-white'>
                    <div className='flex items-center py-3 px-4 w-full'>
                        <div>
                            <Image src={image} width={32} height={32} layout='fixed' className='rounded-full'/>
                        </div>
                        <div className='ml-3 pb- w-full font-medium'>
                            {userName}
                        </div>
                    </div>
                    <div className='flex items-center p-4'>
                        <IoEllipsisHorizontal />
                    </div>
                </div>
                <div className='max-w-full'>
                    <Image src={image} width={1000} height={1000} className='max-w-full'/>
                </div>
                {/* footer publication */}
                <div className='px-4'>
                    <div className='py-1'>
                        <div className='flex justify-between'>
                            <div className='flex'>
                                <div className='py-2 pr-2'><AiOutlineHeart size={24}/></div>
                                <div className='py-2 pr-2 pl-2'><IoPaperPlaneOutline size={24}/></div>
                                <div className='py-2 pr-2 pl-2'><IoChatbubbleOutline size={24}/></div>
                            </div>
                            <div>
                                <div className='py-2'>
                                    <BsBookmark size={24}/>
                                </div>
                            </div>
                        </div>  
                    </div>  
                    <div className='mb-2'>
                        <p className='text-sm '>Le gusta a </p>
                    </div>
                    <div className='mb-2'>
                    <div className='flex items-center'>
                        <p className='font-medium mr-1'>{userName}</p>
                        <p className="text-sm ">@{userName}</p>
                    </div>
                    <p className="text-sm text-gray-400">Ver los comentarios</p>
                    </div>
                    <div className='pb-4'>
                        <p className='text-xs text-gray-400'>HACE 24 HORAS</p>
                    </div>
                </div>
            </div>
            <div className='sm:mb-10 hidden sm:flex justify-between items-center sm:w-156 py-3 px-5 border border-slate-300 border-t-transparent'>
                    <div className='flex'>
                        <AiOutlineSmile size={24}/>
                        <input className='pl-5' type="text" placeholder='Agregar un comentario'/>
                    </div>
                    <button className='text-cyan-500'>Publicar</button>
            </div>     
        </div>

    )
}