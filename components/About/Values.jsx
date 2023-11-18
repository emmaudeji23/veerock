'use client'

import CredibilityBlocks from '../Section/CredibilityBlocks'
import Heading from '../Section/Heading'
import { FaPlus } from 'react-icons/fa'
import { useGlobalState } from '@/context/GlobalStateContext'

const Values = ({content}) => {
    const {openModal, closeModal,} = useGlobalState()
  return (
    <section className='grid md:grid-cols-2 gap-14 md:gap-6 lg:gap-24'>

        <div className="space-y-10">
            <Heading type={'flex'} white={false} title={content?.heading} heading={content?.title} styled={content?.styled}/>

            <p className="text-lg">{content?.description}</p>

            <div className="space-y-6">
                <button onClick={()=>openModal('policy')} className='w-full p-4 border border-zinc-500 flex justify-between items-center'>
                    <p>View Our Company Policy</p>
                    <FaPlus/>
                </button>
                <button onClick={()=>openModal('terms')}  className='w-full p-4 border border-zinc-500 flex justify-between items-center'>
                    <p>Our Promise To You.</p>
                    <FaPlus/>
                </button>
                <button onClick={()=>openModal('ceo')}  className='w-full p-4 border border-zinc-500 flex justify-between items-center'>
                    <p>Our Promise To You.</p>
                    <FaPlus/>
                </button>
            </div>
        </div>

        <CredibilityBlocks content={content?.values}/>
       
        
    </section>
  )
}

export default Values