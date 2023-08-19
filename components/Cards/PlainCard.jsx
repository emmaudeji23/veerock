import Link from "next/link"


export const PlainCard = ({icon, link, heading, details}) => (
    <div className="flex px-4 justify-center items-center h-80  text-center  text-white bg-blue-900 hover:shadow-2xl duration-300">
        <div className="space-y-6">
            <div className="flex text-[40px] justify-center text-yellow-500">
                {icon}
            </div>
            <div className="space-y-3">
                <h4 className="font-semibold text-3xl">{heading}</h4>
                <p>{details}</p>
                <Link href={link} className="text-yellow-500 font-semibold text-lg">{'Learn More'}</Link>
            </div>
        </div>
    </div>
)
