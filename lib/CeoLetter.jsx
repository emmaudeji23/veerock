import { useGlobalState } from "@/context/GlobalStateContext"
import { contactlinks } from "@/data/contactlinks";
import { FaPhoneAlt, FaRegTimesCircle } from "react-icons/fa"

const CeoLetter = () => {
  const {closeModal} = useGlobalState()

    return (
      <div className="bg-gray-100 relative">

        <div className="p-6 py-16 bg-light100 max-w-6xl overflow-auto h-screen relative">

        <div className="flex justify-between gap-6 w-full">
          <h1 className="text-3xl font-bold mb-4">Our commitment to you</h1>
          <button onClick={closeModal} className="text-xl hover:shadow-lg duration-300 "><FaRegTimesCircle /></button>
        </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Your Dreams, Our Priority */}
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-4">Your Dreams, Our Priority</h3>
              <p>Your dreams and aspirations are at the core of everything we do. We are committed to turning those dreams into reality.</p>
            </div>
  
            {/* Unparalleled Craftsmanship */}
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-4">Unparalleled Craftsmanship</h3>
              <p>Our team of experts brings precision and innovation to every project, ensuring enduring structures that reflect unparalleled craftsmanship.</p>
            </div>
  
            {/* Your Property, Our Care */}
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-4">Your Property, Our Care</h3>
              <p>We treat your property as if it were our own. Meticulous care is taken in selecting services and materials to ensure quality and longevity.</p>
            </div>
  
            {/* Beyond Construction */}
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-4">Beyond Construction</h3>
              <p>We are more than just a construction company. We symbolize trust, reliability, and versatility, extending our expertise to various areas including real estate development and cutting-edge solutions.</p>
            </div>
  
            {/* Sustainable Practices and Smart Technology */}
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-4">Sustainable Practices and Smart Technology</h3>
              <p>Our commitment to sustainability and smart technology empowers us to deliver high-quality projects, reduce costs, and save time.</p>
            </div>
  
            {/* Client-Centric Approach */}
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-4">Client-Centric Approach</h3>
              <p>Your satisfaction is our top priority. Our client-centric approach ensures that your visions drive every decision we make.</p>
            </div>
  
            {/* Quality on a Budget */}
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-4">Quality on a Budget</h3>
              <p>Maintaining high standards does not mean breaking the bank. Our commitment to quality extends to cost-efficiency, ensuring your project meets the highest standards without exceeding your budget.</p>
            </div>
  
            {/* Time is of the Essence */}
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-4">Time is of the Essence</h3>
              <p>We value your time, and our streamlined processes, coupled with smart technology, enable us to deliver projects within timelines that suit your needs.</p>
            </div>
          </div>
  
          {/* In Conclusion */}
          <div className="text-center mt-8">
            <p className="text-lg">
              At Veerock Construction Copany, we are not just in the business of construction and development; we are in the business of bringing dreams to life. Discover the possibilities with us. Let's build your future together!
            </p>
          </div>
        </div>
      </div>
    );
  };

export default CeoLetter