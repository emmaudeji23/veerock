import React from 'react'

const ModalCentral = ({ isOpen, onClose, type, children }) => {
    const stopPropagation = (e) => {
        e.stopPropagation();
      };
  return (
    <>
      {type==='central' && isOpen && (
        <div onClick={onClose}  className="fixed top-0 left-0 bottom-0 right-0 inset-0 z-50 transition-opacity bg-slate-900 bg-opacity-50 flex items-center justify-center">
          
            <div className="z-50"  onClick={stopPropagation}>
                {children}
            </div>
        </div>
      )}
    </>
  )
}

export default ModalCentral