import Button from "../button/Button";

export default function SixthPage(){

    return (
        <section className="sixth-page bg-first-page">
            <article className="px-4 pt-25 pb-35 md:px-5 md:py-35 xl:px-8 4xl:px-55">
                <div className="flex flex-col gap-15 items-start">
                    <div className="text-block text-left 2xl:text-center">
                        <h4 className="text-4xl font-bold font-inter text-white mb-6">
                            Your work, everywhere you are
                        </h4>
                        <p className="leading[1.875rem] text-white">
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