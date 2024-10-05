import Link from "next/link"
import { Button } from "../ui/button"

export default function Pricing() {
    const pricingMap = [
        {
            name: "Basic",
            description: "Get started with app",
            price: "10",
            items:[ "3 blog posts", "3 transcription"
            ]
        },
        {
            name: "Pro",
            description: "All Blog Posts, let's gp!",
            price: "19.99",
            items:[ "Unlimited Blog Posts", "Unlimited transcription"
            ]
        }
    ]
    return (
        <section id="pricing" className="py-24 relative overflow-hidden">
            <div className="flex items-center justify-center w-full pb-6">
                <h2 className="font-bold text-xl-uppercase mb-8 text-purple-600">Pricing</h2>
            </div>
            <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
                {pricingMap.map((item, index) =>  <div className="relative w-full max-w-lg">
                    <div className="relative h-full gap-4 lg:gap-8 z-10 rounded-box border-[1px] border-gray-500/20 rounded-2xl">
                        <div className="flex justify-between items-center gap-4">
                            <p className="text-lg lg:text-xl font-bold capitalize">
                                Basic
                            </p>
                            <p className="text-base-content/80 mt-2">Desc</p>
                        </div>
                        <div className="flex gap-2">
                            <p className="text-5xl tracking-tight font=extrabold">$10</p>
                            <div className="flex flex-col justify-end mb-[4px]">
                                <p className="text-xs text-base-content/60 uppercase font-semibold">$USD</p>
                                <p className="text-xs text-base-content/60 uppercase font-semibold">month</p>
                            </div>
                            <ul className="space-y-2.5 loading-relaxed text-base flex-1">
                                <li>Test1</li>
                            </ul>
                            <div className="space-y-2">
                                <Button variant={'link'} className="border-2 rounded-full flex gap-2 bg-black text-gray-100">
                                    <Link href="/" className="flex gap-1 items-center">Get SpeakEasy</Link>
                                </Button>

                            </div>
                        </div>
                    </div>
                </div>)
                }
            </div>
        </section>
    )
}