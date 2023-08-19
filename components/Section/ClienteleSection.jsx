import React from 'react';
import Heading from './Heading';

const ClienteleSection = ({ clients }) => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        {/* <Heading  title={} heading={'They Trusted Us with'}/>
        <h2 className="text-3xl font-semibold mb-8">Our Clientele</h2> */}

        <div className="flex gap-8 lg:gap-20 overflow-auto justify-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex w-40 flex-shrink-0 items-center justify-center"
            >
              <img
                className="w-full h-20 object-contain"
                src={client.logoUrl}
                alt={`${client.name} Logo`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClienteleSection;
