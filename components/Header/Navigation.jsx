import Image from 'next/image';
import Link from 'next/link'
import { FiBell, FiSearch, FiShoppingCart, FiUser, FiX } from 'react-icons/fi';
import DesktopNav from './DesktopNav';
import SearchBar from './SearchBar';
import MobileNav from './MobileNav';
import { useGlobalState } from '@/context/GlobalStateContext';
import ModalSearchBox from '../Modal/ModalSearchBox';
import ModalSearchBoxLg from '../Modal/ModalSearchBoxLg';




const Navigation = ({themeBtn}) => {
  const{isModalOpen, closeModal, openModal, modalType} = useGlobalState()
  return (
    <>
     <nav className="section-padding py-4 ">
        <div className="flex w-full items-center justify-between space-x-4">

            <div className=" flex space-x-3  flex-shrink-0 selection:items-center">
              <div className=''> 
                <Image
                    width={90} height={45}
                    src="/logo.png"
                    alt="Logo"
                  />
                </div>
                <h4 className='font-medium text-xl pt-5'>
                Vendor
              </h4>
        
            </div>

            <div className='w-full hidden sm:block'>
              <SearchBar onFocus={()=>openModal('searchboxLg')}/>
              <ModalSearchBoxLg isOpen={isModalOpen} onClose={closeModal} modalType={modalType}></ModalSearchBoxLg>
            </div>
            
           
            <div className=" justify-end">
              <ul className="flex justify-end items-center space-x-4 text-2xl">
              
                <li className="sm:hidden">
                  {!isModalOpen ? <FiSearch width={20} onClick={()=>openModal('searchboxSm')}/> : 
                  <FiX width={20} onClick={closeModal}/> }
                </li>
                <ModalSearchBox isOpen={isModalOpen} onClose={closeModal} modalType={modalType}></ModalSearchBox>

                {themeBtn}
                <li>
                  <FiShoppingCart/>
                </li>
                <li>
                  <FiBell/>
                </li>
                <li>
                  <FiUser/>
                </li>                
              </ul>
            </div>
        </div>
        
    </nav>
    <div className="hidden md:block text-black">
      <DesktopNav/>
    </div>
    <div className="block md:hidden text-black">
      <MobileNav/>
    </div>
    
    </>
   
  );
};

export default Navigation;
