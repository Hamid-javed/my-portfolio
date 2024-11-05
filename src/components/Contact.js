// import React, { useEffect, useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
// import GmailCopy from './GmailCopy';
// import { IoMailOutline } from "react-icons/io5";
// import { FaPhone } from "react-icons/fa6";
// import { FaLocationDot } from "react-icons/fa6";
// import PhoneCopy from './PhoneCopy';

// function Contact() {
//   const form = useRef();
//   const [result, setResult] = React.useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     //   setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "1deb084a-8964-4bfc-ac17-2b4ab3acb7ff");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//   };

//   useEffect(() => {
//     if (result) {
//       alert(result);
//     }
//   }, [result]);

//   return (
//     <div id='contact' className='flex sm:px-[1.25rem] mt-10 tm:py-0 sm:py-0 sm:mt-14 tm:flex-col gap-[80px] sm:gap-[20px] tm:gap-[20px] sm:flex-col'>
//       <div className='flex flex-col pl-[5rem] w-[36rem] tm:pt-4 lg:pt-4 sm:pt-0 tm:w-full sm:w-full tm:mb-[20px] sm:mb-[20px]'>
//         <h1 className='text-[#ec6e59] tracking-wider font-[600] text-[1.4rem] lg:text-[2rem] md:text-[2rem] tm:text-[2.5rem] sm:text-[1rem] sm:w-[100%]'>
//           Contact Me
//         </h1>
//         <div className="flex flex-col gap-3 justify-start">
//           <p className=' cursor-pointer'>Feel Free to Contact!
//             <div className="flex items-center gap-2 mt-2">
//               <IoMailOutline className='text-2xl text-[#ec6e59]' />
//               <GmailCopy />
//             </div>
//           </p>
//           <div className="flex items-center gap-2">
//             <FaPhone className='text-[#ec6e59] text-[20px]' />
//             <PhoneCopy />
//           </div>
//           <div className="flex items-center gap-2">
//             <FaLocationDot className='text-[#ec6e59] text-2xl' />
//             <p>Pakistan</p>
//           </div>
//         </div>
//       </div>
//       <div className='flex justify-center'>

//         <form className='flex flex-col gap-4 tm:w-full sm:w-full lg:w-[88%] ' ref={form} onSubmit={onSubmit}>
//           <label>Name</label>
//           <input className='p-4 rounded-[4px] bg-[#e4e1e1fa] dark:bg-[#3d3e4b] h-[58px]'
//             placeholder='Name'
//             type="text"
//             name="name"
//             required />

//           <label>Email</label>
//           <input className='p-4 rounded-[4px]  bg-[#e4e1e1fa] dark:bg-[#3d3e4b] h-[58px]'
//             placeholder='Email'
//             type="email"
//             name="email"
//             required />

//           <label>Your Message</label>
//           <textarea
//             className='p-4 resize-none rounded-[4px] input bg-[#e4e1e1fa] dark:bg-[#343541] h-[198px] '
//             placeholder='Your message'
//             type='text'
//             name="message"
//             required />

//           <div className='flex justify-start mt-5 mb-8'>
//             <button type='submit'
//               className='px-[1.6em] py-[.8em] bg-[#ec6e59] coursor-pointer rounded-[4px] flex justify-start items-center gap-1 border-[#ec6e59] border-2 lg:text-[.8rem] sm:text-[.8rem]'>Send</button>
//           </div>
//         </form>
//       </div>

//       <div className='flex justify-center items-center font-[350] text-[0.6rem] leading-loose sm:text-[1rem]  tm:text-[1rem]'> Copyright © 2024
//         <span className='font-[500]'>&nbsp;Hamid&nbsp; </span>

//         All Rights Reserved

//       </div>

//     </div>
//   );
// }

// export default Contact;

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
