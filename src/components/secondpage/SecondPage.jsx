import Button from "../button/Button";
import workTogetherImage from "/src/assets/content2/Work-Together-Image.png"
import dashImg from "/src/assets/vector.png"
import fingerPrintBg from "/src/assets/Fingerprint.png"

export default function SecondPage(){
    return (
        <section className="work-management relative">
            <img className="absolute top-[10vw] md:top-[10vw] transform rotate-0 md:rotate-30" src={fingerPrintBg} alt="" />
            <article className="flex flex-col gap-15 mb-[100px] xl:flex-row xl:justify-between xl:items-center xl:gap-8">
                <div className="content1 flex-1">

                    <div className="get-started">
                        <div className="text-block">
                            <span className="relative w-[15.875rem] h-[2.541rem] z-1">
                                <h4 className="heading-1">
                                    Project Management
                                </h4>
                                
                                    <img className="absolute w-full bottom-[1px] left-[1px] -z-1" src={dashImg} alt="" />
                                
                            </span>
                            
                            <p className="leading-[1.875rem] mb-15">
                                Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
                            </p>
                        </div>
                        <Button
                            className="btn-get-started self-center xl:self-start"
                        >
                            Get Started
                        </Button>
                    </div>
                </div>
                <div className="bg-image-container max-w-8/10 w-full min-h-[191px] self-center md:min-h-[367px] flex-1">

                </div>
            </article>
            <article className="flex flex-col gap-15 xl:flex-row-reverse xl:justify-between xl:items-center xl:gap-8">
                <div className="content2 flex-1">

                    <div className="get-started">
                        <div className="text-block">
                            <h4 className="text-4xl font-bold font-inter mb-6">Work together</h4>
                            <p className="leading-[1.875rem] mb-15">
                                With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
                            </p>
                        </div>
                        <Button
                            className="btn-get-started self-center xl:self-start"
                        >
                            Try it now
                        </Button>
                    </div>
                </div>
                <div className=" self-center flex justify-center items-center overflow-hidden flex-1 object-cover ">
                    <img src={workTogetherImage} className="w-full h-full object-contain" alt="icon in center with two circles" />
                </div>
            </article>
        </section>
    )
}