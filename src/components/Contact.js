import React, { useEffect, useState } from 'react';
import { IoMailOutline } from "react-icons/io5";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import GmailCopy from './GmailCopy';
import PhoneCopy from './PhoneCopy';

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "1deb084a-8964-4bfc-ac17-2b4ab3acb7ff");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult("Error: " + data.message);
      }
    } catch (error) {
      setResult("An unexpected error occurred.");
    }
  };

  useEffect(() => {
    if (result) {
      alert(result);
    }
  }, [result]);

  return (
    <div id='contact' className='flex-col sm:px-5 mt-10 tm:py-0 sm:py-0 sm:mt-14 tm:flex-col gap-20 sm:gap-6 tm:gap-6 sm:flex-col'>
      {/* Left Section */}
      <div className='flex flex-col px-6 lg:pl-16 w-full mb-6'>
        <h1 className='text-[#ec6e59] tracking-wider font-semibold text-lg lg:text-2xl sm:text-sm sm:w-full'>
          Contact Me
        </h1>
        <div className="flex flex-col gap-3 mt-4">
          <div className='cursor-pointer'>
            Feel Free to Contact!
            <div className="flex items-center gap-2 mt-2">
              <IoMailOutline className='text-2xl text-[#ec6e59]' />
              <GmailCopy />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className='text-[#ec6e59] text-xl' />
            <PhoneCopy />
          </div>
          <div className="flex items-center gap-2">
            <FaLocationDot className='text-[#ec6e59] text-2xl' />
            <p>Pakistan</p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className='flex justify-center w-full'>
        <form className='flex flex-col gap-4 px-6 lg:px-16 w-full' onSubmit={onSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            className='p-4 rounded bg-gray-200 dark:bg-[#3d3e4b] h-14'
            placeholder='Name'
            type="text"
            name="name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            className='p-4 rounded bg-gray-200 dark:bg-[#3d3e4b] h-14'
            placeholder='Email'
            type="email"
            name="email"
            required
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            className='p-4 resize-none rounded bg-gray-200 dark:bg-[#343541] h-48'
            placeholder='Your message'
            name="message"
            required
          />

          <button type='submit' className='px-6 py-2 bg-[#ec6e59] cursor-pointer rounded border-2 border-[#ec6e59] lg:text-sm w-24'>
            Send
          </button>
        </form>
      </div>

      {/* Footer Section */}
      <div className='flex justify-center items-center font-light text-xs sm:text-base mt-12 pb-4'>
        Copyright © 2024
        <span className='font-semibold'>&nbsp;Hamid&nbsp;</span>
        All Rights Reserved
      </div>
    </div>
  );
}

export default Contact;
