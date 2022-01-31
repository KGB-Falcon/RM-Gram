import { Footer } from "../../molecules/footer"
import { Navbar } from "../../molecules/navbar"

export const Layout =({children}:any)=>{
    return(
        <div>
            <Navbar />
                {children}
            <Footer />
        </div>
    )
}