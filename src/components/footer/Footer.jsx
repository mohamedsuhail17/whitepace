import { Link } from "react-router-dom"
import Button from "../button/Button"
import brandLogo from "/src/assets/footer/Group.png"
import downArrow from "/src/assets/footer/Arrow.png"
import globeIcon from "/src/assets/footer/Globe.png"
import facebookIcon from "/src/assets/footer/Facebook.png"
import linkedInIcon from "/src/assets/footer/Linkedin.png"
import twitterIcon from "/src/assets/footer/Twitter.png"



export default function Footer(){
    return (
        <section className="bg-first-page font-inter px-4 pt-35 pb-8 md:px-8 md:pt-20 md:pb-8 xl:pt-35 4xl:px-55 text-white">
            <div className="flex flex-col gap-20 mb-20 items-center md:items-start xl:flex-row xl:gap-auto 2xl:gap-25">
                <div className="logo-description flex flex-col gap-6 items-center md:items-start xl:flex-2">
                    <div className="logo flex gap-4 items-center md:items-start">
                        <img className="w-9 h-7 md:w-17 md:h-13 xl:w-9 xl:h-7" src={brandLogo} alt="Brand Logo" />
                        <h4 className="font-bold text-[clamp(1.75rem,_5vw,_3.19rem)]  
                        xl:text-[1.75rem] text-center self-center-safe">whitepace</h4>
                    </div>
                    <p className="text-[1.125rem] text-center md:text-start">
                        whitepace was created for the new ways we live and work. We make beautyfully designed around the world
                    </p>
                </div>
                <div className="info-product flex flex-col items-center md:items-start gap-4 xl:flex-1">
                    <span className="font-bold">Product</span>
                    <Link to="">Overview</Link>
                    <Link to="">Pricing</Link>
                    <Link to="">Customer Stories</Link>
                </div>
                <div className="info-resources flex flex-col items-center md:items-start gap-4 xl:flex-1">
                    <span className="font-bold">Resources</span>
                    <Link to="">Blog</Link>
                    <Link to="">Guides & tutorials</Link>
                    <Link to="">Help center</Link>
                </div>
                <div className="info-company flex flex-col items-center md:items-start gap-4 xl:flex-1">
                    <span className="font-bold">Company</span>
                    <Link to="">About Us</Link>
                    <Link to="">Careers</Link>
                    <Link to="">Media kit</Link>
                </div>
                <div className="flex flex-col gap-6 items-center md:items-start xl:flex-2">
                     
                    <h4 className="font-bold text-[clamp(1.75rem,_5vw,_3.19rem)]  
                    xl:text-[1.75rem] text-center md:text-start">
                        Try It Today
                    </h4>
                
                    <p className="text-[1.125rem] text-center md:text-start">
                        Get started for free. Add your whole team as your needs grow.
                    </p>
                    <Button className="btn-get-started">
                        Start today
                    </Button>
                </div>
            </div>
            <div className="flex flex-col items-center md:items-start md:w-full xl:relative">
                <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between md:w-full xl:w-fit">
                
                    <div className="language flex gap-[0.375rem] items-center ">
                        <img className="w-[1.1875rem] h-[1.1875rem]" src={globeIcon} alt="" />
                        <span>English</span>
                        <img className="w-5 h-[0.875rem]" src={downArrow} alt="" />

                    </div>
                    <Link to="" className="terms-privacy">
                        Terms & privacy
                    </Link>
                    <Link to="" className="security">
                        Security
                    </Link>
                    <Link to="" className="status">
                        Status
                    </Link>
                    <Link to="" className="watermark">
                        <span>&copy;</span> { new Date().getFullYear()} Whitepace LLC.
                    </Link>
                </div>
                    <div className="w-full h-[1px] bg-line my-5 xl:mt-0 xl:-order-1">

                    </div>
                    <div className="social-icon flex items-center gap-8 xl:absolute xl:right-0 xl:bottom-2">
                        <img className="w-[0.5625rem] h-[1.0425rem]" src={facebookIcon} alt="" />
                        <img className="w-[1.0625rem] h-[0.8631rem]" src={twitterIcon} alt="" />
                        <img className="w-[0.9375rem] h-[0.9375rem]" src={linkedInIcon} alt="" />
                    </div>
            </div>
        </section>
    )
}