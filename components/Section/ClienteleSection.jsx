import React from 'react';

const ClienteleSection = ({ clients }) => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-8">Our Clientele</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded shadow-md"
            >
              {/* <img
                className="w-20 h-20 object-contain"
                src={client.logoUrl}
                alt={`${client.name} Logo`}
              /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClienteleSection;
