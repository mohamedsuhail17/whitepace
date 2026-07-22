import Button from "../button/Button";

export default function FourthPage(){
    return (
        <section className="fourth-page">
            <article className="flex flex-col px-4 py-20 gap-15 md:px-5 md:py-35 xl:flex-row xl:px-8 4xl:px-55 xl:items-center">
                <div className="bg-image-container max-w-8/10 w-full min-h-[191px] self-center md:min-h-[367px]">

                </div>
                <div className="flex flex-col">
                    <div className="text-block text-center xl:text-start">
                        <h4 className="font-bold text-4xl mb-6 ">
                            Customise it to your needs
                        </h4>
                        <p className="leading-[1.875rem] mb-15">
                            Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
                        </p>
                    </div>
                    <Button className="btn-get-started">
                        Let's Go
                    </Button>
                </div>
            </article>
        </section>
    )
} 