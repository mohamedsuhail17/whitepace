import Button from "../button/Button"
import blackTickIcon from "/src/assets/page5/bTickIcon.png"
import goldTickIcon from "/src/assets/page5/gTickIcon.png"
import {plans} from "../../data/plandata.js"

export default function FifthPage(){
    console.log(plans)
    return (
        <section className="fifth-page px-6 py-20">
            <div className="flex flex-col gap-15">
                <div className="plan flex flex-col items-center">
                    <h4 className="heading-9 text-center">
                        Choose Your Plan
                    </h4>
                    <p className="description-1 text-center">
                        Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.
                    </p>
                </div>

                <div className="flex flex-col xl:flex-row gap-8">
                    {
                        plans.map(
                            plan => {
                            return (
                            <section className="price-card font-inter p-5 md:px-11 md:py-10 border border-card-btn rounded-[0.625rem] flex flex-col gap-6">
                                <div className="price-board flex flex-col gap-6">
                                    <p className="heading-5 font-semibold text-[1.5rem]">
                                        {plan.name}
                                    </p>
                                    <h4 className="font-bold text-[2.25rem] ">
                                        ${plan.price}
                                    </h4>
                                    <p className="text-[1rem]">
                                        {plan.description}
                                    </p>
                                </div>
                                <div className="bullet-points flex flex-col gap-7">
                                    {plan.advantages.map(
                                        advantage => {
                                        return (
                                        <div className="flex items-center justify-start gap-5">
                                            <img src={blackTickIcon} alt="" />
                                            <p className="text-[1rem]">
                                                {advantage}
                                            </p>
                                        </div>
                                        )
                                        }
                                    )
                                    }
                                </div>
                                <div 
                                    className="border border-card-btn w-[10.375rem] h-[3.1875rem] flex justify-center items-center"
                                >
                                    Get Started
                                </div>
                            </section>
                                )
                            }
                        )
                    }      
                </div>
            </div>
        </section>
    )
}