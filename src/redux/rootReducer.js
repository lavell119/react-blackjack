import AccountMiddleThird from "../components/AccountMiddleThird"
import MiddleThird from "../components/MiddleThird"
import ChangePassword from "../components/ChangePassword"
import Tables from "../components/Tables"

const initState = {
    display: '',
    middleThirdOptions: <MiddleThird />
}

const rootReducer = (state = initState, action) => {
      
  /*if (action.type === "LOAD_TABLES") {
        console.log('load tables')
        return {
            ...state,
            display: <Tables />
        }
    }
    else return state */
    switch(action.type) {
        case "LOAD_TABLES":
            return {
                ...state,
                display: <Tables />
            }
        case "LOAD_ACCOUNT":
            return {
                ...state,
                middleThirdOptions: <AccountMiddleThird />
            }
        default: 
            return state
    } 
    
}

export default rootReducer