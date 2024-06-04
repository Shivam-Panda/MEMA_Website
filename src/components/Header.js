import '../styles/header.css'

const Header = ({
    setPage
}) => {
    return (
        <div className="Header">
            <div>
                <h1>MEMA</h1>
            </div>
            <div className="Header_Buttons">
                <button onClick={() => {setPage("HOME")}}>HOME</button>
                <button onClick={() => {setPage("COMMUNITY")}}>COMMUNITY</button>
                <button onClick={() => {setPage("KITS")}}>KITS</button>
                <button onClick={() => {setPage("WORKSHOP")}}>WORKSHOPS</button>
                <button onClick={() => {setPage("TRIPS")}}>TRIPS</button>
                <button onClick={() => {setPage("CONTACT")}}>CONTACT</button>
            </div>
        </div>
    )
} 

export default Header;