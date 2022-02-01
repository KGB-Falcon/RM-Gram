import { IoPaperPlaneOutline } from "react-icons/io5";
import { MdOutlineArrowBackIos, MdOutlineEditNote } from "react-icons/md";
import { InboxMobile } from "../../components/atoms/inboxMobile";

const Inbox =()=>{
    return(
        <div>
            <InboxMobile />
            <div className="hidden mt-16 xl:flex justify-center px-48 ">
                <div className="w-full">
                    <div className="w-full py-3 px-3 px border">
                        <div className="flex justify-between items-center ">
                            <div className="w-6 h-6"/>
                            <div className="flex items-center justify-center">
                                <div className="mr-1">
                                    <p className="text-md font-medium">UserName</p>
                                </div>
                                <div><MdOutlineArrowBackIos className="-rotate-90" size={15} color="#3f3f3f"/></div>
                            </div>
                            <div className="">
                                <MdOutlineEditNote size={25} color="#3f3f3f"/>
                            </div>
                        </div>
                    </div>
                    <div className="border py-56 px-10 flex justify-center items-center text-center">
                        <p>No hay Chats Iniciados</p>
                    </div>
                </div>
                {/* abajo */}
                <div className="w-full border flex justify-center items-center flex-col ">
                   <div className="w-160 flex justify-center flex-col items-center">
                        <div className="mb-4 flex items-center justify-center w-20 h-20 border-2 border-black rounded-full">
                            <IoPaperPlaneOutline size={40} color="black" />
                        </div>
                        <div>
                            <p className="text-2xl font-light">
                                Tus mensajes
                            </p>
                        </div>
                        <div className="mb-4 mt-2">
                            <p className="text-sm text-gray-400">
                                Envía fotos y mensajes privados a un amigo o un grupo.
                            </p>
                        </div>
                        <div>
                            <button className="bg-sky-500 text-white rounded-sm px-2 py-1">Escribir un mensaje</button>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Inbox