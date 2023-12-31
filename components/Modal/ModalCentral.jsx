import { useGlobalState } from "@/context/GlobalStateContext";
import CeoLetter from "@/lib/CeoLetter";
import Policy from "@/lib/Policy";
import Terms from "@/lib/Terms";
import QuoteModal from "./QuoteModal";
import ProjectDetails from "./ProjectDetails";
import VisionMision from "@/lib/VisionAndMission";


const ModalCentral = ({ children, }) => {
  
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const {closeModal, modalType} = useGlobalState()

  return (

      <div  onClick={closeModal}  className={` ${  modalType   ? ' scale-100 ' : 'scale-0  '}  fixed transform transition-transform duration-500 inset-0  z-50 bg-black bg-opacity-50 flex items-center justify-center`}>
       
          <div onClick={stopPropagation} className="  ">
            {children ? children : 
              <>
               { modalType === 'policy' && <Policy/>}
               { modalType === 'ceo' && <CeoLetter/>}
               { modalType === 'vision' && <VisionMision/>}
               { modalType === 'terms' && <Terms/>}
               {modalType === 'quote' && <QuoteModal onClose={closeModal}/>}
              </>
            }
          </div>
      </div>
  );
};

export default ModalCentral;
