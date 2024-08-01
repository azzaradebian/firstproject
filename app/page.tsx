"use client";
import Image from "next/image";
import'../styles/custom.css'
import zara from "../public/zara-transformed-removebg.png"
import port1 from "../public/portfolio1.png"
import port2 from "../public/portfolio2.png"
import React from "react";
import html from "../public/html5.svg"
import css from "../public/css3.svg"
import cpp from "../public/cplusplus (1).svg"
import javascript from "../public/javascript.svg"
import {useState, useEffect} from "react"

export default function Home() {
  const [isClick, setisClick] = useState(false);
  const toggleNavbar = () => {
    setisClick(!isClick);
  }

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10); 
    };

    window.addEventListener('scroll', handleScroll);
    
   
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

  <main className="">
    {/* header start */}
    <header className={`fixed top-0 left-0 right-0 bg-white flex justify-center gadget:justify-center transition-shadow text-lg duration-300 ${scrolling ? 'shadow-md' : 'shadow-none'} z-10 p-4`}>
        <div className="container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 relative">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-primary font-bold">
                AzzahraLatifa
                </a>
              </div>
            </div>
            {/* right */}
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-8">
                <a href="#home" className="text-primary font-semibold hover:text-opacity-70">Home</a>
                <a href="#about" className="text-primary font-semibold hover:text-opacity-70">About</a>
                <a href="#portfolio" className="text-primary font-semibold hover:text-opacity-70">School Project</a>
                <a href="#skillpage" className="text-primary font-semibold hover:text-opacity-70">My Skill</a>
                <a href="#contact" className="text-primary font-semibold hover:text-opacity-70">Help</a>
              </div>
            </div>
            {/* humburgeer */}
            <div className="md:hidden flex items-center">
              <button className="absolute inline-flex items-center justify-center p-2 rounded-sm text-primary
              md:text-primary hover:outline-none hover:ring-2 hover:ring-inset hover:ring-primary"
              onClick={toggleNavbar}>
                  {isClick ? (
                    <svg  className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor" >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  ) : (
                    <svg  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"/>
                  </svg>
                  )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden py">
            <div className="px-2 py-30 pt-2 space-y-3 sm:px-3">
                <a href="#home" className="text-primary font-semibold hover:text-opacity-70">Home</a>
                <a href="#about" className="text-primary block font-semibold hover:text-opacity-70">About</a>
                <a href="#portfolio" className="text-primary block font-semibold hover:text-opacity-70">School Project</a>
                <a href="#skillpage" className="text-primary block font-semibold hover:text-opacity-70">My Skill</a>
                <a href="#contact" className="text-primary block font-semibold hover:text-opacity-70">Help</a>
            </div>
          </div>
        )}
        </div>
      </header>
    {/* header stop */}

    {/* hero start */}
    <section id="home" className="pt-36 mx-auto flex items-center justify-center h-screen ">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="m-4 inline-flex font-bold text-slate-900 text-4xl mt-2 lg:text-5xl">I&apos;m Azzahra Latifa Debian</h1>
            <h2 className="m-4 font-medium text-secondary text-lg">Beginner Developer | <span className="text-secondary">Student</span></h2>
            <p className=" m-4 font-medium text-dark mb-10 leading-relaxed"></p>
            <a href="#contact" className="text-base font-semibold text-slate-50 bg bg-primary py-3 px-8 rounded-full hover:opacity-90
            hover:shadow-lg transition duration-300 ease-in-out m-4">Contact Me</a>
          </div>
            <div className="w-full self-end px-4 lg:w-1/2 lg:scale-125 md:scale-90 scale-110">
                <div className="relative mt-10 lg:mt-0 lg:mr-0">
                  <Image 
                  src={zara} 
                  alt="azzara"
                  priority 
                  className="max-w-full mx-auto scale-125"/>
                    <span className="">
                      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" 
                      className="absolute -bottom-24 -z-10 isolate mx-auto md:scale-75 md:-bottom-32">
                        <path fill="#f472b6"
                        d="M67.4,-25.1C73.4,-3.4,54.7,23.1,32.4,37.6C10.1,52.2,-15.8,54.8,-33.9,42.7C-51.9,30.5,-62,3.5,-55,-19.5C-48,-42.5,-24,-61.6,3.3,-62.7C30.7,-63.8,61.4,-46.9,67.4,-25.1Z"
                        transform="translate(100 100) scale(1.1)" />
                      </svg>
                    </span>
                </div>
            </div>
        </div>
      </div>
    </section>
      {/* hero stop */}

        {/* about section */}
    <section id="about" className="pt-40 pb-32 mx-auto flex items-center justify-center h-screen">
      <div className="container">
        <div className="flex flex-wrap m-4">
            <div className="w-full px-10 mb-10 lg:w-1/2">
            <h4 className="font-bold uppercase text-primary text-md mb-3">About Me</h4>
            <h2 className="font-bold text-secondary text-3xl mb-5 max-w-md lg:text-4xl">Hello All</h2>
            <p className="font-medium text-base text-dark max-w-xl lg:text-lg">I&apos;m a student from SMK TI Global Denpasar.
              I&apos;m majoring in RPL. I&apos;am very interested in technological advancements that&apos;s one of the reasons I became
              interested in programming.
            </p>
            </div>
            <div className="w-full py-10 lg:w-1/2 p-5 ml-6">
              <h3 className="font-semibold text-secondary text-2xl lg:text-3xl ">Lets Be Friend!</h3>
              <p className="font-medium text-base text-dark mb-6">I&apos;m active at social media so, let&apos;s be moots
              </p>
              <div className="flex items-center">


                {/* instagram */}
                <a href="https://www.instagram.com/raalilthings/"
                target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center
                items-center border border-slate-400 hover:border-primary hover:bg-primary
                hover:text-white text-slate-400">
                  <svg role="img" width='20' className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"><title>Instagram</title>
                  <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/>
                  </svg>
                </a>

                {/* youtube */}
                <a href="https://youtube.com"
                target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center
                items-center border border-slate-400 hover:border-primary hover:bg-primary
                hover:text-white text-slate-400">
                  <svg role="img" width='20' className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"><title>YouTube</title>
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* facebook */}
                <a href="https://www.facebook.com/azzahra.latifa.3110/"
                target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center
                items-center border border-slate-400 hover:border-primary hover:bg-primary
                hover:text-white text-slate-400">
                  <svg role="img" width='20' className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"><title>Facebook</title>
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
                  </svg>
                </a>

                {/* twtter */}
                <a href="https://twitter.com"
                target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center
                items-center border border-slate-400 hover:border-primary hover:bg-primary
                hover:text-white text-slate-400">
                   <svg role="img" width='20' className="fill-current"
                   viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg"><title>X</title>
                   <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                   </svg>
                </a>

               {/* linkdn */}
               <a href="https://linkedin.com/"
                target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center
                items-center border border-slate-400 hover:border-primary hover:bg-primary
                hover:text-white text-slate-400">
                <svg role="img" width='20' className="fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
    </section>
    {/* about stop */}

        {/* porto start */}
        <section id="portfolio" className="pt-36 pb-16 bg-soft gadget:px-20">
          <div className="container">
            <div className="w-full px-4">
              <div className="max-w-xl mx-auto text-center mb-16 gadget:mx-auto">
                <h4 className="font-semibold text-lg text-primary mb-2 md:text-xl">Project</h4>
                <h2 className="font-bold text-secondary text-3xl mb-4 sm:text-3xl lg:text-4xl">School Project</h2>
                <p className="font-medium text-md text-dark md:text-lg">At school, I learned basic of programing. I learned C++ with DevCpp and 
                  design user interface with adobe flash and adobe animate
                </p>
              </div>
            </div>
            <div className="w-full px-0 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
              <div className="mb-12 p-4 md:w-1/2">
                <div className="rounded-md shadow-md overflow-hidden">
                  <Image src={port1} alt="program c++: cashier program"
                  className="w-full"/>
                  <h3 className="font-semibold text-xl text-secondary mt-5 mb-3 p-2">C++ Project</h3>
                  <p className="font-medium text-base text-dark p-2">In the first semester i learned a lot about
                    C++. I made so many project and this is the project that my teacher give it to us to complete the final exam.
                    This is an online shopping program.
                  </p>
                </div>
              </div>
              <div className="mb-12 p-4 md:w-1/2">
                <div className="rounded-md shadow-md overflow-hidden">
                  <Image src={port2} alt="adobe animate project"
                  className="w-full"/>
                  <h3 className="font-semibold text-xl text-secondary mt-5 mb-3 p-2">Adobe Animate Project</h3>
                  <p className="font-medium text-base text-dark p-2">In the last semester. I learned about adobe flash and animate.
                    I made a <span className="italic">edugame</span> with adobe animate for my final exam. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* porto end */}

        {/* skill start */}
        <section id="skillpage" className="pt-40 pb-16 bg-primary mx-auto">
        <div className="container">
            <div className="w-full px-4">
              <div className="max-w-xl mx-auto text-center mb-16">
                <h2 className="font-bold text-sla text-3xl mb-4 sm:text-3xl lg:text-4xl text-slate-50">My Skills</h2>
                
              </div>
            </div>
            <div className="w-full px-4">
              <div className="flex flex-wrap items-center justify-center">
                <div className="max-w-[140px] mx-4 py-4 lg:mx-6 xl:mx-8 border border-skill p-5 rounded-2xl">
                <Image src={html} alt="html" width={100} height={100}
                className="fill-current"/>
                <h4 className="text-skill mt-1 font-bold flex flex-wrap items-center justify-center -mb-3">HTML</h4>
                </div>
                <div className="max-w-[140] mx-4 my-4 py-4 lg:mx-6 xl:mx-8 border border-skill p-5 rounded-2xl">
                <Image src={css} alt="css" width={100} height={100}
                className="fill-current"/>
                <h4 className="text-skill mt-1 font-bold flex flex-wrap items-center justify-center -mb-3">CSS</h4>
                </div>
                <div className="max-w-[140] mx-4 py-4 lg:mx-6 xl:mx-8 border border-skill p-5 rounded-2xl">
                <Image src={cpp} alt="cpp" width={100} height={100}
                className="fill-current"/>
                <h4 className="text-skill mt-1 font-bold flex flex-wrap items-center justify-center -mb-3">C++</h4>
                </div>
                <div className="max-w-[140] mx-4 py-4 lg:mx-6 xl:mx-8 border border-skill p-5 rounded-2xl">
                <Image src={javascript} alt="java" width={100} height={100}
                className="fill-current"/>
                <h4 className="text-skill mt-1 font-bold flex flex-wrap items-center justify-center -mb-3">JAVASCRIPT</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* skill stop */}

        {/* contact+footer start */}
          <section id="contact" className="pt-36 pb-32 mx-auto gadget:px-20">
            <div className="container">
              <div className="w-full px-4">
                <div className="max-w-xl mx-auto text-center mb-16">
                  <h4 className="font-semibold text-lg text-primary mb-2">Contact</h4>
                  <h2 className="font-bold text-secondary text-3xl mb-4 sm:text-4xl
                  lg:text-5xl">I&apos;m Here To Help</h2>
                  <p className="font-medium text-md text-dark md:text-lg">Let&apos;s get creative! 
                    If you need help with your project, just let me know!</p>
                </div>
              </div>
                <form>
                  <div className="w-full lg:w-2/3 lg:mx-auto">
                  <div className="w-full px-4 mb-8">
                    <label htmlFor="name" className="text-base text-primary font-bold">Name</label>
                    <input type="text" id="name" className="w-full bg-soft text-secondary
                    p-3 rounded-md focus:outline-none focus:ring-primary
                    focus:riing-1 focus:border-primary"></input>
                  </div>
                  <div className="w-full px-4 mb-8">
                    <label htmlFor="email" className="text-base text-primary font-bold">Email</label>
                    <input type="email" id="email" className="w-full bg-soft text-secondary
                    p-3 rounded-md focus:outline-none focus:ring-primary
                    focus:riing-1 focus:border-primary"></input>
                  </div>
                  <div className="w-full px-4 mb-8">
                    <label htmlFor="message" className="text-base text-primary font-bold">Message</label>
                    <textarea id="message" className="w-full bg-soft text-secondary
                     p-2 h-32 rounded-md focus:outline-none focus:ring-primary
                    focus:riing-1 focus:border-primary"></textarea>
                  </div>
                  <div className="w-full px-5">
                    <button className="text-base font-semibold text-white bg-primary
                    py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition
                    duration-500">Send</button>
                  </div>
                  </div>
                </form>
            </div>
          </section>
        {/* contact+footer stop */}

        {/* footer start */}
          <footer className="bg-soft pt-20 pb-10 mx-auto">
            <div className="container">
              <div className="flex flex-wrap">
                <div className="w-full ">
                <div className="flex items-center justify-center">
            
                  {/* instagram */}
                  <a href="https://www.instagram.com/raalilthings/"
                  target="_blank" className="w-8 h-8 mr-3 rounded-full flex justify-center
                  items-center border border-slate-500 hover:border-primary hover:bg-primary
                  hover:text-white text-slate-500">
                    <svg role="img" width='18' className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"><title>Instagram</title>
                    <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/>
                    </svg>
                  </a>

                {/* youtube */}
                <a href="https://youtube.com"
                target="_blank" className="w-8 h-8 mr-3 rounded-full flex justify-center
                items-center border border-slate-500 hover:border-primary hover:bg-primary
                hover:text-white text-slate-500">
                  <svg role="img" width='18' className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"><title>YouTube</title>
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* facebook */}
                <a href="https://www.facebook.com/azzahra.latifa.3110/"
                target="_blank" className="w-8 h-8 mr-3 rounded-full flex justify-center
                items-center border border-slate-500 hover:border-primary hover:bg-primary
                hover:text-white text-slate-500">
                  <svg role="img" width='18' className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"><title>Facebook</title>
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
                  </svg>
                </a>

                {/* twtter */}
                <a href="https://twitter.com"
                target="_blank" className="w-8 h-8 mr-3 rounded-full flex justify-center
                items-center border border-slate-500 hover:border-primary hover:bg-primary
                hover:text-white text-slate-500">
                  <svg role="img" width='18' className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"><title>X</title>
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                  </svg>
                </a>

                {/* linkdn */}
                <a href="https://linkedin.com/"
                target="_blank" className="w-8 h-8 mr-3 rounded-full flex justify-center
                items-center border border-slate-500 hover:border-primary hover:bg-primary
                hover:text-white text-slate-500">
                <svg role="img" width='18' className="fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                </a>
                </div>
                <p className="font-medium text-sm text-slate-500 text-center mt-5">Copyright © Azzahra Latifa, All rights reserved.</p>
                </div>
              </div>
            </div>
          </footer>
        {/* footer end */}
   </main>
  );
}
