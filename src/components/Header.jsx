import '/src/App.css'
import logo from "/src/assets/Logo.png"
import menuBtn from "/src/assets/Btn.png"
import rightArrow from "/src/assets/Group 212.png"

export default function Header(){
    return(
        <header className="flex bg-first-page justify-between items-center p-4 md:p-6 xl:p-8 xl:justify-end gap-6 4xl:px-52">
            
            <div className="logo xl:mr-auto">
                <img src={logo} alt="comapny logo" />
            </div>
            <div className="hidden 2xl:block text-white 2xl:flex 2xl:gap-15 mr-10">
                <select name="" id="">
                    <option value="product" default>Product</option>
                    <option value=""></option>
                </select>
                <select name="" id="">
                    <option value="solution" default>Solution</option>
                    <option value=""></option>
                </select>
                <select name="" id="">
                    <option value="resources" default>Resources</option>
                    <option value=""></option>
                </select>
                <select name="" id="">
                    <option value="pricing" default>Pricing</option>
                    <option value=""></option>
                </select>
            </div>

            <div className="hidden xl:block w-32 font-bold h-16 bg-btn-login px-10 py-4 rounded-lg ">
                <button>Login</button>
            </div>

            <div className="hidden xl:block  w-55 h-16 text-white bg-btn-free-trial rounded-lg items-center justify-center px-6 py-4 xl:flex xl:gap-4">
                 <span>Try Whitepace Free</span> 
                 <div className="w-[10px] h-[10px]">
                     <img className="w-full h-full" src={rightArrow} alt="arrow" />
                 </div>
            </div>
           
            <div className="2xl:hidden">
                <img src={menuBtn} alt="comapny logo" />
            </div>
        </header>
    )
}