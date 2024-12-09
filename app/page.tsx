"use client";
import Image from "next/image";
import'../styles/custom.css'
import taksu1 from "../public/taksu1.png"
import line from "../public/line.svg"
import api1 from"../public/api1.png"
import external1 from "../public/external1.png"
import qr1 from "../public/qr1.png"
import qr2 from "../public/qr2.png"
import devtool from "../public/devtool.png"
import web1 from "../public/web1.png"
import React from "react";
import react from "../public/react.svg"
import next from "../public/next.svg"
import git from "../public/git.svg"
import tailwind from "../public/tailwind.svg"
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

  <main>
    {/* header start */}
    <header className={`fixed top-0 left-0  right-0 bg-cream flex justify-center gadget:justify-center transition-shadow text-lg duration-300 ${scrolling ? 'shadow-md' : 'shadow-none'} z-10 p-4`}>
        <div className="container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-2xl">
          <div className="flex items-center justify-between h-16 relative">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-slate-900 font-extrabold">
                AzzahraLatifa
                </a>
              </div>
            </div>
            {/* right */}
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-8">
                <a href="#home" className="text-ijo font-extrabold hover:text-opacity-70">Home</a>
                <a href="#about" className="text-ijo font-extrabold hover:text-opacity-70">Introduce</a>
                <a href="#skillpage" className="text-ijo font-extrabold hover:text-opacity-70">Skill</a>
                <a href="#portfolio" className="text-ijo font-extrabold hover:text-opacity-70">Project</a>
                <a href ="#contact"className="text-ijo font-extrabold hover:text-opacity-70">Devtools Task</a>
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
                <a href="#about" className="text-primary block font-semibold hover:text-opacity-70">Introduce</a>
                <a href="#portfolio" className="text-primary block font-semibold hover:text-opacity-70">Skill</a>
                <a href="#skillpage" className="text-primary block font-semibold hover:text-opacity-70">Project</a>
            </div>
          </div>
        )}
        </div>
      </header>
    {/* header stop */}

    {/* hero start */}
    <section id="home" className="pt-31 mx-auto flex bg-cream items-center justify-center h-screen">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="m-4 font-bold text-ijo text-4xl mt-2 lg:text-7xl md:pt-20">TAKSU TECH INTERNSHIP</h1>
            <h2 className="m-4 italic font-medium text-secondary text-lg">Bridging Education and Industry Through Hands-On Learning</h2>
            <p className=" m-4 font-medium text-dark mb-10 leading-relaxed"></p>
            <a href="https://taksu.tech/" className="text-base font-semibold text-slate-50 bg bg-oren py-3 px-8 rounded-full hover:opacity-90
            hover:shadow-lg transition duration-300 ease-in-out m-4">Visit Taksu Website !</a>
          </div>
            <div className="w-full px-4 lg:w-1/2 lg:scale-125 md:scale-90 scale-110">
                <div className="absolute top-12  inset-x-0 z-0 size-96">
                  <Image 
                  src={line} 
                  alt="line"
                  priority 
                  className="max-w-full mx-auto scale-125 size-96 mt-14 p-3 -mr-48"/>
                </div>
            </div>
        </div>
      </div>
    </section>
      {/* hero stop */}

        {/* about section */}
    <section id="about" className="pt-40 pb-32 mx-auto flex bg-ijo items-center h-screen">
      <div className="container">
        <div className="flex justify-end">
        <div>
                <div className="border-4 rounded-2xl p-5 ml-6">
                  <Image
                  src={taksu1}
                  alt="office"/>
                </div>
              </div>
            <div className="w-full py-10 lg:w-1/3 p-5 ml-6 lg:mx-20">
              <h4 className="font-bold uppercase text-white italic text-md text-lg ">Introduce</h4>
              <h3 className="font-semibold text-pink text-2xl lg:text-6xl -ml-1 pt-2 pb-2 leading-normal">TAKSU TECH</h3>
              <p className="font-medium italic  text-base text-white mb-6 mt-3">
              Taksu Tech is an innovative App Development Studio with offices in Singapore and Bali.
              Specializing in custom mobile and web application development, Taksu Tech serves a global
              clientele across industries such as fleet management, robotics, bioinformatics,
              and medical device solutions.
              </p>
              <div className="flex ml-10">
                


                {/* instagram */}
                <a href="https://www.instagram.com/taksu.tech/"
                target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center
                items-center border border-cream hover:border-pink hover:bg-pink
                hover:text-ijo text-cream">
                  <svg role="img" width='20' className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"><title>Instagram</title>
                  <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/>
                  </svg>
                </a>

                
                {/* facebook */}
                <a href="https://www.facebook.com/"
                target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center
                items-center border border-cream hover:border-pink hover:bg-pink
                hover:text-ijo text-cream">
                  <svg role="img" width='20' className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"><title>Facebook</title>
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
                  </svg>
                </a>

               {/* linkdn */}
               <a href="https://id.linkedin.com/company/taksu-teknologi"
                target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center
                items-center border border-cream hover:border-pink hover:bg-pink
                hover:text-ijo text-cream">
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

        {/* skill start */}
        <section id="skillpage" className="pt-40 pb-40 bg-pink mx-auto gadget:px-20">
        <div className="container">
            
            <div className="w-full px-4">
              <div className="flex items-center justify-center">
                <div className="max-w-[500] mx-4 py-4 lg:mx-6 xl:mx-8 border-4 border-brow p-5 rounded-2xl">
                <Image src={react} alt="react" width={200} height={200}
                className="fill-current"/>
                <h4 className="text-brow mt-1 font-bold flex flex-wrap items-center justify-center -mb-3">React.js</h4>
                </div>
                <div className="max-w-[500] mx-4 my-4 py-4 lg:mx-6 xl:mx-8 border-4 border-brow p-5 rounded-2xl">
                <Image src={next} alt="nextjs" width={200} height={200}
                className="fill-current"/>
                <h4 className="text-brow mt-1 font-bold flex flex-wrap items-center justify-center -mb-3">Next.js</h4>
                </div>
                <div className="max-w-[500] mx-4 py-4 lg:mx-6 xl:mx-8 border-4 border-brow p-5 rounded-2xl">
                <Image src={git} alt="git" width={200} height={200}
                className="fill-current"/>
                <h4 className="text-brow mt-1 font-bold flex flex-wrap items-center justify-center -mb-3">Git</h4>
                </div>
                <div className="max-w-[500] mx-4 py-4 lg:mx-6 xl:mx-8 border-4 border-brow p-5 rounded-2xl">
                <Image src={tailwind} alt="git" width={200} height={200}
                className="fill-current"/>
                <h4 className="text-brow mt-1 font-bold flex flex-wrap items-center justify-center -mb-3">Tailwindcss</h4>
                </div>
                </div>
            </div>
            <div className="w-full px-4">
              <div className="max-w-xl mx-auto text-center mb-16">
                <h2 className="font-extrabold mt-16 text-3xl mb-4 sm:text-3xl lg:text-4xl text-secondary">My Skills</h2>
                <p className="text-dark italic">During my internship at Taksu, I learned various skills that I applied to the projects I worked on.
                   My experiences allowed me to contribute to different stages of project development</p>
              </div>
            </div>
          </div>
        </section>
        {/* skill stop */}

