
const SimpleCard = ({icon, title, text,  }) => {
  return (
    <div className="flex gap-3 sm:flex-col sm:text-center w-full h-full sm:justify-center items-center p-6 bg-light300  duration-300">
                   
        <div className="flex text-4xl sm:justify-center ">
            <div className="p-3 grid rounded-full bg-light100 text-yellow-400">
            {icon}
            </div>
        </div>
        <div key={title} className="space-y-2">
            <h4 className="font-semibold text-xl ">{title}</h4>
            <p className="">{text}</p>
           
        </div>
    
    </div>
  )
}

export default SimpleCard