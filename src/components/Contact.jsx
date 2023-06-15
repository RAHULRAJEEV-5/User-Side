import React from 'react'
import Fade from 'react-reveal/Fade'
import heroVid from '../assets/video3.mp4';
import Slide from 'react-reveal/Slide';
import Logo from '../assets/logo.png';
import { useState } from "react";

const Contact = () => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  console.log(name,phone,email,message);

  const handleSubmit = async () => {
    const response = await fetch('https://hashfund-server-production.up.railway.app/api/ContactUS', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name,email,phone,message})
    });
    const jsonData = await response.json();
    console.log(jsonData);
  };
  return (
    <>
    <div>

<div>
  <Fade>

    <div>
    <Slide top>
      {/* <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full"> */}
      <div className='relative w-full h-[90vh] top-[5px]'>

      <video
        className='object-cover h-[100vh] w-full'
        src={heroVid}
        autoPlay
        loop
        muted
      />
        

        <div class="absolute top-40 left-40 px-0 py-9">
          <h1 class="mb-3 text-xl-300 font-semibold tracking-tight text-white">Contact Us</h1>
         <p class="leading-normal text-gray-100">We'd Love to Hear from You !</p>
        </div>
      </div>
      </Slide>
    </div>
 <div  style={{position:"absolute",top:"745px"}}><iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.462339824404!2d76.72390611477736!3d9.726846693038745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07cc024cb7c83f%3A0xc8944aaebb3ba492!2sSt.%20Joseph&#39;s%20College%20of%20Engineering%20and%20Technology%2C%20Palai!5e0!3m2!1sen!2sin!4v1677567137359!5m2!1sen!2sin"
   height="450" style={{border:"0px",width:"1460px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>  
    
    <div className='absolute bg-white'>
    <div style={{position:'absolute',top:'500px',width:'750px',left:'80px'}}>
      <div>
        <Fade top>
    <div className="sm:rounded-lg bg-gray-100 hover:bg-gray-300 hover:text-white-900">
      <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
            <h2 className="text-2xl font-extrabold text-gray-900">GET IN TOUCH</h2>
            <form className="mt-8 space-y-6">
                    <div>
                      <label htmlFor="name" className="sr-only">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        y
                        required
                        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Name"
                        value={name}
                        onChange={(event) => {
                          setName(event.target.value);
                        }}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="sr-only">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Email"
                        value={email}
                        onChange={(event) => {
                          setEmail(event.target.value);
                        }}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="sr-only">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="text"
                        autoComplete="tel"
                        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Phone"
                        value={phone}
                        onChange={(event) => {
                          setPhone(event.target.value);
                        }}
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="sr-only">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        required
                        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Message"
                        value={message}
                        onChange={(event) => {
                          setMessage(event.target.value);
                        }}
                      ></textarea>
                    </div>
                    <div>
                      <button
                      onClick={handleSubmit}
                      type="button"
                        className="m-2"
                        class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group"
                      >
                        <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                        <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                          Message
                        </span>
                      </button>
                    </div>
                  </form>
                  
          </div>
          
        </div>
        
      </div>

      
    </div>
    
    </Fade>
    
    </div>
    <div
          style={{
            position: "absolute",
            top: "8px",
            width: "500px",
            left: "800px",
          }}>
          <div className="group sm:rounded-lg bg-gray-100 hover:bg-gray-300 hover:text-white-900">
            <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
              <div className="bg-white hover:bg-sky-500 overflow-hidden shadow-sm sm:rounded-lg">
                <div className="group p-6 bg-white  border-b border-gray-200">
                  <h2 className=" text-2xl font-extrabold text-gray-900">
                    HEADQUATERS
                  </h2>
                  <form className=" mt-8 space-y-6">
                    <div>
                      <div
                        class="col-md-4 align-l"
                        data-ckav-sm="align-c mr-t-30"
                        data-animate-in="fadeInRight"
                      >
                        <p className=" mr-b-40 fs16">
                          St.Josephs College of Engineering & Technology, <br />{" "}
                          Choondacheery (P.O), Palai, <br /> India.
                        </p>
                        <br />
                        <p class="mr-0 fs16">
                          <strong class=" f-1 bold-4 ltr-2 txt-dark">
                            Phone:{" "}
                          </strong>
                          +1234567890
                        </p>
                        <p class="mr-0 fs16">
                          <strong class=" f-1 bold-4 ltr-2 txt-dark">
                            FAX:{" "}
                          </strong>
                          +0986754321
                        </p>
                        <p class="mr-0 fs16">
                          <strong class=" f-1 bold-4 ltr-2 txt-dark">
                            Email:{" "}
                          </strong>
                          hashfunds@gmail.com
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
    
    </div>
    
    </div>
    </div>
    




<hr style={{position:"absolute",top:"1900px",width:"1519px"}}className="styled-line"/>
<div  style={{position:"absolute",top:"1930px",right:'400px'}}>
<section class=" bg-grey">
        <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
            <nav class="flex flex-wrap justify-center -mx-5 -my-2">
                <div class="px-5 py-2">
                    <a href="/" class="text-base leading-6 text-white hover:text-gray-900">
                        Home
                    </a>
                </div>
                <div class="px-5 py-2">
                    <a href="/AboutPage" class="text-base leading-6 text-white hover:text-gray-900">
                        About
                    </a>
                </div>
                <div class="px-5 py-2">
                    <a href="/Causes" class="text-base leading-6 text-white hover:text-gray-900">
                        Causes
                    </a>
                </div>
                <div class="px-5 py-2">
                    <a href="/Contact" class="text-base leading-6 text-white hover:text-gray-900">
                        Contact
                    </a>
                </div>
                <div class="px-5 py-2">
                    <a href="#" class="text-base leading-6 text-white hover:text-gray-900">
                        Terms
                    </a>
                </div>
                
            </nav>
            <div class="flex justify-center mt-8 space-x-6">
                <a href="https://www.facebook.com/vishnuprasad.es.9" class="text-white hover:text-gray-500">
                    <span class="sr-only">Facebook</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                    </svg>
                </a>
                <a href="https://www.instagram.com/vishnu_prasad_e_s/" class="text-white hover:text-gray-500">
                    <span class="sr-only">Instagram</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                    </svg>
                </a>
                
                <a href="https://github.com/esvish1" class="text-white hover:text-gray-500">
                    <span class="sr-only">GitHub</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                    </svg>
                </a>
                
            </div>
            <p class="mt-8 text-base leading-6 text-center text-gray-400">
                © 2023 Hashfunds, Inc. All rights reserved.
            </p>
        </div>
    </section>

    </div>


</Fade>
 </div>  
 </div> 
 </>
    

  );
};

export default Contact;