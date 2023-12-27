import GetQuote from '../Buttons/GetQuote'

const CtaSection = ({heading}) => {
  return (

        <div className="section-padding text-center flex flex-col justify-center gap-6 pb-40">
            <h2 className='text-3xl font font-semibold max-w-xl mx-auto'>{heading}</h2>
            <div className="flex justify-center">
              <GetQuote/>
            </div>
        </div>
    
  )
}

export default CtaSection