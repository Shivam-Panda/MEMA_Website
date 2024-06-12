import '../styles/header.css'
import logo from './logo.jpg'

const Header = ({
    setPage
}) => {
    return (
        <div className="Header">
            <div className='title'>
                <img className='logo' onClick={() => {setPage("HOME")}} src={logo} width='100px' />
            </div>
            <div className="Header_Buttons">
                <button onClick={() => {setPage("COMMUNITY")}}><b>COMMUNITY</b></button>
                <button onClick={() => {setPage("KITS")}}><b>KITS</b></button>
                <button onClick={() => {setPage("WORKSHOP")}}><b>WORKSHOP</b></button>
                <button onClick={() => {setPage("TRIPS")}}><b>TRIPS</b></button>
                <button onClick={() => {setPage("CONTACT")}}><b>CONTACT</b></button>
            </div>
        </div>
    )
} 

export default Header;