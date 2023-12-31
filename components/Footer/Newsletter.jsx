'use client'

import React, { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log('email', email);
      setEmail("")
    } catch (error) {
      console.error('Error handling email:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <h3 className="text-3xl pb-2 font-semibold">Join our mailing list</h3>
      <p className="pb-4">Get instant updates about our property listings and promotions</p>
      <div className="max-w-96 mx-auto flex gap-0 items-center overflow-hidden rounded shadow">
        <input
          type="email"
          name="email"
          id="email"
          value={email || ""}
          placeholder="email@email.com"
          required
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-transparent p-3 border border-light100"
        />
        <button type="submit" className="bg-blue-600 text-white text-2xl p-3">
          <FaTelegramPlane />
        </button>
      </div>
    </form>
  );
};

export default Newsletter;
