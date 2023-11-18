import { VerticalLine } from "../Shapes/Shapes"

const Heading = ({title, white, type, heading, styled}) => {
  return (
    <div className={`border-l-8 border-yellow pl-6`}>
        
        <div className={`space-y-1 col-span-9 ${white && "text-white"} `}>
            <h6 className="text-xl font-semibold text-light300">{title}</h6>
            <h3 className="capitalize text-4xl font-semibold">
            {heading} <span className="text-yellow-500">{styled}</span>
            </h3>
        </div>
    </div>
  )
}

export default Heading

export const SectionHeading = ({title, styled, heading, white}) => (
  <div className={`space-y- w-full text-center ${white && "text-white"}`}>
    <h5 className="text-xl fornt-semibold">{title}</h5>
    <h5 className="text-4xl font-semibold">
      {heading} <span className="text-yellow-500">{` ${styled}`}</span>
    </h5>
  </div>
)