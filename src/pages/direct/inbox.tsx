import { IoPaperPlaneOutline } from "react-icons/io5";
import { MdOutlineArrowBackIos, MdOutlineEditNote } from "react-icons/md";
import { InboxMobile } from "../../components/atoms/inboxMobile";

const Inbox =()=>{
    return(
        <div>
            <InboxMobile />
            <div className="mt-20 flex">
                <div className="w-full">
                    <div className="w-full px-24 border">
                        <div className="flex justify-end items-center ">
                            <div className="flex items-center justify-center">
                                <div>
                                    <p className="text-lg">UserName</p>
                                </div>
                                <div><MdOutlineArrowBackIos className="-rotate-90" size={25} color="#3f3f3f"/></div>
                            </div>
                            <div className="">
                                <MdOutlineEditNote size={25} color="#3f3f3f"/>
                            </div>
                        </div>
                    </div>
                    <div className="border h-40 flex justify-center items-center text-center">
                        <p>No hay Chats Iniciados</p>
                    </div>
                </div>
                {/* abajo */}
                <div className="w-full border flex justify-center items-center flex-col">
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
    )
}

export default Inbox