import { useGSAP } from '@gsap/react'
import gsap, { Power4 } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { video } from 'motion/react-client'
import React, { useEffect, useRef } from 'react'

const Play = () => {
       const parent = useRef(null)
       const videoref = useRef(null)
       useEffect(() => {
              gsap.registerPlugin(ScrollTrigger);
              gsap.to(video.current, {
                     scrollTrigger: {
                            trigger: parent.current,
                            top: "0 0",
                           
                            pin: true,

                     },
                     width:"120%",
                     height:"120%",
                     
              });
       });
       return (
              <div ref={parent} className='w-full h-screen overflow-hidden bg-black relative'>
                     <div ref={videoref} className="reel w-32 sm:w-96 overflow-hidden  aspect-video absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <video autoPlay muted loop className=' scale-105  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-center ' src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"></video>
                     </div>
                     <div className="overalay absolute  h-screen w-full  text-white py-10 flex flex-col justify-between">
                            <div className="n  flex gap-2  justify-center items-center ">
                                   <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white w-4" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
                                   <p>work in motion</p>
                            </div>
                            <h1 className='flex w-fuul justify-center items-center gap-20 sm:gap-[30vw] text-4xl'>
                                   <div className=" text-4xl sm:text-9xl sm:font-semibold font-light">Play</div>
                                   <div className=" text-4xl sm:text-9xl sm:font-semibold font-light">Reel</div>
                            </h1>
                            <div className=" w-full text-center"><p className='w-[80%] mx-auto text-center'>
                                   Our work is best experienced in motion. Don’t forget to put on your headphones. </p></div>
                     </div>
              </div>
       )
}

export default Play
