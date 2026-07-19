import rightArrow from "/src/assets/Group 212.png"

export default function Main(){
    return(
        <main className="grid mx-4 md:mx-6 xl:mx-8 mb-15 xl:grid-cols-2 xl:mt-30 4xl:mx-52">
            <div className="xl:flex xl:flex-col xl:items-start xl:gap-11 2xl:py-10 4xl:mb-">
                <h4 className="h-22 w-72 text-header4 px-4 mx-auto mb-6 font-bold text-white xl:text-6xl xl:text-start xl:px-0 xl:mx-0 xl:py-2 xl:w-fit xl:mb-8">
                    Get More Done with whitepace
                </h4>
                <p className="h-30 text-center text-lg text-white mb-15 xl:mb-0 xl:text-start">
                    Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
                </p>
                <div className="mx-auto py-8 w-58 h-15 text-white bg-btn-free-trial rounded-lg mb-25 flex items-center justify-center gap-4 xl:mb-0 xl:mx-0">
                    <span>Try TasKey Free</span> 
                    <div className="w-[10px] h-[10px]">
                        <img className="w-full h-full" src={rightArrow} alt="arrow" />
                    </div>
                </div>
            </div>
            <div className="bg-image-container h-50 max-w-7/10 w-full mx-auto text-white xl:h-full xl:max-w-full">
            </div>
        </main>
    )
}