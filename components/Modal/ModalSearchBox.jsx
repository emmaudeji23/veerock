import SkeletonLoader from "../Loader/SkeletonLoader";
import SearchBar from "../Header/SearchBar";

const ModalSearchBox = ({ isOpen, onClose, modalType, children }) => {
    const stopPropagation = (e) => {
        e.stopPropagation();
      };
      
  return (
    <>
      {modalType==='searchboxSm' && isOpen && (
        <div onClick={onClose}  className=" animate-slow-appear  fixed top-0 transition-all duration-500 left-0 bottom-0 right-0 z-10 ">
          
            <div className="z-50 mt-20 bg-zinc-100 h-full" >
                <div  onClick={stopPropagation} className="space-y-8 px-4 py-8 ">
                    <SearchBar/>
                    <SkeletonLoader/>
                </div>
            </div>
        </div>
      )}
    </>
  )
}

export default ModalSearchBox