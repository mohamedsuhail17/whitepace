import Button from "../button/Button"

export default function ThirdPage(){

    return (
        <section className="third-page">
            <article className="flex flex-col xl:flex-row xl:justify-content xl:items-center">
                <div className="heading3 flex-1">
                    <div className="text-block2">
                        <h4 className="text-4xl font-bold font-inter mb-6">
                            Use as Extension
                        </h4>
                        <p className="leading-[1.875rem] mb-15">
                            Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
                        </p>
                    </div>
                    <Button 
                        className="btn-get-started self-center"
                        >
                        Let's Go
                    </Button>
                </div>
                <div className="illustration flex-1">

                </div>
                
            </article>
        </section>
    )
}