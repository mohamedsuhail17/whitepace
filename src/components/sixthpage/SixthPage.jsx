import Button from "../button/Button";
import sixthImg from "/src/assets/page6/page-6.png"
import fourXlImg from "/src/assets/page6/4xl-page-6.png"

export default function SixthPage(){

    return (
        <section className="sixth-page bg-first-page relative z-1">
            <img className="absolute -z-3 opacity-25 hidden 4xl:block 4xl:-top-44" src={fourXlImg} alt="background image for 4xl" />
            <img className="absolute -z-3 opacity-25 hidden md:block xl:hidden 2xl:block md:h-full 2xl:-top-12 2xl:h-[40vw] 2xl:w-[20vw] 2xl:-left-18 4xl:hidden" src={sixthImg} alt="background image upto 2xl" />
            <article className="px-4 pt-25 pb-35 md:px-5 md:py-35 xl:px-8 4xl:px-55">
                <div className="flex flex-col gap-15 items-start">
                    <div className="text-block text-left 2xl:text-center font-inter">
                        <h4 className="heading-1 text-white">
                            Your work, everywhere you are
                        </h4>
                        <p className="description-1 text-white">
                            Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
                        </p>
                    </div>
                    <div className="2xl:self-center">
                        <Button className="btn-get-started">
                            Try Taskey
                        </Button>
                    </div>
                </div>
                
            </article>
        </section>
    )
}