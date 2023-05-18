
import React from 'react'
import Carousel1 from '../components/Slider1';
import { useForm } from 'react-hook-form'
import heroVid from '../assets/video4.mp4';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';



const Fundraise = () => {
  const { register, handleSubmit, watch, formState: {errors}} = useForm();
  const onSubmit = async (data) => {
      try {
        console.log(data);
        const response = await fetch('https://hashfund-server-production.up.railway.app/api/form-data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const responseData = await response.json();
        if (responseData.success) {
          alert('Form data submitted successfully');
        } else {
          alert('Failed to submit form data');
        }
      } catch (error) {
        console.error(error);
      }
    };
    const slides = [
    
      "https://o.remove.bg/downloads/2c5f2464-538c-4b67-ad94-6f017fa69457/7-removebg-preview.png",
      "https://o.remove.bg/downloads/16b9393c-69e8-42f7-b2ea-b5796aa391dc/2-removebg-preview.png",
      "https://o.remove.bg/downloads/b256c6e1-40e7-4380-848b-4d824127270c/istockphoto-1139754723-612x612-transformed-removebg-preview.png",
      "https://o.remove.bg/downloads/36fbda75-bd00-45f5-86e7-cb70c9353c83/9-removebg-preview.png",
      
  ]

  return (
    <>
    
    <div>
      
    <div>
      <Slide top>
    <div className='relative w-full h-[90vh] top-[5px]'>

<video
  className='object-cover h-[100vh] w-full'
  src={heroVid}
  autoPlay
  loop
  muted
/>

        <div class="absolute top-40 left-40 px-0 py-9">
          <h1 class="mb-3 text-xl-300 font-semibold tracking-tight text-white">Start Fundraising</h1>
         <p class="leading-normal text-gray-100">In a Few Steps !</p>
        </div>
      </div>
      </Slide>
    </div>


    
    <div style={{position:'absolute', right:'1500px'}}>
    
    <div className='w-106 m-40 text-left'>

    <div style={{position:'absolute',top:'20px',width:'800px',left:'400px'}}>
    <div>
    <Fade>
    <div className="sm:rounded-lg bg-gray-100 hover:bg-gray-300 hover:text-white-900">
    <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
    <h2 className="text-3xl font-extrabold text-gray-900 text-center">Fundraising Form</h2>
    <form
                        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <label className=" block text-gray-700 text-sm font-bold mt-3 mb-2 ">
                          First Name
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="text"
                          id="firstName"
                          placeholder="John"
                          {...register("firstName", {
                            required: true,
                            maxLength: 20,
                            pattern: /^[A-Za-z]+$/i,
                          })}
                        />
                        {errors?.firstName?.type === "required" && (
                          <p className="text-red-500">First name is required</p>
                        )}
                        {errors?.firstName?.type === "pattern" && (
                          <p className="text-red-500">
                            Alphabetical characters only
                          </p>
                        )}
                        <br></br>
                        <label className="block text-gray-700 text-sm font-bold mt-3 mb-2">
                          Middle Name
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="text"
                          id="middleName"
                          placeholder="K"
                          {...register("middleName", {
                            required: false,
                            maxLength: 0,
                            pattern: /^[A-Za-z]+$/i,
                          })}
                        />

                        <label className="block text-gray-700 text-sm font-bold mt-3 mb-2">
                          Last Name
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="text"
                          id="lastName"
                          placeholder="Doe"
                          {...register("lastName", {
                            pattern: /^[A-Za-z]+$/i,
                          })}
                        />
                        {errors?.lastName?.type === "pattern" && (
                          <p className="text-red-500">
                            Alphabetical characters only
                          </p>
                        )}

                        <label className="block text-gray-700 text-sm font-bold mt-3 mb-2">
                          Email
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="email"
                          id="email"
                          placeholder="example@gmail.com"
                          {...register("email", {
                            pattern:
                              /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          })}
                        />
                        {errors?.email?.type === "pattern" && (
                          <p className="text-red-500">
                            Please write correct email address
                          </p>
                        )}
                        <label className="block text-gray-700 text-sm font-bold mt-3 mb-2">
                          Country
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="text"
                          id="country"
                          placeholder="India"
                          {...register("country", {
                            required: true,
                            maxLength: 20,
                            pattern: /^[A-Za-z]+$/i,
                          })}
                        />
                        {errors?.firstName?.type === "required" && (
                          <p className="text-red-500">Country is required</p>
                        )}
                        {errors?.firstName?.type === "pattern" && (
                          <p className="text-red-500">
                            Alphabetical characters only
                          </p>
                        )}
                        <label className="block text-gray-700 text-sm font-bold mt-3 mb-2">
                          Phone Number
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="number"
                          id="phone"
                          placeholder="000-000-0000"
                          {...register("phone", {
                            required: true,
                            maxLength: 10,
                            pattern: /^[0-9]*$/,
                          })}
                        />
                        {errors?.firstName?.type === "required" && (
                          <p className="text-red-500">
                            Phone Number is required
                          </p>
                        )}
                        {errors?.firstName?.type === "pattern" && (
                          <p className="text-red-500">Numbers only</p>
                        )}

                        <label className="block text-gray-700 text-sm font-bold mt-3 mb-2">
                          Amount Needed
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="number"
                          id="amount"
                          placeholder=""
                          {...register("amount", {
                            required: true,
                            maxLength: 20,
                            pattern: /^[0-9]*$/,
                          })}
                        />
                        {errors?.firstName?.type === "required" && (
                          <p className="text-red-500">Amount is required</p>
                        )}
                        {errors?.firstName?.type === "pattern" && (
                          <p className="text-red-500">Numbers only</p>
                        )}
                        <label className=" block text-gray-700 text-sm font-bold mt-3 mb-2 ">
                          Title to be displayed
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="text"
                          id="title"
                          placeholder=""
                          {...register("title", {
                            required: true,
                            maxLength: 20,
                            pattern: /^[A-Za-z]+$/i,
                          })}
                        />
                        {errors?.firstName?.type === "required" && (
                          <p className="text-red-500">Title is required</p>
                        )}
                        {errors?.firstName?.type === "pattern" && (
                          <p className="text-red-500">
                            Alphabetical characters only
                          </p>
                        )}

                        <label className="block text-gray-700 text-sm font-bold mt-3 mb-2">
                          Image URL
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="imageurl"
                          placeholder="Image URL"
                          {...register("imageurl")}
                        />

                        <label className="block text-gray-700 text-sm font-bold mt-3 mb-2">
                          Expected Date Of Money
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="date"
                          id="lastName"
                          placeholder="Doe"
                          {...register("date", {
                            required: "Date is required",
                          })}
                        />

                        <label className="block text-gray-700 text-sm font-bold mt-3 mb-2">
                          Description
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="textarea"
                          id="Description"
                          placeholder="Long text"
                          {...register("Description", {
                            required: false,
                            maxLength: 100,
                            pattern: /^[A-Za-z]+$/i,
                          })}
                        />

                        <label className="block text-gray-700 text-sm font-bold mt-3 mb-2">
                          Aadhaar Card
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="textarea"
                          id="Description"
                          placeholder="Long text"
                          {...register("aadhar", {
                            required: false,
                          })}
                        />
                        <label className="block text-gray-700 text-sm font-bold mt-3 mb-2">
                          Pan Card
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="textarea"
                          id="Description"
                          placeholder="Long text"
                          {...register("pan", {
                            required: false,
                          })}
                        />

                        <label className="block text-gray-700 text-sm font-bold mt-3 mb-2">
                          Consulting Hospital Details
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="textarea"
                          id="Description"
                          placeholder="Long text"
                          {...register("hospital", {
                            required: false,
                          })}
                        />

                        <div class="container py-5 px-5 mx-0 min-w-full flex flex-col items-center">
                          <button
                            className="m-2"
                            class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group"
                          >
                            <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-blue rounded-full"></span>
                            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
                              Submit
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
   </div>
   </div></div>
  
  
   
    


    <div style={{position:'absolute', left:'900px', top:'1450px'}}>
    <div>
        <Flip left>
    <div className='max-w-lg'>
        <Carousel1 autoSlide={true} autoSlideInterval={2500}>
            {slides.map((s) => (
                <img src={s} />
            ))}
        </Carousel1>
    </div>
    </Flip>
    </div>
    </div>






    //Start Fundraiser//
    <div  style={{position:"absolute",top:"780px",width:'512px',left:'900px'}}>
    <div>
    <Slide right>
    <section className="dark:bg-gray-800 dark:text-gray-100">
  <div className="container max-w-5xl px-4 py-12 mx-auto">
    <div className="grid gap-4 mx-4 sm:grid-cols-12">
      {/* <div className="col-span-12 sm:col-span-3">
        <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-[#00d8ff]">
          <h3 className="text-3xl font-semibold">Start a Fundraiser in three simple steps</h3>
          
        </div>
      </div> */}
      <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
        <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
          <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#00d8ff]">
            <h3 className="text-xl font-semibold tracking-wide">Start Your Fundraiser </h3>
            
            <p className="mt-3">It’ll take only 2 minutes. Just tell us a few details about you and the ones you are raising funds for and upload necessary documents.</p>
          </div>
          <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#00d8ff]">
            <h3 className="text-xl font-semibold tracking-wide">Documents to be Attached</h3>
            
            <p className="mt-3">- Two Goverment ID Proof <br />- Presciption from Consulting Doctor <br />- Consulting Hospital Details <br />- Medical History of Paitent</p>
          </div>
          <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#00d8ff]">
            <h3 className="text-xl font-semibold tracking-wide">Share your Fundraiser</h3>
            
            <p className="mt-3">All you need to do is share the fundraiser with your friends and family. In no time, support will start pouring in.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</Slide>
</div>
    </div>
    //Footer//
    <hr style={{position:"absolute",top:"2190px",width:"1519px,left:'900px'"}}className="styled-line"/>
    <div  style={{position:"absolute",top:"2210px",right:'400px'}}>
   

    <section  class=" bg-grey">
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
                <a href="https://www.facebook.com/rajeev.rajeev.3323/" class="text-white hover:text-gray-500">
                    <span class="sr-only">Facebook</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                    </svg>
                </a>
                <a href="https://www.instagram.com/_.rahuul._/" class="text-white hover:text-gray-500">
                    <span class="sr-only">Instagram</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                    </svg>
                </a>
                
                <a href="https://github.com/RAHULRAJEEV-5" class="text-white hover:text-gray-500">
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
    </div>
    </>
  );
};

export default Fundraise;