import { NavbarHome } from '../components/atoms/navbarHome'
import { ListOfHistories } from '../components/molecules/listOfHistories'
import { Publications } from '../components/molecules/Publications'

const Home =()=>{
    return(
       <div>
           <NavbarHome />
           <ListOfHistories />
           <Publications/>
       </div>
    )
}

export default Home