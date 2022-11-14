import { useSelector, useDispatch } from "react-redux"
import Sidebar from "./Sidebar"
import ChatPopup from "./ChatPopup"

export default function MiddleThird() {
    const displayerState=useSelector(state => state.display)
    const dispatch = useDispatch()
    return (
        <>
    <div className="middle-third">
        <Sidebar />
        <div className="display">   
            {displayerState}
            <ChatPopup />
        </div>
    </div>
        </>
    )
}