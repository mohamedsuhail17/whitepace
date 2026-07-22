import Button from "../button/Button";
import workTogetherImage from "/src/assets/content2/Work-Together-Image.png"

export default function SecondPage(){
    return (
        <section className="work-management">
            <article className="flex flex-col mb-[100px] xl:flex-row xl:justify-between xl:items-center xl:gap-8">
                <div className="content1">

                    <div className="get-started">
                        <div className="text-block">
                            <h4 className="text-4xl font-bold font-inter mb-6">Project Management</h4>
                            <p className="leading-[1.875rem] mb-15">
                                Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
                            </p>
                        </div>
                        <Button
                            className="btn-get-started self-center"
                        >
                            Get Started
                        </Button>
                    </div>
                </div>
                <div className="bg-image-container max-w-8/10 w-full min-h-[191px] self-center md:min-h-[367px]">

                </div>
            </article>
            <article className="flex flex-col xl:flex-row-reverse xl:justify-between xl:items-center xl:gap-8">
                <div className="content2">

                    <div className="get-started">
                        <div className="text-block">
                            <h4 className="text-4xl font-bold font-inter mb-6">Work together</h4>
                            <p className="leading-[1.875rem] mb-15">
                                With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
                            </p>
                        </div>
                        <Button
                            className="btn-get-started self-center"
                        >
                            Try it now
                        </Button>
                    </div>
                </div>
                <div className={`bg-[url('${workTogetherImage}')] bg-image-container max-w-8/10 w-full min-h-[191px] self-center md:min-h-[367px]`}>

                </div>
            </article>
        </section>
    )
}