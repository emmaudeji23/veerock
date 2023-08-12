
const SimpleCard = ({icon, title, text,  }) => {
  return (
    <div className="flex sm:grid sm:text-center w-full sm:justify-center sm:items-center gap-3 p-6 shadow-md">
                   
        <div className="flex text-4xl sm:justify-center ">
            <div className="p-3 grid rounded-full bg-light200 text-yellow-600">
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