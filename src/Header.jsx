import './styles/header.css'
import logo from './assets/logo.png'
import refreshSvg from './assets/refresh.svg'
import { triggerRefresh } from './modules/auctionEvents.js'

function Header() {
    return(
        <header className='header'>
            <RightHeader/>
            <LeftHeader/>
        </header>
    )
}

function RightHeader() {
    return(
        <div className='right-header'>
            <img src={logo} alt="logo"></img>
            <h1>Auction Tracker</h1>
        </div>
    )
}

function LeftHeader() {
    return(
        <div className='left-header'>
            <RefreshButton/>
        </div>
    )
}

function RefreshButton() {
    return(
        <button onClick={triggerRefresh} className='refresh-btn'>
            <img src={refreshSvg} alt="reload" /> 
        </button>
    )
}

export default Header;