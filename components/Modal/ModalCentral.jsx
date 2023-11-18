import { useGlobalState } from "@/context/GlobalStateContext";
import CeoLetter from "@/lib/CeoLetter";
import Policy from "@/lib/Policy";
import Terms from "@/lib/Terms";


const ModalCentral = ({ children, }) => {
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const {closeModal, modalType} = useGlobalState()

  return (

      <div  onClick={closeModal}  className={` ${  modalType   ? 'fixed scale-100 bg-opacity-50' : 'scale-0 bg-transparent-100 absolute'} transform transition-transform duration-500 inset-0  z-50 bg-black flex items-center justify-center`}>
       
          <div onClick={stopPropagation} className="  ">
            {children ? children : 
              <>
               { modalType === 'policy' && <Policy/>}
               { modalType === 'ceo' && <CeoLetter/>}
               { modalType === 'terms' && <Terms/>}
              </>
            }
          </div>
      </div>
   
  );
};

export default ModalCentral;
