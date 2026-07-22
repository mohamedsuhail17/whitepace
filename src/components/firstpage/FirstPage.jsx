import rightArrow from "/src/assets/Group 212.png"
import bgImgFirst from "/src/assets/Element.png"
import Button from "../button/Button"

export default function FirstPage(){
    return(
        <section 
            className="first-page"
            >
            <div className="flex flex-col gap-15 xl:flex-1">
                <div className="text-container">
                    <h4 className="heading1">
                        Get More Done with whitepace
                    </h4>
                    <p className="">
                        Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
                    </p>
                </div>
                
                <Button 
                    className="btn-get-started self-center"
                >
                    Try TasKey Free
                </Button>
            </div>
            <div className="image-container-1 xl:flex-1">
                {/* <div className="image-element">

                </div> */}
            </div>
        </section>
    )
}