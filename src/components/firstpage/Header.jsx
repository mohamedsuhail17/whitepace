import '/src/App.css'
import logo from "/src/assets/Logo.png"
import menuBtn from "/src/assets/Btn.png"
import rightArrow from "/src/assets/Group 212.png"

export default function Header(){
    return(
        <header className="flex justify-between items-center p-4 mb-10 2xl:justify-end gap-6">
            
            <div className="logo 2xl:mr-auto">
                <img src={logo} alt="comapny logo" />
            </div>

            <div className="hidden 2xl:block w-32 font-bold h-16 bg-btn-login px-10 py-4 rounded-lg ">
                <button>Login</button>
            </div>

            <div className="hidden 2xl:block  w-55 h-16 text-white bg-btn-free-trial rounded-lg items-center justify-center px-6 py-4 2xl:flex 2xl:gap-4">
                 <span>Try Whitepace Free</span> 
                 <div className="w-[10px] h-[10px]">
                     <img className="w-full h-full" src={rightArrow} alt="arrow" />
                 </div>
            </div>
           
            <div>
                <img src={menuBtn} alt="comapny logo" />
            </div>
        </header>
    )
}