import Button from "../button/Button";
import androidLogo from "/page11/android-logo-1.png"
import iosLogo from "/page11/ios-logo-1.png"
import windowsLogo from "/page11/windows-logo-1.png"


export default function EleventhPage(){


    return (
        <section className="bg-first-page px-4 pt-25 pb-8">
            <div className="flex flex-col gap-10 xl:items-center">
                <div className="font-inter text-white text-start">
                    <h4 className="heading-1">
                        Try Whitepace today
                    </h4>
                    <p className="description-1">
                        Get started for free. Add your whole team as your needs grow.
                    </p>
                </div>
                <Button className="btn-get-started xl:self-center">
                    Try Taskey free
                </Button>
                <p className="text-white">
                    On a big team? <span>Contact sales</span>
                </p>
                <div className="flex gap-10">
                    <img className="w-9 h-9 md:w-15 md:h-15" src={iosLogo} alt="IOS Logo" />
                    <img className="w-9 h-9 md:w-15 md:h-15" src={windowsLogo} alt="Windows Logo" />
                    <img className="w-9 h-9 md:w-15 md:h-15" src={androidLogo} alt="Android Logo" />
                </div>
            </div>
            
        </section>
    )
}