import { NavbarHome } from '../components/atoms/navbarHome'
import { PerfilEditButton } from '../components/atoms/perfilEditButton'
import { Suggestions } from '../components/atoms/suggestions'
import { ListOfHistories } from '../components/molecules/listOfHistories'
import { Publications } from '../components/molecules/Publications'

const Home =()=>{
    return(
       <div>
            <NavbarHome />
            <div className='lg:flex lg:mx-16'>
                <div className='lg:mr-7 '>
                    <ListOfHistories />
                    <Publications/>
                </div>
                <div className='hidden lg:block w-80 fixed right-16'>
                    <div className='flex justify-center flex-col mt-6 items-center'>
                        <PerfilEditButton />
                    </div>
                    <div className='mt-5 w-full h-72 overflow-auto'>
                        <Suggestions />
                    </div>
                </div>
                
            </div>
       </div>
    )
}

export default Home