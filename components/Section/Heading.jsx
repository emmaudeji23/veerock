import { VerticalLine } from "../Shapes/Shapes"

const Heading = ({title, white, type, heading, styled}) => {
  return (
    <div className={type ? `flex gap-6` : 'grid grid-cols-10  gap-1'}>
        <div className={`${type ? 'h-16'  : 'colspan-1'}  bg-yellow-400 w-4 `}>
        

        </div>
        <div className={`space-y-1 col-span-9 ${white && "text-white"} `}>
            <h6 className="text-xl font-semibold text-light300">{title}</h6>
            <h3 className="text-4xl font-semibold">
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