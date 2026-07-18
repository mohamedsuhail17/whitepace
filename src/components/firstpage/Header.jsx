import '/src/App.css'
import logo from "/src/assets/Logo.png"
import menuBtn from "/src/assets/Btn.png"
export default function Header(){
    return(
        <header className="flex bg-bg-header justify-between p-4">
            <div className="logo">
                <img src={logo} alt="comapny logo" />
            </div>
            <div>
                <h1>whitpace</h1>
            </div>
           
            <div>
                <img src={menuBtn} alt="comapny logo" />
            </div>
        </header>
    )
}