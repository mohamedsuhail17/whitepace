import appleImg from "/src/assets/page8/Apple.png"
import microsoftImg from "/src/assets/page8/Microsoft.png"
import slackImg from "/src/assets/page8/Slack.png"
import googleImg from "/src/assets/page8/Google.png"

export default function EighthPage(){
    return (
     <section className="eighth-page">
        <div className="flex flex-col gap-15 px-4 py-25 md:px-5 md:py-35 xl:px-8 4xl:px-55">
            <h4 className="text-4xl font-bold text-center">Our sponsors</h4>
            <div className="sponsors-container">
                <img className="w-14 h-17" src={appleImg} alt="Apple Logo" />
                <img className="w-72 h-16" src={microsoftImg} alt="Microsoft Logo" />
                <img className="w-70 h-18" src={slackImg} alt="Slack Logo" />
                <img className="w-53 h-18" src={googleImg} alt="Google Logo" />
            </div>
        </div>
     </section>   
    )
}