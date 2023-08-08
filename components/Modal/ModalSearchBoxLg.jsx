import SkeletonLoader from "../Loader/SkeletonLoader";
import SearchBar from "../Header/SearchBar";

const ModalSearchBoxLg = ({ isOpen, onClose, modalType, children }) => {
    const stopPropagation = (e) => {
        e.stopPropagation();
      };
  return (
    <>
      {modalType==='searchboxLg' && isOpen && (
        <div onClick={onClose}  className=" animate-slow-appear fixed top-20 transition-all duration-500 left-0 bottom-0 right-0 z-10 py-8  bg-zinc-100 px-96">
                <div  onClick={stopPropagation} className="space-y-8 ">
                    <SkeletonLoader/>
                </div>
        </div>
      )}
    </>
  )
}

export default ModalSearchBoxLg