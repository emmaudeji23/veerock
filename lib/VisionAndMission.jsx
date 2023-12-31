import { useGlobalState } from '@/context/GlobalStateContext';
import React from 'react';
import { FaRegTimesCircle } from 'react-icons/fa';

const VisionMision = () => {
    const {closeModal} = useGlobalState()
    return (
     
  <div className="p-6 py-16 bg-light100 max-w-6xl overflow-auto h-screen relative">
  
   <div className="flex justify-between gap-6 w-full">
      <h1 className="text-3xl font-bold mb-4">About Our Company</h1>
      <button onClick={closeModal} className="text-xl hover:shadow-lg duration-300 "><FaRegTimesCircle /></button>
    </div>

        {/* Vision Statement */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
          <p className="text-lg">
            To be the leader in crafting dream homes with precision and innovation, setting new standards in the construction and development industry.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-lg">
            At Veerock, we are dedicated to transforming dreams into enduring structures. Our mission is to provide expert construction, maintenance, real estate development, and design services with a commitment to innovation, reliability, and client satisfaction.
          </p>
        </div>

        {/* Core Values */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Our Core Values</h3>
          <ul className="list-disc pl-8">
            <li>Integrity: Upholding honesty and transparency in all our dealings.</li>
            <li>Innovation: Embracing creativity and cutting-edge solutions to exceed client expectations.</li>
            <li>Customer-Centric: Placing our clients at the heart of every decision and service.</li>
            <li>Excellence: Striving for excellence in craftsmanship and project delivery.</li>
          </ul>
        </div>

        {/* Philosophy */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Our Philosophy</h3>
          <p className="text-lg">
            At Veerock, we believe in the transformative power of precision, innovation, and client collaboration. Our philosophy is rooted in meticulous care, sustainable practices, and a commitment to building enduring structures that stand as a testament to our expertise.
          </p>
        </div>

        {/* Our Culture */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Our Culture</h3>
          <p className="text-lg">
            Veerock's culture is characterized by a collaborative and empowering environment. We value teamwork, open communication, and a passion for turning client dreams into reality. Our team is driven by a shared commitment to excellence and a client-centric approach, fostering an atmosphere of trust, reliability, and continuous innovation.
          </p>
        </div>

        {/* Our Team */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Our Team</h3>
          <p className="text-lg">
            Our team led by the CEO, Engr. Vitalis Obi consists of dedicated professionals with expertise in construction, design, and real estate development. Each member is committed to upholding our values and delivering high-quality projects that surpass client expectations.
          </p>
        </div>
      </div>
  );
};

export default VisionMision;
