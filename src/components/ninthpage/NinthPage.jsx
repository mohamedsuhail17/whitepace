import Button from "../button/Button"
import appsImg from "/src/assets/page9/Apps.png"

export default function NinthPage(){
    return (
        <section className="ninth-page">
            <div className="xl:w-[55vw] flex-1">
                <img className="w-full h-full " src={appsImg} alt="" />
            </div>
            <div className="flex flex-col gap-15 xl:items-start flex-1">
                <div className="text-block text-white text-center xl:text-start">
                    <h4 className="text-4xl font-bold mb-6">
                        Work with Your Favorite Apps Using whitepace
                    </h4>
                    <p className="leading-[1.875rem]">
                        Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
                    </p>
                </div>
                <Button className="btn-get-started self-center">
                    Read More
                </Button>
            </div>   
        </section>
    )
}