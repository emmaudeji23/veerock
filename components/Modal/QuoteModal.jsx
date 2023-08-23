'use client'
import { useEffect, useState } from 'react'
import ImageContainer from '../Cards/ImageContainer'
import ModalCentral from './ModalCentral'
import { useGlobalState } from '@/context/GlobalStateContext'


const QuoteModal = ({ item, }) => {


  const {
    openModal,
    closeModal,
    isModalOpen,
    modalType,} = useGlobalState();
    
  return (
    <>
       {modalType === 'quote' && <ModalCentral isOpen={isModalOpen} onClose={closeModal}>
        <div  className="w-screen m-4 md:w-[500px] h-[90vh] bg-light200 gap-4 flex flex-col ">
            
            <button onClick={closeModal} className="flex m-4 w-8 p-3 hover-yellow">x</button>

            <div className='w-full'>
            <h3 className='text-4xl font-bold text-center w-full' >Quote</h3>

            </div>

        </div>
    </ModalCentral>}
    </>
   
  )
}

export default QuoteModal