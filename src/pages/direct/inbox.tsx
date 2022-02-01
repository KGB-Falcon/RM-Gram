import { InboxDesktop } from "../../components/atoms/inboxDesktop";
import { InboxMobile } from "../../components/atoms/inboxMobile";

const Inbox =()=>{
    return(
        <div>
            <InboxMobile />
            <InboxDesktop />
        </div>
    )
}

export default Inbox