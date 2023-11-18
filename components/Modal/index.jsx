import React from 'react'
import ModalCentral from './ModalCentral'
import Policy from '@/lib/Policy'

const Modal = () => {
  return (
    <>
    <ModalCentral type='policy'>
        <Policy/>
    </ModalCentral>
    <ModalCentral type='policy'>
        <Policy/>
    </ModalCentral>
    <ModalCentral type='policy'>
        <Policy/>
    </ModalCentral>
    
    </>
  )
}

export default Modal