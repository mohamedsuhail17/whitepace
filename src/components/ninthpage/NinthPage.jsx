import Button from "../button/Button"
import appsImg from "/src/assets/page9/Apps.png"

export default function NinthPage(){
    return (
        <section className="ninth-page">
            <div className="flex-1">
                <img className="w-full h-full " src={appsImg} alt="" />
            </div>
            <div className="flex flex-col gap-15 xl:items-start flex-1  2xl:w-[75vw]">
                <div className="text-block text-white text-center xl:text-start">
                    <h4 className="heading-9">
                        Work with Your Favorite Apps Using whitepace
                    </h4>
                    <p className="leading-[1.875rem]">
                        Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
                    </p>
                </div>
                <Button className="btn-get-started self-center xl:self-start">
                    Read More
                </Button>
            </div>   
        </section>
    )
}