import rightArrow from "/src/assets/Group 212.png"

export default function Main(){
    return(
        <main className="grid mx-4 mb-15 2xl:grid-cols-2">
            <div className="2xl:flex 2xl:flex-col 2xl:items-start">
                <h4 className="h-22 w-72 text-header4 px-4 mx-auto mb-6 font-bold text-white 2xl:text-4xl 2xl:text-start 2xl:px-0 2xl:mx-0 2xl:py-2">
                    Get More Done with whitepace
                </h4>
                <p className="h-30 text-center text-lg text-white mb-15 2xl:text-start">
                    Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
                </p>

                <div className="mx-auto py-8 w-58 h-18 text-white bg-btn-free-trial rounded-lg mb-25 flex items-center justify-center gap-4 2xl:mb-0 2xl:mx-0">
                    <span>Try TasKey Free</span> 
                    <div className="w-[10px] h-[10px]">
                        <img className="w-full h-full" src={rightArrow} alt="arrow" />
                    </div>
                </div>
            </div>
            
            <div className="bg-image-container h-48 w-full text-white 2xl:h-full">
            
            </div>
        </main>
    )
}