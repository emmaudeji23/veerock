'use client'

import Navigation from '../Header/Navigation';
import Footer from '../Footer/Footer';
import GlobalStateProvider from '@/context/GlobalStateProvider';
import { useDarkmode } from '@/utils/useDarkmode';
import FloatingNavbar from '../FloatingNavBar';
import QuoteModal from '../Modal/QuoteModal';
import Seo from './Seo';
import ModalCentral from '../Modal/ModalCentral';
import ReactWhatsapp from '../ReactWhatsapp';


const Layout = ({ children }) => {

  const { bgLightness, bgLightnessLoaded, themeBtn} = useDarkmode(95, 25)

  return (
    <GlobalStateProvider>
      <Seo/>
      {
        bgLightnessLoaded && <div className={`transition bg-light100 text-dark100 `}>
        <ModalCentral/>
        <ReactWhatsapp/>
        <Navigation themeBtn={themeBtn}/>
        {/* <FloatingNavbar  themeBtn={themeBtn}/> */}
          {children}
        <Footer/>
      </div>
      }
    </GlobalStateProvider>
    
  );
};

export default Layout;
