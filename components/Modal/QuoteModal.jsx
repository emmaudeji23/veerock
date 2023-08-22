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

    // const [show, setShow] = useState(item?.imageUrl[0])
    // useEffect(() => {
    //   setShow(item?.imageUrl[0])
    
    // }, [item])
    
  return (
    <ModalCentral isOpen={isModalOpen} onClose={closeModal}>
        <div className=" mx-auto h-[90vh] bg-light200 max-w-[400px]  gap-4 flex flex-col ">
            <div className='w-full'>
            <div onClick={closeModal} className="flex w-8 p-3 hover-yellow">x</div>

            </div>
            <h3 className='text-4xl font-bold text-center w-full' >Quote</h3>
           
        </div>
    </ModalCentral>
  )
}

export default QuoteModal