{/* porto start */}
        <section id="portfolio" className="pt-36 pb-16 bg-biru gadget:px-20">
          <div className="container">
            <div className="w-full px-4">
              <div className="max-w-xl mx-auto text-center mb-16 gadget:mx-auto">
                <h2 className="font-bold text-ijo text-3xl mb-4 sm:text-3xl lg:text-4xl">Internship Project</h2>
                <p className="font-medium text-md text-dark md:text-lg">During my internship, I had the opportunity to work on both individual projects and team projects. 
                  These experiences allowed me to develop technical skills and ability to collaborate in a team project
                </p>
              </div>
            </div>
            <div className="w-full px-0 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
            <div className="mb-12 p-4 md:w-1/2">
                <div className="rounded-md shadow-md overflow-hidden bg-pink p-4">
                  <Image src={web1} alt="website project"
                  className="w-full"/>
                  <h3 className="font-semibold text-xl text-ijo mt-5 mb-3 p-2 text-center">Profile Project</h3>
                  <p className="font-medium text-base text-white p-2">I worked on this project at the beginning of my internship. Before joining the project meetings, I was advised to learn Next.js and Tailwind CSS,
                    as I would be using both frameworks for this task.
                  </p>
                </div>
              </div>
              <div className="mb-12 p-4 md:w-1/2">
                <div className="rounded-md shadow-md overflow-hidden bg-pink p-4">
                  <Image src={devtool} alt="devtools"
                  className="w-full"/>
                  <h3 className="font-semibold text-xl text-ijo mt-5 mb-3 p-2 text-center">Devtools Team Project</h3>
                  <p className="font-medium text-base text-white p-2">In this project, I joined a team project. In this project, Iprimarily
                     used the React.js framework and Git to collaborate effectively with other team members. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* porto end */}
        
        {/* contact+footer start */}
          <section id="contact" className="pt-36 pb-32 mx-auto gadget:px-20 bg-brow">
            <div className="container">
            <div className="w-full px-4">
              <div className="max-w-xl mx-auto text-center mb-16 gadget:mx-auto">
                <h2 className="font-bold text-white text-3xl mb-4 sm:text-3xl lg:text-4xl italic">Devtools Task</h2>
                <p className="text-cream">The DevTools project is an app development initiative that provides tools to assist developers in their work.</p>
              </div>
            </div>
            <div className="w-full px-0 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
            <div className="mb-12 p-4 md:w-1/2">
                <div className="overflow-hidden ">
                  <Image src={qr1} alt="copy direct url"
                  className="w-full rounded-xl shadow-xl"/>
                  <div className="border-pink rounded-xl shadow-md bg-pink">
                  <h3 className=" font-semibold text-xl text-ijo mt-5 p-5 mb-4 bg-center text-center">QR Code Improvement Tools</h3>
                  <p className="-mt-9 pb-3 text-center italic text-dark">Copy Direct URL Button</p>
                  </div>
                  
                </div>
              </div>
              <div className="mb-12 p-4 md:w-1/2">
                <div className="overflow-hidden">
                  <Image src={qr2} alt="Color option"
                  className="w-full rounded-xl shadow-xl"/>
                  <div className="border-pink rounded-xl shadow-md bg-pink mt-16">
                  <h3 className=" font-semibold text-xl text-ijo mt-5 p-5 mb-4 bg-center text-center">QR Code Improvement Tools</h3>
                  <p className="-mt-9 pb-3 text-center italic text-dark">Add color option using Daisy.UI</p>
                  </div>
                  </div>
              </div>

              <div className="mb-12 p-4 md:w-1/2">
                <div className="overflow-hidden">
                  <Image src={api1} alt="imtegrate api data"
                  className="w-full rounded-xl shadow-xl h-60"/>
                  <div className="border-pink rounded-xl shadow-md bg-pink">
                  <h3 className=" font-semibold text-xl text-ijo mt-5 p-5 mb-4 bg-center text-center">SMTP Maildev Improvement Tools</h3>
                  <p className="-mt-9 pb-3 text-center italic text-dark">Connect SMTP Maildev to Data API</p>
                  </div>
                </div>
              </div>
              <div className="mb-12 p-4 md:w-1/2">
                <div className="overflow-hidden">
                  <Image src={external1} alt="external tools"
                  className="w-full rounded-xl shadow-xl h-60"/>
                 <div className="border-pink rounded-xl shadow-md bg-pink">
                  <h3 className=" font-semibold text-xl text-ijo mt-5 p-5 mb-4 bg-center text-center">Add New External Tools</h3>
                  <p className="-mt-9 pb-3 text-center italic text-dark">Add external tools (SVG Icon Library & IU Inspiration)</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </section>
        {/* contact+footer stop */}

        {/* footer start */}
          <footer className="bg-cream pt-20 pb-10 mx-auto gadget:px-20">
            <div className="container">
              <div className="flex flex-wrap">
                <div className="w-full ">
                <div className="flex items-center justify-center">
            
                  {/* instagram */}
                  <a href="https://www.instagram.com/raalilthings/"
                  target="_blank" className="w-8 h-8 mr-3 rounded-full flex justify-center
                  items-center border border-oren hover:border-oren hover:bg-oren
                hover:text-cream text-oren">
                    <svg role="img" width='18' className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"><title>Instagram</title>
                    <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/>
                    </svg>
                  </a>

                {/* youtube */}
                <a href="https://youtube.com"
                target="_blank" className="w-8 h-8 mr-3 rounded-full flex justify-center
                items-center border border-oren hover:border-oren hover:bg-oren
                hover:text-cream text-oren">
                  <svg role="img" width='18' className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"><title>YouTube</title>
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* facebook */}
                <a href="https://www.facebook.com/azzahra.latifa.3110/"
                target="_blank" className="w-8 h-8 mr-3 rounded-full flex justify-center
                items-center border border-oren hover:border-oren hover:bg-oren
                hover:text-cream text-oren">
                  <svg role="img" width='18' className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"><title>Facebook</title>
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
                  </svg>
                </a>

                {/* twtter */}
                <a href="https://twitter.com"
                target="_blank" className="w-8 h-8 mr-3 rounded-full flex justify-center
                items-center border border-oren hover:border-oren hover:bg-oren
                hover:text-cream text-oren">
                  <svg role="img" width='18' className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"><title>X</title>
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                  </svg>
                </a>

                {/* linkdn */}
                <a href="https://linkedin.com/"
                target="_blank" className="w-8 h-8 mr-3 rounded-full flex justify-center
                items-center border border-oren hover:border-oren hover:bg-oren
                hover:text-cream text-oren">
                <svg role="img" width='18' className="fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                </a>
                </div>
                <p className="font-bold text-sm text-ijo text-center mt-5">Copyright © Azzahra Latifa, All rights reserved.</p>
                </div>
              </div>
            </div>
          </footer>
        {/* footer end */}
   </main>
  );
}
