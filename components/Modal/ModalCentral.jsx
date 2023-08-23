

const ModalCentral = ({ isOpen, onClose, children }) => {
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
      <>
        { isOpen && <div  onClick={onClose}  className={`fixed inset-0 flex items-center justify-center z-50 '}`}>
            <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
              <div onClick={stopPropagation} className=" flex items-center justify-center shadow-lg animate-slow-appear z-10">
                {children}
              </div>
          </div>}

      </>
   
  );
};

export default ModalCentral;
