import AccountMiddleThird from "../components/AccountMiddleThird"
import MiddleThird from "../components/MiddleThird"
import ChangePassword from "../components/ChangePassword"
import Tables from "../components/Tables"
import AccountInformation from "../components/AccountInformation"
import ChangeEmail from "../components/ChangeEmail"
import Cashier from "../components/Cashier"
import CashierOverview from "../components/CashierOverview"
import Cashierp2p from "../components/Cashierp2p"
import CashierHistory from "../components/CashierHistory"
import Avatar from "../components/AccountAvatar"
import AccountSecurity from "../components/AccountSecurity"


/////--SIDEBARS

let accountSidebar=
[
{title: 'Account Information', display: <AccountInformation /> },                                
{title: 'Change Password', display: <ChangePassword /> },
{title: 'Account Security', display: <AccountSecurity /> },
{title: 'Change E-mail', display: <ChangeEmail /> }, 
{title: 'Change Avatar', display: <Avatar /> }
] 

let homeSideBar= 
[ 
{title: 'Blackjack Games', display: <Tables />}, 
{title: 'Settings', display: '', sidebar: "LOAD_SETTING_SIDEBAR"}, 
{title: 'Account', display: '', sidebar: "LOAD_ACCOUNT_SIDEBAR"} , 
{title: 'Cashier', display: <Cashier />}, 
{title: 'About', display: ''} 
] 

let settingsSideBar= 
[ 
{title: 'Chat Settings', display: ''}, 
{title: 'Sound Settings', display: ''}, 
{title: 'Language', display: ''}, 
{title: 'Cashier', display: <Cashier />}, 
{title: 'Table Skins', display: ''} 
] 

/////--INITSTATE

const initState = {
    display: <Tables />,
    middleThirdOptions: <MiddleThird />,
    title: 'Lobby',
    accountDisplay: <AccountInformation />,
    cashierContent: <CashierOverview />,
    cashierHeader: [null, null, null, null, null, null],
    sideBarActive: [null, null, null, null, null],
    slidePosition: 0, 
    changingSideBar: settingsSideBar
}


/////--ROOTREDUCER

const rootReducer = (state = initState, action) => {

    switch(action.type) {
        case "LOAD_TABLES":
            return {
                ...state,
                middleThirdOptions: <MiddleThird />,
                display: <Tables />,
                title: 'Lobby',
                sideTitle: 'Lobby',
                changingSideBar: homeSideBar
                
            }
        //ACCOUNT
        case "LOAD_ACCOUNT":
            return {
                ...state,
                middleThirdOptions: <AccountMiddleThird />,
                display: <AccountInformation />,
                title: 'Account',
                sideTitle: 'Account',
                sideBarActive: ['activ', null, null, null, null],
                changingSideBar: accountSidebar
            }

        case "LOAD_ACCOUNT_SNIP":
            return {
                ...state,
                display: action.payload.snippet,
                title: action.payload.title
            }
        
        case "LOAD_CASHIER":
            return {
                ...state,
                display: <Cashier />,
                title: 'Cashier',
                sideTitle: 'Cashier',
                cashierHeader: ['active', null, null, null, null, null],
                cashierContent: <CashierOverview />,
                changingSideBar: homeSideBar   

            }
        //CASHIER
        case "CHANGE_CASHIER":
            return {
                ...state,
                cashierContent: action.payload
                }
        case "CHANGE_CASHIER_OVERVIEW":
            return {
                ...state,
                cashierHeader: ['active', null, null, null, null, null]
            }
        case "CHANGE_CASHIER_DEPOSIT":
            return {
                ...state,
                cashierHeader: [null, 'active', null, null, null, null]
            }
        case "CHANGE_CASHIER_TRANSFER":
            return {
                ...state,
                cashierHeader: [null, null, null, 'active', null, null]
                }
        case "CHANGE_CASHIER_WITHDRAWAL":
            return {
                ...state,
                cashierHeader: [null, null, 'active', null, null, null]
            }
        case "CHANGE_CASHIER_P2P":
            return {
                ...state,
                cashierHeader: [null, null, null, null, 'active', null] 
            }
        case "CHANGE_CASHIER_HISTORY":
            return {
                ...state,
                cashierHeader: [null, null, null, null, null, 'active'] 
            }
        //SIDEBAR ACTIVE CLASS
        case "CHANGE_SIDEBAR_1":
            return {
                ...state,
                sideBarActive: ['activ', null, null, null, null] 
            }
        case "CHANGE_SIDEBAR_2":
            return {
                ...state,
                sideBarActive: [null, 'activ', null, null, null] 
            }
        case "CHANGE_SIDEBAR_3":
            return {
                ...state,
                sideBarActive: [null, null, 'activ', null, null] 
            }
        case "CHANGE_SIDEBAR_4":
            return {
                ...state,
                sideBarActive: [null, null, null, 'activ', null] 
            }
        case "CHANGE_SIDEBAR_5":
            return {
                ...state,
                sideBarActive: [null, null, null, null, 'activ'] 
            }
        case "RESET_SIDEBAR_ACTIVE":
        return {
            ...state,
            sideBarActive: [null, null, null, null, null] 
        }

        //CHANGING SIDEBAR 
        case "LOAD_ACCOUNT_SIDEBAR":
        return {
            ...state,
            changingSideBar: accountSidebar
        }

        case "LOAD_SETTING_SIDEBAR":
        return {
            ...state,
            changingSideBar: settingsSideBar
        }


        //TABLE SLIDER
        case "SLIDE-TABLES-RIGHT":
            if(state.statePosition!==0)
        return {
            ...state,
            slidePosition: state.slidePosition-300
        }   
        case "SLIDE-TABLES-LEFT":
        return {
            ...state,
            slidePosition: state.slidePosition+300
        }   
        case "render-sidebar-ele":
        return {
            ...state,
                display: action.payload.display,
                title: action.payload.title           
        }   
        default: 
            return state
    } 
    
}

export default rootReducer